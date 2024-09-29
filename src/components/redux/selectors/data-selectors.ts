import { RootState } from "@redux/reducers/RootReducer";

const currencyRateSelector = (state: RootState) => state.data.ratesData;
const fromRateSelector = (state: RootState) =>
  state.data.currencyFromInDollarData;
const toRateSelector = (state: RootState) => state.data.currencyToIntoDollar;

export { currencyRateSelector, fromRateSelector, toRateSelector };
