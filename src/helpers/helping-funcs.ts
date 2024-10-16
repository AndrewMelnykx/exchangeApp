const convertCurrency = (
  amount: string,
  rateFrom: string | null,
  rateTo: string | null
): string | null => {
  if (!rateFrom || !rateTo || !amount) return null;

  const amountNum = parseFloat(amount);
  const rateFromNum = parseFloat(rateFrom);
  const rateToNum = parseFloat(rateTo);

  if (isNaN(amountNum) || isNaN(rateFromNum) || isNaN(rateToNum)) return null;

  const convertedAmount = (amountNum / rateFromNum) * rateToNum;

  return convertedAmount.toFixed(4);
};
export { convertCurrency };
