import { RootState } from "@store/index";

const currencyRateSelector = (state: RootState) => state.data.ratesData;
const sourceRateSelector = (state: RootState) =>
  state.data.sourceCurrencyToUSDData;
const targetRateSelector = (state: RootState) =>
  state.data.targetCurrencyToUSDData;
const currencyAmountValueSelector = (state: RootState) =>
  state.elements.amountInputValue;
const sourceInputValueSelector = (state: RootState) =>
  state.elements.sourceInputValue;
const targetInputValueSelector = (state: RootState) =>
  state.elements.targetInputValue;

export {
  currencyRateSelector,
  sourceRateSelector,
  targetRateSelector,
  currencyAmountValueSelector,
  sourceInputValueSelector,
  targetInputValueSelector,
};
