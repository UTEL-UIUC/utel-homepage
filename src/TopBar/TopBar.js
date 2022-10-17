import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
// import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" >
      <Container maxWidth='lg'>
        <Toolbar>
          <TimeToLeaveIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            UTEL
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            UTEL
          </Typography>
          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box
            sx={{
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
            align="right"
          >

            <Button
              key={"about"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/"
            >
              About
            </Button>
            <Button
              key={"publications"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/publications"
            >
              publications
            </Button>
            <Button
              key={"people"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/people"
            >
              people
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
