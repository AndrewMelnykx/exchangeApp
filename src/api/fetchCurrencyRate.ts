import { CurrencyRequestTypes } from "@store/types";
import axios from "axios";

const url = process.env.VITE_EXCHANGE_APP_CURRENCY_LATEST_LINK;

const fetchCurrencyRate = async ({
  sourceCurrency,
  targetCurrency,
  typeOfCurrency,
}: CurrencyRequestTypes) => {
  try {
    const fullUrl = `${url}${sourceCurrency}-${targetCurrency}`;

    const response = await axios.get(fullUrl);
    const data = response.data;

    const rateKey = `${sourceCurrency}${targetCurrency}`;
    const rateData = data[rateKey];

    const conversionRate = rateData?.[typeOfCurrency];

    return conversionRate;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchCurrencyRate;
