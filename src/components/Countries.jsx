import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import CountryCard from "./CountryCard";

const Countries = () => {
  const { data, filteredData } = useSelector((state) => state.countriesReducer);

  useEffect(() => {}, [data, filteredData]);

  return (
    data.length && (
      <Container sx={{ marginTop: "5%" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent={"space-around"}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {filteredData.length > 0
            ? filteredData.map((country, index) => (
                <Grid item xs={3} sm={4} md={4} key={index}>
                  <CountryCard key={index} country={country} />
                </Grid>
              ))
            : data.map((country, index) => (
                <Grid item xs={3} sm={4} md={4} key={index}>
                  <CountryCard key={index} country={country} />
                </Grid>
              ))}
        </Grid>
      </Container>
    )
  );
};

export default Countries;
