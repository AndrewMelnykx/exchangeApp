import React, { SyntheticEvent } from "react";
import { Box, IconButton } from "@mui/material";
import AmountInput from "./AmountInput";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CustomAutocomplete from "./CustomAutocomplete";
import { Currency } from "./types";
import { UseStoreDispatcher } from "@store/index";
import { ElementsSlice } from "@store/currency-rate/slice";
import { useSelector } from "react-redux";
import {
  sourceInputValueSelector,
  targetInputValueSelector,
} from "@storeCurrencyRate/selectors";
import {
  fetchSourceCurrencyToDollar,
  fetchTargetCurrencyToDollar,
} from "@store/currency-rate/actions";
import { ask, dollarUSA } from "@helpers/constants";
import "./index.scss";

const CustomInputsWrapper = () => {
  const dispatch = UseStoreDispatcher();
  const elementsActions = ElementsSlice.actions;
  const fromInputState = useSelector(sourceInputValueSelector);
  const toInputState = useSelector(targetInputValueSelector);

  const handleFromInputChange = (
    e: SyntheticEvent<Element, Event>,
    newValue: Currency | null
  ) => {
    dispatch(elementsActions.handleFromInputRedux(newValue));
  };

  const handleToInputChange = (
    e: SyntheticEvent<Element, Event>,
    newValue: Currency | null
  ) => {
    dispatch(elementsActions.handleToInputRedux(newValue));
  };

  const handleSwitchCurrency = async () => {
    dispatch(elementsActions.handleFromInputRedux(toInputState));
    dispatch(elementsActions.handleToInputRedux(fromInputState));
    const inputWithCurrencyAreValid = fromInputState && toInputState;
    if (inputWithCurrencyAreValid) {
      await dispatch(
        fetchSourceCurrencyToDollar({
          sourceCurrency: dollarUSA,
          targetCurrency: fromInputState.currencyISO,
          typeOfCurrency: ask,
        })
      );
      await dispatch(
        fetchTargetCurrencyToDollar({
          sourceCurrency: dollarUSA,
          targetCurrency: toInputState.currencyISO,
          typeOfCurrency: ask,
        })
      );
    }
  };

  return (
    <Box width={"100%"} height={"100%"} display={"flex"}>
      <Box display={"flex"} width={"60%"} height={"40%"}>
        <AmountInput />
        <CustomAutocomplete
          key={`${fromInputState}`}
          placeholder="Exchange from..."
          id="exchange-from-select"
          mt="2%"
          onChange={handleFromInputChange}
          value={fromInputState}
        />
      </Box>

      <Box display={"flex"} width={"40%"} height={"40%"}>
        <IconButton onClick={handleSwitchCurrency} className="switch-button">
          <CompareArrowsIcon />
        </IconButton>
        <CustomAutocomplete
          key={`${toInputState}`}
          placeholder="Exchange to..."
          id="exchange-to-select"
          mt="3%"
          onChange={handleToInputChange}
          value={toInputState}
        />
      </Box>
    </Box>
  );
};

export default CustomInputsWrapper;
