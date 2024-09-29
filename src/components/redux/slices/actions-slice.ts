import fetchCurrencyRate from "@data/fetched-data/fetchCurrencyRate";
import { CurrencyRequestTypes } from "@redux/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCurrencyRateThunk = createAsyncThunk(
  "data/fetchRatesThunk",
  async ({ sourceCurrency, targetCurrency }: CurrencyRequestTypes) => {
    const response = await fetchCurrencyRate({
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
    });
    return response;
  }
);
const fetchCurrencyFromInDollarThunk = createAsyncThunk(
  "data/fetchCurrencyFromThunk",
  async ({ sourceCurrency, targetCurrency }: CurrencyRequestTypes) => {
    const response = await fetchCurrencyRate({
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
    });
    return response;
  }
);
const fetchCurrencyIntoDollarThunk = createAsyncThunk(
  "data/fetchCurrencyToThunk",
  async ({ sourceCurrency, targetCurrency }: CurrencyRequestTypes) => {
    const response = await fetchCurrencyRate({
      sourceCurrency: sourceCurrency,
      targetCurrency: targetCurrency,
    });
    return response;
  }
);

export {
  fetchCurrencyRateThunk,
  fetchCurrencyFromInDollarThunk,
  fetchCurrencyIntoDollarThunk,
};
