import React from "react";
import { Box, Typography } from "@mui/material";
import Wrapper from "./Wrapper";
import EasyKnowledge from "./EasyKnowledge";
import TalibulIlmActivities from "./TalibulIlmActivities";

const MainPage = () => {
  return (
    <>
      <Box sx={{ p: "0.5rem", bgcolor: "#57C12C", color: "white" }}>
        A Guide For The Knowledge Seeker
      </Box>
      <EasyKnowledge />
      <TalibulIlmActivities />
      {/* <Wrapper></Wrapper> */}
      <Box sx={{ p: "0.5rem", bgcolor: "#57C12C", color: "white" }}>
        Messenger of Allah (ﷺ) said: "Seeking knowledge is a duty upon every
        Muslim"
      </Box>
    </>
  );
};

export default MainPage;
