import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import About from "src/About/About";
import TopBar from "src/TopBar/TopBar";
import Publications from "src/Publications/Publications";
import People from "src/People/People";
import Person from "src/Person/Person";
// import myIconButton 
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import * as colors from "@mui/material/colors";

const theme = createTheme({
  palette: {
    type: "light",
    // primary: colors.amber[800],
    // secondary: colors.blue
    primary: {
      main: colors.deepOrange["700"],
    },
    secondary: {
      // main: "#2196f3",
      main: colors.lightBlue['A700']
    },
  },
});

const NoPage = () => {
  return <h1>404</h1>;
};

const Layout = () => {
  return (
    <>
      <TopBar />
      <Grid container justifyContent="center" direction="row" mt={5} mb={5}>
        {/* <Box mt={6} mb={5}> */}
        <Outlet />
        {/* </Box> */}
      </Grid>
      <Divider>
        <Chip label="CONTACT" />
      </Divider>
    </>
  );
};

const App = () => {
  console.log("app loaded");
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="publications" element={<Publications />} />
            <Route path="people" element={<People />} />
            <Route path="people/:person" element={<Person />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
