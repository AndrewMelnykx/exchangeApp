import React from "react";
import { Box, Typography } from "@mui/material";
import "./index.scss";

interface FlagElementProps {
  currencySymbol: string;
  title: string;
  flagSource: string;
}

const FlagElement: React.FC<FlagElementProps> = ({
  flagSource,
  currencySymbol,
  title,
}) => {
  return (
    <Box display="flex" flexDirection="column" ml={4} mt={4} mr={7}>
      <Box display="flex" alignItems="center">
        <img src={flagSource} alt="USA Flag" style={{ width: "20px" }} />
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Typography variant="h6">Per 1.00{currencySymbol}</Typography>
    </Box>
  );
};

export default FlagElement;
