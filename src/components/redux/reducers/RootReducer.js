import { combineReducers } from "@reduxjs/toolkit";
import DataSlice from "../slices/data-slice";
import ElementsSlice from "@redux/slices/elements-slice";
const RootReducer = combineReducers({
    data: DataSlice.reducer,
    elements: ElementsSlice.reducer,
});
export default RootReducer;
