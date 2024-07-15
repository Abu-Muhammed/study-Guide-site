import { Box } from "@mui/material";
import React from "react";

const GreenBar = ({ children }) => {
  return (
    <Box sx={{ p: "1rem", bgcolor: "#57C12C", color: "white" }}>{children}</Box>
  );
};

export default GreenBar;
