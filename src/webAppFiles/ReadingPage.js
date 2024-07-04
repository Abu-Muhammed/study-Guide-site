import React from "react";
import { Card, CardContent, Typography, Grid, Link, Box } from "@mui/material";

const ReadingPage = () => {
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
        ■ Reading ■
      </Typography>
      <Card sx={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="body1" gutterBottom>
            ▪︎ (Daily : Tarjama & One or Two Hadith)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Link
                href="path/to/Meadow_Of_The_Beginners"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Meadow Of The Beginners - Shaykh Ibn Hizam
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="path/to/Al_Arbain_an_Nawawiyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Al-Arba’in an-Nawawiyah with Takhrij
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="path/to/Jawamiul_Akhbar"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Jawamiul Akhbar by as-Sa’di
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="path/to/Riyad_us_Saliheen"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Riyad-us Saliheen - Ar/Eng - Color-coded
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link
                href="path/to/Bulugh_al_Maram"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Bulugh al-Maram by Ibn Hajar al-Asqalani
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: "2rem" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            ● LEVEL 1●
          </Typography>
          <Typography variant="h6" gutterBottom>
            1. Virtue of Knowledge & Manners of a Talibul Ilm
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                ■ மார்க்கக் கல்வியை தேடுவதின் சிறப்பு - அஷ்ஷைஃக் ஸுலைய்மான்
                அர்ருஹைய்லி
              </Typography>
              <Typography variant="body1">
                ■ மார்க்கத்தில் விளக்கம் பெறுவது என்பது, அல்லாஹ் ஒரு அடியானுக்கு
                நலவை நாடியிருப்பதன் அடையாளமாகும் - இமாம் அந்-நவவி, இமாம் இப்னு
                தைமிய்யா, அல்லாமாஹ் இப்னு உஸைமீன், அல்லாமாஹ் அப்துல் முஹ்ஸின்
                அல்அப்பாத்
              </Typography>
              <Typography variant="body1">
                ■ குர்ஆனிலும், ஸுன்னாஹ்விலும் கல்வி என்ற வார்த்தையைக் கொண்டு
                நாடப்படுவது மார்க்கக் கல்வியே ஆகும் - ஷைஃக் ஸாலிஹ் அல்-ஃபவ்ஸான்,
                ஷைஃக் ஸாலிஹ் அல்-உஸைமீ
              </Typography>
              <Link
                href="path/to/A_Translation_of_the_Summary_of_the_Veneration_of_Knowledge"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ A Translation of the Summary of the Veneration of Knowledge
              </Link>
              <Link
                href="path/to/Veneration_of_Knowledge"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Veneration of Knowledge [Original Book for Reference]
              </Link>
              <Link
                href="path/to/Obstacles_in_the_Path_of_Seeking_Knowledge"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ Obstacles in the Path of Seeking Knowledge by Shaykh Abd
                as-Salam Burjis
              </Link>
              <Link
                href="path/to/How_to_record_the_knowledge"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ How to record the knowledge and preserve the benefits Dr.
                Saleh bin Abdul Aziz bin Othman Sindi
              </Link>
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom sx={{ marginTop: "2rem" }}>
            2. Aqeeda
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                ■ அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனை கற்றுக்
                கொள்வதன் மார்க்கச் சட்டம் - பாகம் 1
              </Typography>
              <Typography variant="body1">
                ■ அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனைக் கற்றுக்
                கொள்வதன் மார்க்கச் சட்டம் - பாகம் 2
              </Typography>
              <Typography variant="body1">
                ■ தவ்ஹீதின் மிகப்பெரும் சிறப்புகளும் மற்றும் அதனுடைய மகத்தான
                பலன்களும் - அஷ்ஷைஃக் அப்துர் ரஹ்மான் பின் நாஸிர் அஸ்-ஸஅதி
              </Typography>
              <Typography variant="body1">
                ■ லாஇலாஹ இல்லல்லாஹ்” பற்றிய விளக்கம்
              </Typography>
              <Typography variant="body1">
                ■ இணைவைப்பிலிருந்து விடுபட நான்கு அடிப்படைகள்
              </Typography>
              <Typography variant="body1">■ அடிப்படை அகீதா அறிவோம்</Typography>
              <Typography variant="body1">
                ■ அல்லாஹ்வுடைய அழகிய பெயர்கள் மற்றும் அவனது உயரிய பண்புகளை
                அறிவதன் முக்கியத்துவம் - ஷைஃக் ஸாலிஹ் ஸிந்தி ஹஃபிதஹுல்லாஹ்
              </Typography>
              <Link
                href="path/to/The_Names_and_Attributes_of_Allah"
                target="_blank"
                rel="noopener noreferrer"
              >
                ▪︎ The Names and Attributes of Allāh - Explanation of the
                Correct Belief through Authentic Tafsir by Abdulilah Lahmami
              </Link>
              <Typography variant="body1">
                ■ இஸ்லாமிய அகீதா (சமூகத்தில்) இல்லாமல் போவதன் விளைவுகள்
              </Typography>
              <Typography variant="body1">
                ■ அகீதாவைக் கொண்டு தொடங்கப்படாத அழைப்பானது பயனில்லாத,
                தோல்வியுறும் ஒரு அழைப்பாகும் - அஷ்ஷைஃக் ஸாலிஹ் பின் ஃபவ்ஸான்
                அல்-ஃபவ்ஸான்
              </Typography>
            </Grid>
          </Grid>
          {/* Add similar sections for other categories like Fiqh, Manhaj, etc. */}
        </CardContent>
      </Card>

      {/* Repeat the Card component for LEVEL 2 content */}
    </Box>
  );
};

export default ReadingPage;
