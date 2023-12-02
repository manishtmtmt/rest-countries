import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { fetchCountriesData } from "./features/countries/countriesSlice";
import { ThemeContext } from "./context/theme.context";
import { Box, Container, Grid } from "@mui/material";
import Header from "./components/Header";
import Countries from "./components/Countries";
import SearchBar from "./components/Search";
import Filter from "./components/Filter";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const { isDark } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.countriesReducer);
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Box maxWidth={"xl"}>
          <Header />
          <Container maxWidth={"lg"}>
            <Grid
              container
              sx={{ marginTop: "3%" }}
              justifyContent={"space-between"}
              gap={2}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={3} md={4} height={56} ml={{ xs: 6, md: 0 }}>
                <SearchBar />
              </Grid>
              <Grid item xs={3} md={3} mr={3} ml={{ xs: 6, md: 0 }}>
                <Filter />
              </Grid>
            </Grid>
          </Container>
          <Countries />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
