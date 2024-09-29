import { DataHandlingTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCurrencyFromInDollarThunk,
  fetchCurrencyIntoDollarThunk,
  fetchCurrencyRateThunk,
} from "./actions-slice";

const initialState: DataHandlingTypes = {
  ratesData: "",
  currencyFromInDollarData: "",
  currencyToIntoDollar: "",
};

const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchCurrenciesData: (state, action) => {
      state.ratesData = action.payload;
    },
    fetchCurrencyFromToDollar: (state, action) => {
      state.currencyFromInDollarData = action.payload;
    },
    fetchCurrencyToIntoDollar: (state, action) => {
      state.currencyToIntoDollar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyRateThunk.fulfilled, (state, action) => {
      state.ratesData = action.payload;
    });
    builder.addCase(
      fetchCurrencyFromInDollarThunk.fulfilled,
      (state, action) => {
        state.currencyFromInDollarData = action.payload;
      }
    );
    builder.addCase(fetchCurrencyIntoDollarThunk.fulfilled, (state, action) => {
      state.currencyToIntoDollar = action.payload;
    });
  },
});

export default DataSlice;
