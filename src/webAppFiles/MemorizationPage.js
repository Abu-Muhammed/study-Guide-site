import React from "react";
import { Card, CardContent, Typography, Grid, Link, Box } from "@mui/material";

const MemorizationPage = () => {
  return (
    <Box
      sx={{
        padding: "2.5rem",
        margin: "1.5rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        ■ Memorization ■
      </Typography>
      <Card sx={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h6">
            Shaikh Ibn ‘Uthaimeen (may Allah have mercy upon him) said:
          </Typography>
          <Typography
            variant="h6"
            component="blockquote"
            sx={{ margin: "1rem 0" }}
          >
            “We memorised a little and read a lot, but we benefited from what we
            memorised more than we benefited from what we read”.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            [Summary of Veneration of Knowledge - pg 61]
          </Typography>
        </CardContent>
      </Card>
      <Typography variant="h6" gutterBottom>
        1. Qurān : New portion + Revising Old portion
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Hisnul Muslim:
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Link
            href="https://drive.google.com/file/d/1q_M5Fb-A5ctQG9rzyRnTLUCivzpvVxnd/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tamil pdf1
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://sarhaan.com/ab/%e0%ae%b9%e0%af%81%e0%ae%b8%e0%af%8d%e0%ae%a9%e0%af%8d-%e0%ae%85%e0%ae%b2%e0%af%8d-%e0%ae%ae%e0%af%81%e0%ae%b8%e0%ae%b2%e0%ae%bf%e0%ae%ae%e0%af%8d-%e0%ae%ae%e0%af%81%e0%ae%b8%e0%af%8d%e0%ae%b2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tamil pdf2
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="https://t.me/TheEnglishDiwan/12879"
            target="_blank"
            rel="noopener noreferrer"
          >
            English pdf
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MemorizationPage;
