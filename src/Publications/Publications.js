import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinkIcon from "@mui/icons-material/Link";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MyIconButton from "../MyIconButton/MyIconButton";
import Link from "@mui/material/Link";
const Item = ({ title, journal, year, author, link, pdf, oa = false }) => {
  return (
    <Grid item sx={{ mb: 1 }}>
      <Paper sx={{ p: 1 }} variant="outlined">
        <Box>
          <Link href={link} target="_blank" variant="h6" color="secondary">
            {title}
          </Link>
          <Typography>
            {author} ({year})
          </Typography>
          <Typography style={{ fontStyle: "italic" }}>{journal}</Typography>
        </Box>
        {/* <MyIconButton
          href={link}
          alt="link"
          sx={{ display: link ? true : "none" }}
          icon={<LinkIcon />}
        /> */}
        {oa && <span style={{ fontSize: "15px" }}>(Open Access)</span>}
        {pdf && (
          <MyIconButton
            href={pdf}
            alt="pdf"
            sx={{ display: !!pdf }}
            icon={<PictureAsPdfIcon />}
          />
        )}
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
      // spacing={3}
    >
      <Typography variant="h4" align="center" mb={2}>
        Publications
      </Typography>

      <Item
        title={"Equilibrium horizontal queues and a paradox of tolling"}
        year={2025}
        oa={true}
        journal={"Transportation Research Part B: Methodological"}
        author={
          "Lewis J. Lehe and Ayush Pandey"
        }
        link={"https://doi.org/10.1016/j.trb.2025.103152"}
      />


      <Item
        title={"Taxation of ridehailing in the United States"}
        year={2024}
        oa={true}
        journal={"Transport Policy"}
        author={
          "Lewis Lehe, Saipraneeth Devunuri, Javier Rondan, Ayush Pandey and Daniel Vignon"
        }
        link={"https://doi.org/10.1016/j.tranpol.2024.12.009"}
      />

      <Item
        title={
          "A Pipeline and NIR-Enhanced Dataset for Parking Lot Segmentation"
        }
        year={2024}
        oa={true}
        journal={"Winter Conference on Applications of Computer Vision"}
        author={"Shirin Qiam, Saipraneeth Devunuri and Lewis Lehe"}
        link={"hhttps://arxiv.org/abs/2412.13179"}
      />

      <Item
        title={
          "Bus stop spacing with heterogeneous trip lengths and elastic demand"
        }
        year={2024}
        oa={true}
        journal={"Transportation Research Part B: Methodological"}
        author={"Ayush Pandey and Lewis Lehe"}
        link={"https://doi.org/10.1016/j.jue.2022.103488"}
      />

      <Item
        title={
          "Congestive mode-switching and economies of scale on a bus route"
        }
        year={2024}
        journal={"Transportation Research Part B: Methodological"}
        author={"Ayush Pandey and Lewis Lehe"}
        oa={true}
        link={
          "https://www.sciencedirect.com/science/article/pii/S0191261524000547"
        }
      />
      <Item
        title={"A Survey of Errors in GTFS Static Feeds from the United States"}
        year={2024}
        journal={"Findings"}
        author={"Saipraneeth Devunuri and Lewis Lehe"}
        oa={true}
        link={
          "https://findingspress.org/article/116694-a-survey-of-errors-in-gtfs-static-feeds-from-the-united-states"
        }
      />
      <Item
        title={
          "ChatGPT for GTFS: benchmarking LLMs on GTFS semantics and retrieval"
        }
        year={2024}
        journal={"Public Transport"}
        author={"Saipraneeth Devunuri, Shirin Qiam and Lewis Lehe"}
        link={"https://doi.org/10.1016/j.pubtran.2024.100025"}
        oa={true}
      />
      <Item
        title={
          "GTFS Segments: A fast and efficient library to generate bus stop spacings"
        }
        year={2024}
        journal={"Journal of Open Source Software"}
        author={"Saipraneeth Devunuri and Lewis Lehe"}
        oa={true}
        link={"https://doi.org/10.21105/joss.06144"}
      />
      <Item
        title={"A bathtub model of transit congestion"}
        year={2024} // Assuming the current year, as it's not specified
        journal={"Transportation Research Part B: Methodological"}
        author={"Lewis J. Lehe and Ayush Pandey"}
        link={"https://doi.org/10.1016/j.trb.2024.07.002"}
        oa={true}
      />
      <Item
        title={"Local stability of traffic equilibria in an isotropic network"}
        year={2024}
        journal={"Transportation Research Part B: Methodological"}
        author={"Ayush Pandey, Lewis J Lehe, Vikash V Gayah"}
        link={"https://doi.org/10.1016/j.trb.2024.01.002"}
        oa={true}
      />
      <Item
        title={"Bus Stop Spacing Statistics: Theory and Evidence"}
        year={2024}
        journal={"Journal of Public Transportation"}
        author={"Saipraneeth Devunuri, Shirin Qiam, Ayush Pandey, Lewis Lehe"}
        link={"https://doi.org/10.1016/j.jpubtr.2024.100083"}
        oa={true}
        pdf={
          "https://www.sciencedirect.com/science/article/pii/S1077291X24000031"
        }
      />
      <Item
        title={
          "Scale effects in ridesplitting: A case study of the City of Chicago"
        }
        year={2023}
        journal={"Transportation Research Part A: Policy and Practice"}
        author={
          "Hao Liu, Saipraneeth Devunuri, Lewis J. Lehe and Vikash V. Gayah"
        }
        link={"https://doi.org/10.1016/j.tra.2023.103690"}
      />
      <Item
        title={
          "Taxi service with heterogeneous drivers and a competitive medallion market"
        }
        year={2022}
        journal={"Journal of Urban Economics"}
        author={"Lewis J. Lehe and Ayush Pandey"}
        link={"https://doi.org/10.1016/j.jue.2022.103488"}
        pdf={
          "https://www.researchgate.net/profile/Lewis-Lehe/publication/344590011_Taxi_service_with_heterogeneous_drivers_and_a_competitive_medallion_market/links/62be11a5f10dfc7b53efaf31/Taxi-service-with-heterogeneous-drivers-and-a-competitive-medallion-market.pdf"
        }
      />
      <Item
        title={"Large Elasticity at Introduction"}
        year={2022}
        journal={"Research in Transportation Economics"}
        author={"Lewis Lehe and Saipraneeth Devunuri"}
        link={"https://doi.org/10.1016/j.retrec.2021.101116"}
      />
      <Item
        title={
          "High time-resolution queue profile estimation at signalized intersections based on extended Kalman filtering"
        }
        year={2022}
        journal={"IEEE Transactions on Intelligent Transportation Systems"}
        author={
          "Simon Hu, Qishen Zhou, Junyi Li, Yibing Wang, Claudio Roncoli, Lihui Zhang, Lewis Lehe"
        }
        link={"https://doi.org/10.1109/TITS.2022.3154311"}
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
        author={"Lewis Lehe, Javier Rondan, Saipraneeth Devunuri, Ayush Pandey"}
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
