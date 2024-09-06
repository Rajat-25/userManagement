import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
  reducerPath: 'user_api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_USER_URL,
  }),
  tagTypes: ['user'],
  endpoints: (builder) => {
    return {
      fetchUser: builder.query({
        providesTags: () => {
          return [
            {
              type: 'user',
            },
          ];
        },
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
      }),

      createUser: builder.mutation({
        invalidatesTags: () => {
          return [
            {
              type: 'user',
            },
          ];
        },
        query: (body) => {
          return {
            method: 'POST',
            url: '/users',
            body,
          };
        },
      }),

      deleteUser: builder.mutation({
        query: (id) => {
          return {
            method: 'DELETE',
            url: `/users/${id}`,
          };
        },
      }),

      editUser: builder.mutation({
        query: ({ id, data }) => {
          return {
            method: 'PUT',
            url: `/users/${id}`,
            body: data,
          };
        },
      }),
    };
  },
});

export const {
  useFetchUserQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = userApi;
export default userApi;
