import React from "react";
import ScholarlyQuote from "./ScholarlyQuote";
import WaysToKnowledge from "./WaysToKnowledge";
import GreenBar from "./GreenBar";
import Narrations from "./Narrations";
import { Box, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <>
      <GreenBar>
        {" "}
        <Typography variant="h5" align="center" gutterBottom>
          طلب العلم
        </Typography>{" "}
      </GreenBar>
      <ScholarlyQuote />
      <WaysToKnowledge />
      <Narrations />
      <Box sx={{ m: "1rem" }}></Box>
    </>
  );
};

export default MainPage;
