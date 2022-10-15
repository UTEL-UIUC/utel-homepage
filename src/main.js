import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "src/Home/Home";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TopBar from "src/TopBar/TopBar";
import Publications from "src/Publications/Publications";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NoPage = () => {
  return <h1>404</h1>;
};

const Layout = () => {
  return (
    <>
      <TopBar />
      <Grid container justifyContent="center" direction="row" mt={5} mb={5}>
        <Outlet />
      </Grid>
      <Divider>
        <Chip label="CONTACT" />
      </Divider>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="publications" element={<Publications />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
