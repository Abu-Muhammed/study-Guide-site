import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Container from "./Container";
import LinkUnderText from "./LinkUnderText";
import GreenBar from "./GreenBar";

const Reading = () => {
  return (
    <Container>
      <GreenBar>
        {" "}
        <Typography variant="h5" align="center" gutterBottom>
          ■ Reading ■
        </Typography>{" "}
      </GreenBar>
      <Card sx={{ marginBottom: "1rem" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
        >
          <Typography>Daily Reads : Tarjama & One or Two Hadith</Typography>
          <LinkUnderText
            text={"▪︎ Meadow Of The Beginners - Shaykh Ibn Hizam"}
            link={"https://t.me/IbnhezamEn/442"}
          />
          <LinkUnderText
            text={"▪︎ Al-Arba’in an-Nawawiyah - Imam an Nawawi"}
            link={"https://t.me/TheEnglishDiwan/10959"}
          />
          <LinkUnderText
            text={"▪︎ Jawamiul Akhbar - Imam As-Sa’di"}
            link={"https://t.me/TheEnglishDiwan/9337"}
          />
          <LinkUnderText
            text={"▪︎ Riyad-us Saliheen - Imam an Nawawi"}
            link={"https://t.me/TheEnglishDiwan/6842"}
          />
          <LinkUnderText
            text={"▪︎ Bulugh al-Maram - Iman Ibn Hajar"}
            link={"https://t.me/TheEnglishDiwan/4861"}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Reading;
