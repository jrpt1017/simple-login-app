import React from "react";
import UserItem from "./UserItem";
import { Grid, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, userDetails } from "../redux/slices";

const UserList = ({ users }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector(userDetails);
  const allUsers = [...users, userInfo];

  const handleOnClick = () => {
    dispatch(logOutUser());
    router.push("/register");
  };
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          width: "80%",
          margin: "auto",
        }}
      >
        {allUsers.map((userItem) => {
          return (
            <React.Fragment key={userItem.id}>
              <UserItem user={userItem} />
            </React.Fragment>
          );
        })}
      </Grid>
      <Button
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          margin: "auto",
          display: "block",
          marginTop: 10,
          padding: 1.5,
        }}
        color="error"
        onClick={handleOnClick}
      >
        Logout
      </Button>
    </>
  );
};

export default UserList;
