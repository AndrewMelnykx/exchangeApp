import { DataHandlingTypes, ElementsHandlingTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSourceCurrencyToDollar,
  fetchTargetCurrencyToDollar,
  fetchCurrencyBid,
} from "./actions";

const initialStateData: DataHandlingTypes = {
  ratesData: "",
  sourceCurrencyToUSDData: "",
  targetCurrencyToUSDData: "",
};
const initialStateElements: ElementsHandlingTypes = {
  amountInputValue: "",
  sourceInputValue: null,
  targetInputValue: null,
};

const ElementsSlice = createSlice({
  name: "elements",
  initialState: initialStateElements,
  reducers: {
    handleAmountInputRedux: (state, action) => {
      state.amountInputValue = action.payload;
    },
    handleFromInputRedux: (state, action) => {
      state.sourceInputValue = action.payload;
    },
    handleToInputRedux: (state, action) => {
      state.targetInputValue = action.payload;
    },
  },
});

const DataSlice = createSlice({
  name: "data",
  initialState: initialStateData,
  reducers: {
    fetchCurrenciesData: (state, action) => {
      state.ratesData = action.payload;
    },
    fetchCurrencyFromToDollar: (state, action) => {
      state.sourceCurrencyToUSDData = action.payload;
    },
    fetchCurrencyToIntoDollar: (state, action) => {
      state.targetCurrencyToUSDData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyBid.fulfilled, (state, action) => {
      state.ratesData = action.payload;
    });
    builder.addCase(fetchSourceCurrencyToDollar.fulfilled, (state, action) => {
      state.sourceCurrencyToUSDData = action.payload;
    });
    builder.addCase(fetchTargetCurrencyToDollar.fulfilled, (state, action) => {
      state.targetCurrencyToUSDData = action.payload;
    });
  },
});
export { ElementsSlice, DataSlice };
