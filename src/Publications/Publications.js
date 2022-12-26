import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MyIconButton from "../MyIconButton/MyIconButton";

const Item = ({ title, journal, year, author, link, pdf }) => {
  return (
    <Grid item sx={{ mb: 1 }}>
      <Box>
        <Typography variant="h6" mb={1}>
          {title}
        </Typography>
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
      <IconButton
        color="secondary"
        href={pdf}
        aria-label="preprint"
        sx={{ display: !!pdf }}
      >
        <PictureAsPdfIcon />
      </IconButton>
    </Grid>
  );
};

export default () => {
  return (
    <Grid
      container
      justifyContent="center"
      item
      md={6}
      xs={10}
      direction="column"
      spacing={3}
    >
      <Typography variant="h4" align="center">
        Publications
      </Typography>
      <Item
        title={
          "Taxi service with heterogeneous drivers and a competitive medallion market"
        }
        year={2022}
        journal={"Journal of Urban Economics"}
        author={"Lewis Lehe, Ayush Pandey"}
        link={"https://doi.org/10.1016/j.jue.2022.103488"}
        pdf={
          "https://www.researchgate.net/profile/Lewis-Lehe/publication/344590011_Taxi_service_with_heterogeneous_drivers_and_a_competitive_medallion_market/links/62be11a5f10dfc7b53efaf31/Taxi-service-with-heterogeneous-drivers-and-a-competitive-medallion-market.pdf"
        }
      />
      <Item
        title={"Bus Stop Spacing Statistics: Theory and Evidence"}
        year={2022}
        journal={"revisions requested at Transportation Research Record"}
        author={"Lewis Lehe, Saipraneeth Devunuri"}
        pdf={"https://doi.org/10.48550/arXiv.2208.04394"}
      />
      <Item
        title={"Large Elasticity at Introduction"}
        year={2021}
        journal={"Research in Transportation Economics"}
        author={"Lewis Lehe, Saipraneeth Devunuri"}
        link={"https://doi.org/10.1016/j.retrec.2021.101116"}
      />
      <Item
        title={"The Economics of Findings"}
        year={2021}
        journal={"Findings"}
        author={"Lewis Lehe, David Levinson"}
        link={"https://doi.org/10.32866/001c.25093"}
      />
      <Item
        title={"Taxation of ridehailing"}
        year={2021}
        journal={"Illinois Center for Transportation Series"}
        author={"Ayush Pandey, Lewis Lehe, Vikash Gayah"}
        pdf={"https://apps.ict.illinois.edu/projects/getfile.asp?id=9975"}
      />
      <Item
        title={
          "Increasing Returns to Scale in Carpool Matching: Evidence from Scoop"
        }
        year={2021}
        journal={"Findings"}
        author={"Ayush Pandey, Lewis Lehe, Vikash Gayah"}
        pdf={"https://par.nsf.gov/servlets/purl/10320836"}
        link={"https://doi.org/10.32866/001c.25093"}
      />
      <Item
        title={"Distributions of Bus Stop Spacings in the United States"}
        year={2021}
        journal={"Findings"}
        author={"Ayush Pandey, Lewis Lehe, Dana Monzer"}
        link={
          "https://findingspress.org/article/27373-distributions-of-bus-stop-spacings-in-the-united-states"
        }
        pdf={"https://findingspress.org/article/27373.pdf"}
      />
      <Item
        title={
          "Winners and losers from road pricing with heterogeneous travelers and a mixed-traffic bus alternative"
        }
        year={2020}
        journal={"Transportation Research Part B: Methodological"}
        author={"Lewis Lehe"}
        pdf={
          "https://www.researchgate.net/profile/Lewis-Lehe/publication/343321364_Winners_and_losers_from_road_pricing_with_heterogeneous_travelers_and_a_mixed-traffic_bus_alternative/links/5f25fea692851cd302d18ce7/Winners-and-losers-from-road-pricing-with-heterogeneous-travelers-and-a-mixed-traffic-bus-alternative.pdf"
        }
        link={"https://doi.org/10.1016/j.trb.2020.07.003"}
      />
      <Item
        title={
          "Hyperdemand: A static traffic model with backward-bending demand curves"
        }
        year={2020}
        journal={"Economics of Transportation"}
        author={"Lewis Lehe, Ayush Pandey"}
        link={"https://doi.org/10.1016/j.ecotra.2020.100182"}
      />
      <Item
        title={"Downtown congestion pricing in practice"}
        year={2019}
        journal={"Transporation Research Part C: Emerging Technologies"}
        author={"Lewis Lehe"}
        link={"https://doi.org/10.1016/j.trc.2019.01.020"}
      />
    </Grid>
  );
};
