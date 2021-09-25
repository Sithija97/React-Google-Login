import { Grid } from "@mui/material";
import React from "react";

const MainPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={6} md={8}>
        <Grid item>sithija</Grid>
      </Grid>
      <Grid item xs={6} md={4}>
        <Grid item>shehara</Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
