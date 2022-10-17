import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "src/Home/Home";
import TopBar from "src/TopBar/TopBar";
import Publications from "src/Publications/Publications";
import People from "src/People/People";
import Person from "src/Person/Person";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#e64a19",
    },
    secondary: {
      main: "#2196f3",
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
      {/* <Grid container justifyContent="center" direction="row" mt={5} mb={5}> */}
      <Box mt={5} mb={5}>
        <Outlet />
      </Box>
      {/* </Grid> */}
      <Divider>
        <Chip label="CONTACT" />
      </Divider>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="publications" element={<Publications />} />
            <Route path="people" element={<People />} />
            <Route path="people/lewis" element={<Person person="lewis" />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
