import React from "react";
import UserItem from "../../components/UserItem";
import { Grid } from "@mui/material";

const dashboard = ({ users }) => {
  return (
    <Grid container spacing={3}>
      {users.map((userItem) => {
        return (
          <React.Fragment key={userItem.id}>
            <UserItem user={userItem} />
          </React.Fragment>
        );
      })}
    </Grid>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default dashboard;
