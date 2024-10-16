import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { DataHandlingTypes, ElementsHandlingTypes } from "./types";
import { ElementsSlice, DataSlice } from "./currency-rate/slice";

export interface RootState {
  data: DataHandlingTypes;
  elements: ElementsHandlingTypes;
}

const RootReducer = combineReducers({
  data: DataSlice.reducer,
  elements: ElementsSlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;
export { UseStoreDispatcher };
export default store;
