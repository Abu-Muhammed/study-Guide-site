import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Container from "./Container";
import LinkUnderText from "./LinkUnderText";
import GreenBar from "./GreenBar";
import { Link } from "react-router-dom";

const Reading = () => {
  const levelsInReading = [
    {
      level: "Level 01",
      route: "level01",
    },
    {
      level: "Level 02",
      route: "level02",
    },
    {
      level: "Level 03",
      route: "level03",
    },
    {
      level: "Level 04",
      route: "level04",
    },
    {
      level: "Level 05",
      route: "level05",
    },
    {
      level: "Level 06",
      route: "level06",
    },
  ];
  return (
    <>
      <GreenBar>
        <Typography variant="h5" align="center" gutterBottom>
          Reading
        </Typography>
      </GreenBar>
      <Container>
        <Card sx={{ mt: "1rem" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
            <Typography variant="h6">
              Daily Reads : Tarjama & One or Two Hadeeth
            </Typography>
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
      <Container>
        <Card sx={{ marginBottom: "1rem" }}>
          <CardContent>
            <Grid container spacing={4} justifyContent="center">
              {levelsInReading.map((reading, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Link to={reading.route} style={{ textDecoration: "none" }}>
                    <Card sx={{ maxWidth: 300, margin: "auto" }}>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          paddingBottom: "15px !important",
                          "&:hover": { bgcolor: "#D6F9D1" },
                        }}
                      >
                        <Typography variant="h6">{reading.level}</Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Reading;
