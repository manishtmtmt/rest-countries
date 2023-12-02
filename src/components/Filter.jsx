import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterByRegion } from "../features/countries/countriesSlice";

const Filter = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(filterByRegion(query));
  }, [query]);
  return (
    <FormControl fullWidth>
      <InputLabel id="select-region">Filter by Region</InputLabel>
      <Select
        value={query}
        labelId="select-region"
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={"africa"}>Africa</MenuItem>
        <MenuItem value={"americas"}>America</MenuItem>
        <MenuItem value={"asia"}>Asia</MenuItem>
        <MenuItem value={"europe"}>Europe</MenuItem>
        <MenuItem value={"oceania"}>Oceania</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
