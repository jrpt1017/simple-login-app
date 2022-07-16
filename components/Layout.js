import React from "react";
import MainHeader from "./MainHeader";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Box sx={{ marginTop: 10 }}>{children}</Box>
    </>
  );
};

export default Layout;
