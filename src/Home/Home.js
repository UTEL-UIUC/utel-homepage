import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default () => {
  return (
    <>
      <Grid item container direction="row" columns={12} spacing={4} justifyContent='center'>
        <Grid item md={3}>
          <Typography variant="h3">Urban Traffic and Economics Lab</Typography>
          <Typography>UTEl studies blah blah blah</Typography>
        </Grid>
        <Grid item md={5}>
          <img
            src="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            width="100%"
          />
        </Grid>
      </Grid>
    </>
  );
};
