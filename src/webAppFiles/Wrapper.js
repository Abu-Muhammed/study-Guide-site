import { Box } from "@mui/material";
import React from "react";

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Box
      sx={{
        height: "100vh",
        widows: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
