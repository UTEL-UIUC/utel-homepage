import React from "react";
import IconButton from "@mui/material/IconButton";
import {alpha, styled } from "@mui/material/styles";

const com = ({ icon, href, alt }) => {
  return (
    <IconButton
      alt={alt}
      href={href}
      color="secondary"
      target="_blank"
      rel="noopener"
    >
      {icon}
    </IconButton>
  );
};
export default com;
// export default styled(com)(({ theme }) => ({
//   "&:hover": {
//     backgroundColor: `${alpha(theme.palette.success.main, 1)}`,
//   },
// }));
