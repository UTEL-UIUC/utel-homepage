import React from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";

const lewis = [
  "Lewis Lehe",
  [
    "B.Phil. Mathematics-Economics, University of Pittsburgh",
    "M.A. Transport Economics, University of Leeds",
    "M.S. CEE, UC Berkeley",
    "Ph.D. CEE, UC Berkeley",
  ],
];

export default () => {
  let { person } = useParams();
  return (
    <Grid container item md={8}>
      <Paper elevation={2}>{person}</Paper>
    </Grid>
  );
};
