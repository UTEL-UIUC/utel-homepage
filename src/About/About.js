import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import { faResearchgate } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeSvgIcon from "../FontAwesomeSVGIcon/FontAwesomeSVGIcon";
import CZ from "./cz.png";
import GTFSSegments from "./gtfs-segments.jpeg";
import MyIconButton from "../MyIconButton/MyIconButton";
import { Link } from "@mui/material";
export default () => {
  return (
    <Grid
      item
      container
      direction="column"
      md={8}
      lg={7}
      xs={10}
      id="about"
      justifyContent="center"
    >
      <Grid container mb={4}>
        <Typography variant="h4" mb={3}>
          Urban Traffic & Economics Lab
        </Typography>
        <Typography sx={{ overflowWrap: "break-word" }}>
          Welcome to the Urban Traffic & Economics Lab (UTEL) at UIUC’s
          Department of Civil & Environmental Engineering, run by{" "}
          <Link href="https://lewislehe.com" target="_blank" color="secondary">
            Dr. Lewis Lehe
          </Link>
          . The group is focused on movement of people in cities, emphasizing
          economic theory and novel data collection. We do a lot of programming.
        </Typography>
        <MyIconButton
          alt="github"
          href="https://github.com/UTEL-UIUC"
          icon={<GitHubIcon />}
        />
        <MyIconButton
          color="secondary"
          href="https://www.researchgate.net/lab/Urban-Traffic-Economics-Lab-UTEL-Lewis-Lehe"
          icon={<FontAwesomeSvgIcon icon={faResearchgate} />}
        />
      </Grid>
      <Grid container direction="row">
        <Grid item sm={6}>
          <Link variant="h5" href="https://trafficvis.com" target="_blank" color="primary">
            TrafficVis
          </Link>
          <Typography sx={{ overflowWrap: "break-word" }}>
            Traffic Vis is a group of interactive simulations aimed at teaching
            the basics of transportation engineering.
            <br />
            Feel free to use it in your class.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <img src={CZ} width="100%" />
        </Grid>
      </Grid>
      <Grid container direction="row" mt={2}>
        <Grid item sm={6}>
          <Link variant="h5" href="https://github.com/UTEL-UIUC/gtfs_segments" target="_blank" color="primary">GTFS Segments</Link>
          <Typography sx={{ overflowWrap: "break-word" }}>
            GTFS Segments is a python library that reads GTFS files and analyzes
            bus stop spacings.
            <br />
          </Typography>
        </Grid>
        <Grid item sm={6} textAlign="center">
          <img src={GTFSSegments} style={{ maxHeight: 250 }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
