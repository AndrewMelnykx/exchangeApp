import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../nav-bar";
import "./index.scss";

const Header = () => {
  return (
    <Box className="main-header-wrapper">
      <Box className="navbar-typography-wrapper">
        <Typography color="white" variant="h3" width={"25%"}>
          Best Exchange
        </Typography>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Header;
