import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import UkraineFlag from "@assets/images/flags/flagUkraine.svg";
import EuroFlag from "@assets/images/flags/flagEuro.svg";
import USAFlag from "@assets/images/flags/flagUSA.svg";
import { darkPurple, lightPurple } from "@helpers/colors";
import fetchCurrencyAsk from "@data/fetched-data/fetchCurrencyAsk";
import { dollarUSA, euroEurope, hryvniaUkraine } from "@helpers/constants";
import fetchCurrencyRate from "@data/fetched-data/fetchCurrencyRate";

const NavBar = () => {
  const [USDtoUAHCurrencyAsk, setUSDtoUAHCurrencyAsk] = useState("");
  const [USDtoUAHCurrencyBid, setUSDtoUAHCurrencyBid] = useState("");
  const [EURtoUAHCurrencyAsk, setEURtoUAHCurrencyAsk] = useState("");
  const [EURtoUAHCurrencyBid, setEURtoUAHCurrencyBid] = useState("");

  const fetchUAHtoUSDandEURCurrencies = useCallback(async () => {
    try {
      const responseForUSDAsk = await fetchCurrencyAsk({
        sourceCurrency: dollarUSA,
        targetCurrency: hryvniaUkraine,
      });
      setUSDtoUAHCurrencyAsk(responseForUSDAsk);
      const responseForUSDBid = await fetchCurrencyRate({
        sourceCurrency: dollarUSA,
        targetCurrency: hryvniaUkraine,
      });
      setUSDtoUAHCurrencyBid(responseForUSDBid);

      const responseForEURAsk = await fetchCurrencyAsk({
        sourceCurrency: euroEurope,
        targetCurrency: hryvniaUkraine,
      });
      setEURtoUAHCurrencyAsk(responseForEURAsk);
      const responseForEURBid = await fetchCurrencyRate({
        sourceCurrency: euroEurope,
        targetCurrency: hryvniaUkraine,
      });
      setEURtoUAHCurrencyBid(responseForEURBid);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUAHtoUSDandEURCurrencies();
  }, [fetchUAHtoUSDandEURCurrencies]);

  return (
    <Box
      display="flex"
      alignItems="center"
      color={"white"}
      justifyContent="space-between"
      width="100%"
      padding="0 20px"
    >
      <Box display="flex" alignItems="center" ml={20}>
        <Box display={"flex"} alignItems={"center"} marginRight={10}>
          <Box display={"flex"} flexDirection={"column"} mt={4} mr={4}>
            <Box display={"flex"} alignItems={"center"}>
              <img
                src={EuroFlag}
                alt="EuroFlag"
                style={{ marginLeft: "5px", width: "20px" }}
              />
              <Typography variant="h5">EUR€</Typography>
            </Box>
            <Typography variant="h6">Per 1.00€</Typography>
          </Box>

          <Box display={"flex"} flexDirection={"column"} mt={4}>
            <Box display={"flex"} alignItems={"center"}>
              <img
                src={UkraineFlag}
                alt="Ukraine Flag"
                style={{ marginLeft: "12%", width: "20px" }}
              />
              <Typography variant="h5">UAH₴</Typography>
            </Box>
            <Typography
              ml={3}
              variant="h6"
            >{`${EURtoUAHCurrencyBid}₴ / ${EURtoUAHCurrencyAsk}₴`}</Typography>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} alignItems={"center"} mt={4}>
            <img src={USAFlag} alt="USAFlag" style={{ width: "20px" }} />
            <Typography variant="h5"> USD$</Typography>
          </Box>
          <Typography variant="h6"> Per 1.00$</Typography>
        </Box>

        <Box display={"flex"} flexDirection={"column"} ml={4} mt={4} mr={2}>
          <Box display={"flex"} alignItems={"center"}>
            <img
              src={UkraineFlag}
              alt="Ukraine Flag"
              style={{ marginLeft: "12%", width: "20px" }}
            />
            <Typography variant="h6">UAH₴</Typography>
          </Box>
          <Typography
            ml={3}
            variant="h6"
          >{`${USDtoUAHCurrencyBid}₴ / ${USDtoUAHCurrencyAsk}₴`}</Typography>
        </Box>
      </Box>

      <Box>
        <Button
          sx={{
            color: `${darkPurple}`,
            background: `${lightPurple}`,
            fontSize: "1.5rem",
            marginLeft: "5px",
            "&:hover": {
              background: "white",
            },
          }}
        >
          Sign in
        </Button>
        <Button
          sx={{
            color: `${darkPurple}`,
            background: `${lightPurple}`,
            fontSize: "1.5rem",
            marginLeft: "5px",
            "&:hover": {
              background: "white",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
