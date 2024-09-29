import { SyntheticEvent } from "react";

interface Currency {
  id: number;
  currencyISO: string;
  currencyName: string;
  flag: string;
}

interface CustomAutocompleteProps {
  placeholder: string;
  id: string;
  mt: string;
  onChange: (
    event: SyntheticEvent<Element, Event>,
    newValue: Currency | null
  ) => void;
  value: Currency | null;
}

export type { Currency, CustomAutocompleteProps };
