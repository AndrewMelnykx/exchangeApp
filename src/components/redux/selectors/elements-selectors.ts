import { RootState } from "@redux/reducers/RootReducer";

const currencyAmountValueSelector = (state: RootState) =>
  state.elements.amountInputValue;
const fromInputValueSelector = (state: RootState) =>
  state.elements.fromInputValue;
const toInputValueSelector = (state: RootState) => state.elements.toInputValue;
export {
  currencyAmountValueSelector,
  fromInputValueSelector,
  toInputValueSelector,
};
