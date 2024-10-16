import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import EuroFlag from "@assets/images/flags/flagEuro.svg";
import USAFlag from "@assets/images/flags/flagUSA.svg";
import {
  ask,
  bid,
  dollarUSA,
  euroEurope,
  hryvniaUkraine,
} from "@helpers/constants";
import fetchCurrencyRate from "@api/fetchCurrencyRate";
import "@variables";
import "./index.scss";
import CurrencyElement from "./CurrencyElement";
import FlagElement from "./FlagElement";

const NavBar = () => {
  const [currencyData, setCurrencyData] = useState({
    USDtoUAH: { ask: "", bid: "" },
    EURtoUAH: { ask: "", bid: "" },
  });

  useEffect(() => {
    const fetchHeaderStaticCurrencies = async () => {
      try {
        const fetchCurrency = async (source: string, type: string) => {
          return await fetchCurrencyRate({
            sourceCurrency: source,
            targetCurrency: hryvniaUkraine,
            typeOfCurrency: type,
          });
        };

        const [USDtoUAHAsk, USDtoUAHBid, EURtoUAHAsk, EURtoUAHBid] =
          await Promise.all([
            fetchCurrency(dollarUSA, ask),
            fetchCurrency(dollarUSA, bid),
            fetchCurrency(euroEurope, ask),
            fetchCurrency(euroEurope, bid),
          ]);

        setCurrencyData({
          USDtoUAH: { ask: USDtoUAHAsk, bid: USDtoUAHBid },
          EURtoUAH: { ask: EURtoUAHAsk, bid: EURtoUAHBid },
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchHeaderStaticCurrencies();
  }, []);

  return (
    <Box className="navbar-wrapper">
      <Box display="flex" alignItems="center" ml={20}>
        <FlagElement currencySymbol="€" title="EUR€" flagSource={EuroFlag} />
        <CurrencyElement
          bid={currencyData.EURtoUAH.bid}
          ask={currencyData.EURtoUAH.ask}
        />
        <FlagElement currencySymbol="$" title="USD$" flagSource={USAFlag} />

        <CurrencyElement
          bid={currencyData.USDtoUAH.bid}
          ask={currencyData.USDtoUAH.ask}
        />
      </Box>

      <Box>
        <Button className="custom-button">Sign in</Button>
        <Button className="custom-button">Register</Button>
      </Box>
    </Box>
  );
};

export default NavBar;
