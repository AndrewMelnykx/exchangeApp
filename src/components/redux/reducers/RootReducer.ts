import { combineReducers } from "@reduxjs/toolkit";
import DataSlice from "../slices/data-slice";

import { DataHandlingTypes, ElementsHandlingTypes } from "../types";
import ElementsSlice from "@redux/slices/elements-slice";

export interface RootState {
  data: DataHandlingTypes;
  elements: ElementsHandlingTypes;
}

const RootReducer = combineReducers({
  data: DataSlice.reducer,
  elements: ElementsSlice.reducer,
});

export default RootReducer;
