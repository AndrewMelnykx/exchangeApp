import React, { ChangeEvent } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { UseStoreDispatcher } from "@redux/store/store";
import ElementsSlice from "@redux/slices/elements-slice";

const AmountInput = () => {
  const dispatch = UseStoreDispatcher();
  const stateActions = ElementsSlice.actions;

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(stateActions.handleAmountInputRedux(e.target.value));
  };

  return (
    <FormControl fullWidth sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
      <TextField
        onChange={handleInputValue}
        id="outlined-adornment-amount"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ fontSize: "1.5rem" }}>
              $
            </InputAdornment>
          ),
          sx: { fontSize: "1.5rem" },
        }}
        label="Amount"
        variant="standard"
      />
    </FormControl>
  );
};

export default AmountInput;
