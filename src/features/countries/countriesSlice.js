import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  data: [],
  filteredData: [],
  error: null,
};

export const fetchCountriesData = createAsyncThunk(
  "api/fetCountriesData",
  async () => {
    try {
      const { data } = await axios("https://restcountries.com/v3.1/all");
      console.log("🚀 ~ file: countriesSlice.js:16 ~ data:", data);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: countriesSlice.js:14 ~ fetchCountriesData ~ error:",
        error
      );
      throw new Error(error.message);
    }
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    searchCountryByName: (state, action) => {
      state.filteredData = state.data.filter((country) =>
        country.name.common.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterByRegion: (state, action) => {
      state.filteredData = state.data.filter(
        (country) =>
          country.region.toLowerCase() === action.payload.toLowerCase()
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCountriesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { searchCountryByName, filterByRegion } = countriesSlice.actions;

export default countriesSlice.reducer;
