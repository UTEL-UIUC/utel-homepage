import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
export default () => {
  return (
    <Grid item container direction="row" spacing={4} justifyContent="center">
      <Grid item md={3}>
        <Typography variant="h4" mb={3}>
          Urban Traffic and Economics Lab
        </Typography>
        <Typography sx={{ overflowWrap: "break-word" }}>
          Welcome to the Urban Traffic & Economics Lab (UTEL) at UIUC’s
          Department of Civil & Environmental Engineering, run by Dr. Lewis
          Lehe. The group is focused on understanding the interplay of traffic
          physics and human choices on city streets.
        </Typography>
        <IconButton
          alt="github"
          color="secondary"
          href={"https://github.com/UTEL-UIUC"}
        >
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid item md={4}>
        <img
          src="https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};
