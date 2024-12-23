import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { BrowserRouter, Route, Link, Outlet, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import About from "src/About/About";
import TopBar from "src/TopBar/TopBar";
import Publications from "src/Publications/Publications";
import People from "src/People/People";
// import Person from "src/Person/Person";
// import myIconButton
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import * as colors from "@mui/material/colors";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: colors.deepOrange["700"],
    },
    secondary: {
      main: colors.lightBlue["A700"],
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
      <Grid container justifyContent="center" direction="row" mt={3} mb={3}>
        <Outlet />
      </Grid>
      <Divider>
        <Chip label="2023" />
      </Divider>
    </>
  );
};

const GPT = () => {
  return (
    <div>
      <iframe
        src="https://transitgpt.streamlit.app?embedded=true"
        width="100%"
        height="100%"
        id="iframe"
        style={{
          position: 'fixed',
          background: 'white',
          border: 'none',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
        // "position: fixed; background: #000; border: none;top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;"
      />
    </div>
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
            {/* <Route path="people/:person" element={<Person />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/transitgpt" element={<GPT />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
