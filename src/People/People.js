import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Lewis from "src/People/lehe2.jpeg";
import Shirin from "src/People/shirin.jpeg";
import Praneeth from "src/People/praneeth.jpeg";
import Ayush from "src/People/ayush.jpeg";
import SvgIcon from "@mui/material/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faResearchgate, faOrcid } from "@fortawesome/free-brands-svg-icons";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import FontAwesomeSvgIcon from "../FontAwesomeSVGIcon/FontAwesomeSVGIcon";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import MyIconButton from "../MyIconButton/MyIconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import SvgIcon from "@mui/material/SvgIcon";

const Profile = ({ name, title, pic, icons }) => {
  return (
    <Grid item>
      <Paper variant='outlined' sx={{ p: 2 }}>
        <Stack
          sx={{ width: 280, textAlign: "center" }}
          alignItems="center"
        >
          <Avatar alt={name} src={pic} sx={{ width: 120, height: 120 }} />
          <Typography variant="body1" mt={1}>
            {name}
          </Typography>
          <Typography variant="subtitle2">{title}</Typography>
          {icons}
        </Stack>
      </Paper>
    </Grid>
  );
};

export default () => {
  return (
    <Grid item container direction="column" alignItems='center'>
      <Typography variant="h4" mb={2}>
        People
      </Typography>
      <Box mb={2}>
        <Profile
          name="Lewis Lehe"
          href="people/lewis"
          pic={Lewis}
          icons={
            <Box>
              <MyIconButton
                alt="research gate"
                href={"https://www.researchgate.net/profile/Lewis-Lehe"}
                icon={<FontAwesomeSvgIcon icon={faResearchgate} />}
              />
              <MyIconButton
                alt="google scholar"
                href="https://scholar.google.com/citations?user=Igxd5_0AAAAJ"
                icon={<GoogleIcon />}
              />
              <MyIconButton
                alt="orcid"
                href="https://orcid.org/0000-0001-8029-1706"
                icon={<FontAwesomeSvgIcon icon={faOrcid} />}
              />
              <MyIconButton
                alt="CV"
                href="cv-lehe.pdf"
                icon={<Typography>CV</Typography>}
              />
              <MyIconButton
                alt="email"
                href="mailto:lehe@illinois.edu"
                icon={<EmailIcon />}
              />
              <MyIconButton
                alt="twitter"
                href="https://twitter.com/lewislehe"
                icon={<TwitterIcon />}
              />
            </Box>
          }
          title="Assistant Professor of Civil and Environmental Engineering"
        />
      </Box>
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
          icons={
            <Box>
              <MyIconButton
                alt="research gate"
                href={"https://www.researchgate.net/profile/Ayush-Pandey-11"}
                icon={<FontAwesomeSvgIcon icon={faResearchgate} />}
              />
              <MyIconButton
                alt="google scholar"
                href="https://scholar.google.com/citations?user=4IgRBVMAAAAJ&hl=en&oi=sra"
                icon={<GoogleIcon />}
              />
              <MyIconButton
                alt="orcid"
                href="https://orcid.org/0000-0002-2524-2618"
                icon={<FontAwesomeSvgIcon icon={faOrcid} />}
              />
              <MyIconButton
                aria-label="delete"
                href="cv-pandey.pdf"
                icon={<Typography>CV</Typography>}
              />
              <MyIconButton
                alt="email"
                href="mailto:ayushp3@illinois.edu"
                icon={<EmailIcon />}
              />
              <MyIconButton
                alt="twitter"
                href="https://twitter.com/AyushPandey__"
                icon={<TwitterIcon />}
              />
            </Box>
          }
        />
        <Profile
          name="Saipraneeth Devunuri"
          href="people/praneeth"
          pic={Praneeth}
          title="Graduate Research Assistant"
          icons={
            <Box>
              <MyIconButton
                alt="research gate"
                href="https://www.researchgate.net/profile/Saipraneeth-Devunuri"
                icon={<FontAwesomeSvgIcon icon={faResearchgate} />}
              />
              <MyIconButton
                alt="google scholar"
                href="https://scholar.google.com/citations?user=z2Z271UAAAAJ"
                icon={<GoogleIcon />}
              />
              <MyIconButton
                alt="orcid"
                href="https://orcid.org/0000-0002-5911-4681"
                icon={<FontAwesomeSvgIcon icon={faOrcid} />}
              />
              <MyIconButton
                alt="CV"
                href="cv-devunuri.pdf"
                icon={<Typography>CV</Typography>}
              />
              <MyIconButton
                alt="email"
                href="mailto:sd37@illinois.edu"
                icon={<EmailIcon />}
              />
              <MyIconButton
                alt="twitter"
                href="https://twitter.com/praneethDevunu1"
                icon={<TwitterIcon />}
              />
            </Box>
          }
        />
        <Profile
          name="Shirin Qiam"
          href="people/shirin"
          pic={Shirin}
          title="Graduate Research Assistant"
          icons={
            <Box>
              <MyIconButton
                alt="research gate"
                href="https://www.researchgate.net/profile/Shirin-Qiam"
                icon={<FontAwesomeSvgIcon icon={faResearchgate} />}
              />
              <MyIconButton
                alt="orcid"
                href="https://orcid.org/0000-0002-9720-5656"
                icon={<FontAwesomeSvgIcon icon={faOrcid} />}
              />  
              <MyIconButton
                aria-label="delete"
                href="cv-shirin.pdf"
                icon={<Typography>CV</Typography>}
              />
              <MyIconButton
                alt="email"
                href="mailto:sqiam2@illinois.edu"
                icon={<EmailIcon />}
              />
              <MyIconButton
                alt="twitter"
                href="https://twitter.com/Shiimqim"
                icon={<TwitterIcon />}
              />
            </Box>
          }
        />
      </Grid>
    </Grid>
  );
};
