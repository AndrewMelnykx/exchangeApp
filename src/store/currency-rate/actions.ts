import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyRequestTypes } from "@store/types";

import instance from "@api/axiosInstance";

const fetchCurrencyBid = createAsyncThunk(
  "data/fetchRatesThunk",
  async (
    { sourceCurrency, targetCurrency }: CurrencyRequestTypes,
    thunkAPI
  ) => {
    try {
      const response = await instance.get(
        `${sourceCurrency}-${targetCurrency}`
      );
      const data = response.data;

      const rateKey = `${sourceCurrency}${targetCurrency}`;
      const rateData = data[rateKey];

      if (!rateData) {
        throw new Error("Invalid response structure");
      }

      const conversionRate = rateData.ask;
      return conversionRate;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error);
        return thunkAPI.rejectWithValue(error || "Fetch failed");
      }
    }
  }
);

const fetchSourceCurrencyToDollar = createAsyncThunk(
  "data/fetchSourceCurrencyToDollar",
  async (
    { sourceCurrency, targetCurrency }: CurrencyRequestTypes,
    thunkAPI
  ) => {
    try {
      const response = await instance.get(
        `${sourceCurrency}-${targetCurrency}`
      );
      const data = response.data;

      const rateKey = `${sourceCurrency}${targetCurrency}`;
      const rateData = data[rateKey];

      if (!rateData) {
        throw new Error("Invalid response structure");
      }

      const conversionRate = rateData.ask;
      return conversionRate;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error);
        return thunkAPI.rejectWithValue(error || "Fetch failed");
      }
    }
  }
);

const fetchTargetCurrencyToDollar = createAsyncThunk(
  "data/fetchTargetCurrencyToDollar",
  async (
    { sourceCurrency, targetCurrency }: CurrencyRequestTypes,
    thunkAPI
  ) => {
    try {
      const response = await instance.get(
        `${sourceCurrency}-${targetCurrency}`
      );
      const data = response.data;

      const rateKey = `${sourceCurrency}${targetCurrency}`;
      const rateData = data[rateKey];

      if (!rateData) {
        throw new Error("Invalid response structure");
      }

      const conversionRate = rateData.ask;
      return conversionRate;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error);
        return thunkAPI.rejectWithValue(error || "Fetch failed");
      }
    }
  }
);

export {
  fetchCurrencyBid,
  fetchSourceCurrencyToDollar,
  fetchTargetCurrencyToDollar,
};
