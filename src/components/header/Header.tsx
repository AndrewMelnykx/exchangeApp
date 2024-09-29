import { darkPurple } from "@helpers/colors";
import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../nav-bar/NavBar";

const Header = () => {
  return (
    <Box
      width={"100%"}
      height={"15%"}
      display={"flex"}
      bgcolor={darkPurple}
      alignSelf={"flex-start"}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        padding={2}
        width={"100%"}
        height={"100%"}
      >
        <Typography color="white" variant="h3" width={"25%"}>
          Best Exchange
        </Typography>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Header;
