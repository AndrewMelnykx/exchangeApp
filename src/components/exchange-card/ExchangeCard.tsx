import { Box, Card, Typography } from "@mui/material";
import PinkBackground from "@assets/images/background/card-background.jpg";
import React, { useCallback, useEffect } from "react";
import CustomInputsWrapper from "@custom-inputs/CustomInputsWrapper";
import {
  fetchCurrencyFromInDollarThunk,
  fetchCurrencyIntoDollarThunk,
} from "@redux/slices/actions-slice";
import { UseStoreDispatcher } from "@redux/store/store";
import { useSelector } from "react-redux";
import {
  fromRateSelector,
  toRateSelector,
} from "@redux/selectors/data-selectors";
import {
  currencyAmountValueSelector,
  fromInputValueSelector,
  toInputValueSelector,
} from "@redux/selectors/elements-selectors";
import { dollarUSA } from "@helpers/constants";
import { convertCurrency } from "@helpers/helping-funcs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExchangeCard = () => {
  const dispatch = UseStoreDispatcher();
  const currencyAmountState = useSelector(currencyAmountValueSelector);
  const currencyFromState = useSelector(fromInputValueSelector);
  const currencyToState = useSelector(toInputValueSelector);
  const currencyRateFromToUSDState = useSelector(fromRateSelector);
  const currencyRateToIntoUSDState = useSelector(toRateSelector);

  const fetchRates = useCallback(async () => {
    try {
      if (currencyFromState) {
        await dispatch(
          fetchCurrencyFromInDollarThunk({
            sourceCurrency: dollarUSA,
            targetCurrency: currencyFromState.currencyISO,
          })
        );
      }
      if (currencyToState) {
        await dispatch(
          fetchCurrencyIntoDollarThunk({
            sourceCurrency: dollarUSA,
            targetCurrency: currencyToState.currencyISO,
          })
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wnt wrong.Please try again later", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  }, [currencyFromState, currencyToState, dispatch]);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  const convertedValue = convertCurrency(
    currencyAmountState,
    currencyRateFromToUSDState,
    currencyRateToIntoUSDState
  );
  const convertedValueIsValid = convertedValue !== null;

  return (
    <Box
      width={"100%"}
      height={"45%"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      display={"flex"}
      sx={{
        backgroundImage: `url(${PinkBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Add the ToastContainer component */}
      <ToastContainer />

      <Typography variant="h3" mb={5} color="white">
        Foreign Currency Converter
      </Typography>
      <Card
        sx={{
          width: "80%",
          height: "80%",
          flexDirection: "column",
          display: "flex",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          mb: "-20%",
          padding: 1,
        }}
      >
        <CustomInputsWrapper />
        <Box alignSelf={"center"} mb={10}>
          {convertedValueIsValid ? (
            <Typography variant="h3">
              Converted Amount: {convertedValue} {currencyToState?.currencyISO}
            </Typography>
          ) : null}
        </Box>
      </Card>
    </Box>
  );
};

export default ExchangeCard;
