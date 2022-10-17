import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Lewis from "src/People/lehe.jpeg";
import Shirin from "src/People/shirin.jpeg";
import Praneeth from "src/People/praneeth.jpeg";
import Ayush from "src/People/ayush.jpeg";

const Profile = ({ name, href, title, pic }) => {
  return (
    <Grid
      item
      alignItems="center"
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: 240,
      }}
    >
      <Avatar alt={name} src={pic} sx={{ width: 120, height: "120px" }} />
      <Link variant="body1" underline="hover" href={href} mt={1}>
        {name}
      </Link>
      <Typography variant="subtitle2">{title}</Typography>
    </Grid>
  );
};

export default () => {
  return (
    <>
      <Grid item container direction="column" alignItems="center">
        <Typography variant="h4" mb={2}>
          People
        </Typography>
        <Profile
          name="Lewis Lehe"
          href="people/lewis"
          pic={Lewis}
          title="Assistant Professor of Civil and Environmental Engineering"
        />
        <Typography variant="h4" mb={2} mt={4}>
          Students
        </Typography>
        <Grid
          item
          container
          justifyContent="center"
          direction="row"
          spacing={2}
        >
          <Profile
            name="Ayush Pandey"
            href="people/ayush"
            pic={Ayush}
            title="Graduate Research Assistant"
          />
          <Profile
            name="Saipraneeth Devunuri"
            href="people/praneeth"
            pic={Praneeth}
            title="Graduate Research Assistant"
          />
          <Profile
            name="Shirin Qiam"
            href="people/shirin"
            pic={Shirin}
            title="Graduate Research Assistant"
          />
        </Grid>
      </Grid>
    </>
  );
};
