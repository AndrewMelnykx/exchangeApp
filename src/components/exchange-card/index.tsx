import { Box, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CustomInputsWrapper from "@custom-inputs/CustomInputsWrapper";
import {
  fetchSourceCurrencyToDollar,
  fetchTargetCurrencyToDollar,
} from "@store/currency-rate/actions";
import { UseStoreDispatcher } from "@store/index";
import { useSelector } from "react-redux";
import {
  sourceRateSelector,
  targetRateSelector,
} from "@store/currency-rate/selectors";
import {
  currencyAmountValueSelector,
  sourceInputValueSelector,
  targetInputValueSelector,
} from "@storeCurrencyRate/selectors";
import { ask, dollarUSA } from "@helpers/constants";
import { convertCurrency } from "@helpers/helping-funcs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";

const ExchangeCard = () => {
  const dispatch = UseStoreDispatcher();
  const currencyAmountState = useSelector(currencyAmountValueSelector);
  const currencySourceInputState = useSelector(sourceInputValueSelector);
  const currencyTargetInputState = useSelector(targetInputValueSelector);
  const sourceRateState = useSelector(sourceRateSelector);
  const targetRateState = useSelector(targetRateSelector);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        if (currencySourceInputState) {
          await dispatch(
            fetchSourceCurrencyToDollar({
              sourceCurrency: dollarUSA,
              targetCurrency: currencySourceInputState.currencyISO,
              typeOfCurrency: ask,
            })
          );
        }
        if (currencyTargetInputState) {
          await dispatch(
            fetchTargetCurrencyToDollar({
              sourceCurrency: dollarUSA,
              targetCurrency: currencyTargetInputState.currencyISO,
              typeOfCurrency: ask,
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
    };
    console.log(sourceRateState);
    fetchRates();
  }, [
    currencySourceInputState,
    currencyTargetInputState,
    dispatch,
    sourceRateState,
  ]);

  const convertedValue = convertCurrency(
    currencyAmountState,
    sourceRateState,
    targetRateState
  );
  const convertedValueIsValid = convertedValue !== null;

  return (
    <Box className="main-card-wrapper">
      <ToastContainer />

      <Typography variant="h3" mb={5} color="white">
        Foreign Currency Converter
      </Typography>
      <Card className="main-card">
        <CustomInputsWrapper />
        <Box alignSelf={"center"} mb={10}>
          {convertedValueIsValid ? (
            <Typography variant="h3">
              Converted Amount: {convertedValue}
              {currencyTargetInputState?.currencyISO}
            </Typography>
          ) : null}
        </Box>
      </Card>
    </Box>
  );
};

export default ExchangeCard;
