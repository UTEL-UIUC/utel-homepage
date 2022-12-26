import React from "react";
import IconButton from "@mui/material/IconButton";

export default ({ icon, ...props }) => (
  <IconButton {...props} color="secondary" target="_blank">
    {icon}
  </IconButton>
);
