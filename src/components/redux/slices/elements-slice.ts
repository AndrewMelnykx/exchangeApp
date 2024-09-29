import { ElementsHandlingTypes } from "../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ElementsHandlingTypes = {
  amountInputValue: "",
  fromInputValue: null,
  toInputValue: null,
};

const ElementsSlice = createSlice({
  name: "elements",
  initialState,
  reducers: {
    handleAmountInputRedux: (state, action) => {
      state.amountInputValue = action.payload;
    },
    handleFromInputRedux: (state, action) => {
      state.fromInputValue = action.payload;
    },
    handleToInputRedux: (state, action) => {
      state.toInputValue = action.payload;
    },
  },
});

export default ElementsSlice;
