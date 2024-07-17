import React from "react";
import { Card, CardContent, Typography, Grid, Link } from "@mui/material";
import MessageNote from "./MessageNote";
import Container from "./Container";
import GreenBar from "./GreenBar";
import LinkUnderText from "./LinkUnderText";

const Memorizing = () => {
  return (
    <>
      <GreenBar>
        <Typography variant="h5" align="center" gutterBottom>
          ■ Memorizing ■
        </Typography>
      </GreenBar>
      <Container>
        <Card sx={{ marginBottom: "2rem" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Shaikh Ibn Uthaimeen said:
            </Typography>
            <Typography gutterBottom>
              “We memorised a little and read a lot, but we benefited from what
              we memorised more than we benefited from what we read”.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              [Summary of Veneration of Knowledge - pg 61]
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ marginBottom: "2rem" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              1. Al-Qurān
            </Typography>
            <Typography variant="h6" gutterBottom>
              2. Supplications
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <Link
                  href="https://drive.google.com/file/d/1q_M5Fb-A5ctQG9rzyRnTLUCivzpvVxnd/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hisnul Muslim - Tamil pdf1
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://sarhaan.com/ab/%e0%ae%b9%e0%af%81%e0%ae%b8%e0%af%8d%e0%ae%a9%e0%af%8d-%e0%ae%85%e0%ae%b2%e0%af%8d-%e0%ae%ae%e0%af%81%e0%ae%b8%e0%ae%b2%e0%ae%bf%e0%ae%ae%e0%af%8d-%e0%ae%ae%e0%af%81%e0%ae%b8%e0%af%8d%e0%ae%b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hisnul Muslim - Tamil pdf2
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://t.me/TheEnglishDiwan/12879"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hisnul Muslim - English pdf
                </Link>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <MessageNote>
          Note 1: The Secret behind Strong Retention is More Repetition, The
          More You repeat, Strong the Content Stays with you for a Long Time.
        </MessageNote>
        <MessageNote>
          Note 2: Here Hadeeth Books and other Important Mutoon [Texts] are not
          included for memorization, Since that would only benefit if a person
          knows Arabic, So A Student Of Knowledge can focus on Memorizing the
          below books once he has obtained a sound Degree in Arabic:
        </MessageNote>
        <Card sx={{ my: "1rem" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}
          >
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
    </>
  );
};

export default Memorizing;
