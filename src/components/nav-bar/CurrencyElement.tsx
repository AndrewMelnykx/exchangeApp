import React from "react";
import { Box, Typography } from "@mui/material";
import { hryvniaUkraine } from "@helpers/constants";
import UkraineFlag from "@assets/images/flags/flagUkraine.svg";

interface CurrencyElementProps {
  bid: string;
  ask: string;
}

const CurrencyElement: React.FC<CurrencyElementProps> = ({ bid, ask }) => {
  return (
    <Box display="flex" flexDirection="column" mt={4} mr={4}>
      <Box display="flex" alignItems="center">
        <img
          src={UkraineFlag}
          alt={`${hryvniaUkraine} Flag`}
          style={{ marginLeft: "2%", width: "20px" }}
        />
        <Typography variant="h5">{hryvniaUkraine}</Typography>
      </Box>
      <Typography variant="h6">
        {ask ? `${bid}₴ / ${ask}₴` : "Loading..."}
      </Typography>
    </Box>
  );
};

export default CurrencyElement;
