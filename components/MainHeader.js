import React from "react";
import { useRouter } from "next/router";
import { Toolbar, AppBar, Box, Button } from "@mui/material";

const navItems = ["Login", "Register", "Dashboard"];
const MainHeader = () => {
  const router = useRouter();

  const isCurrentRoute = (pageName) => {
    return router.pathname === `/${String(pageName).toLowerCase()}`;
  };

  return (
    <AppBar component="nav">
      <Toolbar>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <React.Fragment key={item}>
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  backgroundColor: isCurrentRoute(item) && "darkblue",
                }}
                id={item}
              >
                {item}
              </Button>
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
