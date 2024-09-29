import { Currency } from "@custom-inputs/types";

interface DataHandlingTypes {
  ratesData: string | null;
  currencyFromInDollarData: string | null;
  currencyToIntoDollar: string | null;
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
  fromInputValue: Currency | null;
  toInputValue: Currency | null;
}

interface CurrencyRequestTypes {
  sourceCurrency: string;
  targetCurrency: string;
}

export type {
  DataHandlingTypes,
  ElementsHandlingTypes,
  CurrencyRequestTypes,
  CurrencyResponse,
  ConvertCurrencyParams,
};
