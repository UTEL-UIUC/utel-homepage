import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
export default () => {
  return (
    <>
      <Grid item container direction="column" md={6}>
        <Typography
          variant="h3"
          align="center"
          sx={{ display: { marginBottom: "20px" } }}
        >
          Publications
        </Typography>
        <Box sx={{ display: "flex" }}>
          <ArticleOutlinedIcon />
          <Typography>Hello</Typography>
        </Box>
      </Grid>
    </>
  );
};
