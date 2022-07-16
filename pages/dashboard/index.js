import React from "react";
import { Grid } from "@mui/material";
import UserList from "../../components/UserList";

const dashboard = ({ users }) => {
  return <UserList users={users} />;
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
