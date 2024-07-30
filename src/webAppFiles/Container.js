import { Box } from "@mui/material";
import React from "react";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        padding: "2rem",
        mt: "3rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
