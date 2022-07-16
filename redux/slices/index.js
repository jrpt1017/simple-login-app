import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      (state.isLoggedIn = true), (state.user = action.payload);
    },
    logOutUser: (state) => {
      (state.isLoggedIn = false), (state.user = {});
    },
  },
});

export const { logInUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

export const userDetails = (state) => {
  return state.userState.user;
};
