const currencyRateSelector = (state) => state.data.ratesData;
const fromRateSelector = (state) => state.data.currencyFromInDollarData;
const toRateSelector = (state) => state.data.currencyToIntoDollar;
export { currencyRateSelector, fromRateSelector, toRateSelector };
