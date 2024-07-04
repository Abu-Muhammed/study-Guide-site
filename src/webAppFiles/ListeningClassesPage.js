import React from "react";
import { Card, CardContent, Typography, Grid, Link, Box } from "@mui/material";

const ListeningClassesPage = () => {
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
        ■ Listening Classes ■
      </Typography>
      <Card sx={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Arabic [Main Study - Daily Classes] :
          </Typography>
          <Typography variant="body1" sx={{ margin: "1rem 0" }}>
            Note : Either Study Madina Book or Al Arabiyyah Bayna Yadayk,
            Ajrumiyyah is a Must Study book.
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Link
                href="path/to/Madina_Book_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Madina Book 1 [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Madina_Book_2"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Madina Book 2 [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Madina_Book_3"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Madina Book 3 [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Al_Arabiyyah_Bayna_Yadayk"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Al Arabiyyah Bayna Yadayk [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Ajrumiyyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Ajrumiyyah [pdf]
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Weekend Classes :
          </Typography>
          <Typography variant="h6" gutterBottom>
            1. Hadees : 40 Hadith of Nawawi
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/Al_Arba_in_an_Nawawiyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Al-Arba’in an-Nawawiyah with Takhrij [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Explanation_of_An_Nawawi_40_Hadith"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Explanation of An Nawawî's 40 Hadith - Usthad Muhammad Tim
                Humble.
              </Link>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            2. Aqeeda :
          </Typography>
          <Typography variant="body1" sx={{ pb: "1rem" }}>
            1) Aqeeda
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/10_Paadangalil_Aqeeda"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ 10 பாடங்களில் அகீதஹ்வை அறிந்து கொள்வோம்
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Explanation_of_Nullifiers_of_Islam"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Explanation of Nullifiers of Islam - Shaykh Salih Sindi [Ara
                - Eng]
              </Link>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ pb: "1rem" }}>
            2) Kitab at Tawheed
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/Kitab_at_Tauhid"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Kitab at-Tauhid by Muhammad bin Abdul-Wahhab [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Explanation_of_Kitab_al_Tawhid"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Explanation of Kitāb al-Tawḥīd - Mūsá Richardson
              </Link>
            </Grid>
          </Grid>
          <Typography variant="body1" sx={{ pb: "1rem" }}>
            3) Wasitiyyah
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/The_Creed_of_al_Wasitiyyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ The Creed of al-Wasitiyyah by Ibn Taymiyyah [pdf]
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="path/to/Explanation_of_Wasitiyyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Explanation of Wasitiyyah - Mūsá Richardson
              </Link>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            3. Tajweed
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/Tajweed_Course_By_Musa"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Tajweed Course By Musa
              </Link>
            </Grid>
          </Grid>
          <Typography variant="h6" gutterBottom>
            4. Fiqh
          </Typography>
          <Grid container spacing={2} sx={{ pb: "1rem" }}>
            <Grid item>
              <Link
                href="path/to/Buloog_Al_Maram"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Buloog Al Maram [pdf]
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ListeningClassesPage;
