import { createSlice } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  user: null,
};

const userSlice = createSlice({
  name: 'user_slice',
  initialState,
  reducers: {
    addCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addCurrentUser } = userSlice.actions;
export default userSlice;
