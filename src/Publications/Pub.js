import React from "react";
import Box from "@mui/material/Box";
import LinkIcon from "@mui/icons-material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Paper } from "@mui/material";
import MyIconButton from '../MyIconButton/MyIconButton'
export default ({ title, journal, year, author, link, pdf }) => {
  return (
    <Paper elevation={2} sx={{ mb: 3, p: 2 }}>
      <Box>
        <Typography variant="h5" mb={1}>
          {title}
        </Typography>
        {/* <Divider xs={{m:3}}/> */}
        <Typography>
          {author} ({year})
        </Typography>

        <Typography>{journal}</Typography>
      </Box>
      <IconButton
        color="secondary"
        href={link}
        sx={{ display: link ? true : "none" }}
      >
        <LinkIcon />
      </IconButton>
      {/* {pdf ? ( */}
      <IconButton
        color="secondary"
        href={pdf}
        aria-label="preprint"
        sx={{ display: !!pdf }}
      >
        <PictureAsPdfIcon />
      </IconButton>
      {/* )       <Divider /> */}
    </Paper>
  );
};
