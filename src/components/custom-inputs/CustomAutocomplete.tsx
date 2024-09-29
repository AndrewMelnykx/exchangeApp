import React from "react";
import { TextField, Box, Autocomplete } from "@mui/material";
import { currencies } from "@data/static-data/currencyList";
import { CustomAutocompleteProps } from "./types";
const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
  placeholder,
  id,
  mt,
  onChange,
  value,
}) => {
  return (
    <Autocomplete
      id={id}
      sx={{ width: "100%", mt: `${mt}`, ml: "2%" }}
      options={currencies}
      autoHighlight
      value={value}
      getOptionLabel={(option) =>
        ` ${option.currencyISO} - ${option.currencyName}`
      }
      onChange={onChange}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Box
            key={option.id + key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20px"
              src={`${option.flag}`}
              alt={`${option.currencyISO} flag`}
            />
            {option.currencyISO}-{option.currencyName}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeholder}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password",
            },
          }}
        />
      )}
    />
  );
};

export default CustomAutocomplete;
