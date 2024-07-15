import React from "react";
import ScholarlyQuote from "./ScholarlyQuote";
import WaysToKnowledge from "./WaysToKnowledge";
import GreenBar from "./GreenBar";
import Narrations from "./Narrations";
import { Typography } from "@mui/material";

const MainPage = () => {
  return (
    <>
      <GreenBar>
        {" "}
        <Typography variant="h5" align="center" gutterBottom>
          ■ A Guide For The Knowledge Seeker ■
        </Typography>{" "}
      </GreenBar>
      <ScholarlyQuote />
      <WaysToKnowledge />
      <Narrations />
      <GreenBar>
        Messenger of Allah (ﷺ) said: "Seeking knowledge is a duty upon every
        Muslim"
      </GreenBar>
    </>
  );
};

export default MainPage;
