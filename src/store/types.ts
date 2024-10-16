import { Currency } from "@custom-inputs/types";

interface DataHandlingTypes {
  ratesData: string | null;
  sourceCurrencyToUSDData: string | null;
  targetCurrencyToUSDData: string | null;
}

interface ConvertCurrencyParams {
  amount: number;
  rateFrom: number;
  rateTo: number;
}

type CurrencyRates = {
  ask: string;
  bid: string;
  code: string;
  codein: string;
  create_date: string;
  high: string;
  low: string;
  name: string;
  pctChange: string;
  timestamp: string;
  varBid: string;
};

type CurrencyResponse = {
  [key: string]: CurrencyRates;
};

interface ElementsHandlingTypes {
  amountInputValue: string;
  sourceInputValue: Currency | null;
  targetInputValue: Currency | null;
}

interface CurrencyRequestTypes {
  sourceCurrency: string;
  targetCurrency: string;
  typeOfCurrency: string;
}

export type {
  DataHandlingTypes,
  ElementsHandlingTypes,
  CurrencyRequestTypes,
  CurrencyResponse,
  ConvertCurrencyParams,
};
