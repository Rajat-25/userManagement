/// <reference types="vite/client" />

type UserDataType = UserType & {
  id: string;
};

type UserCardType = {
  val: userType & {
    id: string;
  };
};

type UserApiType = {
  name: string;
  phone: string;
  email: string;
  id: string;
};

type UserType = {
  fullName: string;
  phoneNo: string;
  email: string;
};

type InputFormType = {
  userFeilds: UserType;
};

type SkeletonType = {
  count: number;
};

type InitialStateType = {
  user: null | UserDataType;
};
