import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

const Item = ({ title, href }) => {
  return (
    <Grid item sx={{ mb: 1 }}>
      <Paper sx={{ p: 1, display: "flex", alignItems: "center" }} variant="outlined">
        <PictureAsPdfIcon sx={{ mr: 1 }} color="primary" />
        <Box>
          <Link href={href} target="_blank" variant="h6" color="secondary">
            {title}
          </Link>
        </Box>
      </Paper>
    </Grid>
  );
};

export default () => {
  return (
    <Grid
      container
      justifyContent="center"
      item
      md={7}
      xs={10}
      direction="column"
    >
      <Typography variant="h4" align="center" mb={2}>
        CEE 310
      </Typography>

      <Typography variant="h5" mt={2} mb={1}>
        Lectures
      </Typography>
      <Item
        title="Four-Step Modeling"
        href="/lec-four-step-modeling.pdf"
      />
      <Item
        title="Mode Choice"
        href="/lec-mode-choice.pdf"
      />
      <Item
        title="Traffic Assignment"
        href="/lec-traffic-assignment.pdf"
      />
      <Item
        title="Transportation Economics"
        href="/lec-transportation-economics.pdf"
      />
      <Item
        title="Vertical Curves"
        href="/lec-verticalCurves.pdf"
      />

      <Typography variant="h5" mt={3} mb={1}>
        Handouts
      </Typography>
      <Item
        title="Exam II Handout"
        href="/handout-exam-II.pdf"
      />
    </Grid>
  );
};
