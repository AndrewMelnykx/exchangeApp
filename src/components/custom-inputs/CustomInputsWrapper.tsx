import React, { SyntheticEvent } from "react";
import { Box, IconButton } from "@mui/material";
import AmountInput from "./AmountInput";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CustomAutocomplete from "./CustomAutocomplete";
import { Currency } from "./types";
import { UseStoreDispatcher } from "@redux/store/store";
import ElementsSlice from "@redux/slices/elements-slice";
import { useSelector } from "react-redux";
import {
  fromInputValueSelector,
  toInputValueSelector,
} from "@redux/selectors/elements-selectors";
import {
  fetchCurrencyFromInDollarThunk,
  fetchCurrencyIntoDollarThunk,
} from "@redux/slices/actions-slice";
import { dollarUSA } from "@helpers/constants";

const CustomInputsWrapper = () => {
  const dispatch = UseStoreDispatcher();
  const elementsActions = ElementsSlice.actions;
  const fromInputState = useSelector(fromInputValueSelector);
  const toInputState = useSelector(toInputValueSelector);

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

  const handleButtonClick = async () => {
    dispatch(elementsActions.handleFromInputRedux(toInputState));
    dispatch(elementsActions.handleToInputRedux(fromInputState));
    const inputWithCurrencyAreValid = fromInputState && toInputState;
    if (inputWithCurrencyAreValid) {
      await dispatch(
        fetchCurrencyFromInDollarThunk({
          sourceCurrency: dollarUSA,
          targetCurrency: fromInputState.currencyISO,
        })
      );
      await dispatch(
        fetchCurrencyIntoDollarThunk({
          sourceCurrency: dollarUSA,
          targetCurrency: toInputState.currencyISO,
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
        <IconButton
          onClick={handleButtonClick}
          sx={{ width: "60px", height: "60px", ml: "2%", mt: "2%" }}
        >
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
