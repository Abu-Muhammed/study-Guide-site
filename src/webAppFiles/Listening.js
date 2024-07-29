import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import MessageNote from "./MessageNote";
import Container from "./Container";
import LinkUnderText from "./LinkUnderText";
import GreenBar from "./GreenBar";

const Listening = () => {
  return (
    <>
      <GreenBar>
        <Typography variant="h5" align="center" gutterBottom>
          Listening
        </Typography>
      </GreenBar>
      <Container>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Arabic [Main Study - Daily Classes] :
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <LinkUnderText
                  text={"▪ Madina Book 1"}
                  link={
                    "https://youtube.com/playlist?list=PLILZM7Z8mbfBYd02P9jVbgkW28Si122Ph&si=PwjkYiNd3R_-eKyG"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/c/1269314107/216997"}
                />
              </Grid>
              <Grid item>
                <LinkUnderText
                  text={"▪ Madina Book 2"}
                  link={
                    "https://youtube.com/playlist?list=PLILZM7Z8mbfCp8bY3tmphehR9IuO20kBf&si=51yPJ8M0tOwmrKz5"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/c/1269314107/216997"}
                />
              </Grid>
              <Grid item>
                <LinkUnderText
                  text={"▪ Madina Book 3"}
                  link={
                    "https://youtube.com/playlist?list=PLILZM7Z8mbfBbj7Ior_K7YTTsqEWFdUPg&si=SBr444j2IphRJZch"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/c/1269314107/212169"}
                />
              </Grid>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Al Arabiyyah Bayna Yadayk"}
                  link={
                    "https://youtube.com/playlist?list=PLZL-5XupwHU2N3ZDow8PlF54q2TADpWmt&si=xc5BJaJR4NwsSlZA"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/c/1269314107/238222"}
                />
              </Grid>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Ajrumiyyah"}
                  link={
                    "https://youtube.com/playlist?list=PLIlO6SOsXKfE24AJfdXVXQc9mF2BG2PZ6&si=EPtGzwEJqZNzWqwY"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/c/1269314107/260278"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <MessageNote>
          Note 1: Either Study Madina Book or Al Arabiyyah Bayna Yadayk,
          Ajrumiyyah is a Must Study book.
        </MessageNote>
        <MessageNote>
          Note 2: Generally Learning Arabic requires a significant amount of
          time, as it involves listening to the lecture, taking notes,
          memorizing vocabs, doing exercises and so on. So if a student has time
          to do these things he can embark to learn Arabic, else if he may start
          to learn once when gets such a situation.
        </MessageNote>
        <Card sx={{ my: "1.5rem" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Weekend Classes :
            </Typography>
            <Typography variant="h6" gutterBottom>
              Hadith
            </Typography>
            <Grid container spacing={2} sx={{ pb: "1rem" }}>
              <Grid item>
                <LinkUnderText
                  text={
                    "▪︎ Explanation of An Nawawî's 40 Hadith - Usthad Muhammad Tim Humble"
                  }
                  link={
                    "https://m.soundcloud.com/understandingislam/sets/explanation-of-an-nawawis-40-hadith-usthad-muhammad-tim-humble"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/10959"}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Belief
            </Typography>
            <Typography variant="body1" gutterBottom>
              Basic Aqeeda
            </Typography>
            <Grid container spacing={2} sx={{ pb: "1rem" }}>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Learn Aqeeda in 10 lessons (Tamil)"}
                  link={"https://t.me/aqeedhah/209"}
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/salafimaktabahmpm/388"}
                />
              </Grid>
              <Grid item>
                <LinkUnderText
                  text={
                    "▪︎ Explanation of Nullifiers of Islam - Shaykh Salih Sindi"
                  }
                  link={
                    "https://youtube.com/playlist?list=PLrXRrMvMe2oNfr2cjBaxl5dB7UUz5NMBc&si=ATYHuhVMrwhVB6jk"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/7714"}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom>
              Kitab at Tawheed
            </Typography>
            <Grid container spacing={2} sx={{ pb: "1rem" }}>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Explanation of Kitāb al-Tawḥīd - Mūsá Richardson"}
                  link={"https://www.troid.org/explanation-of-kitab-al-tawhid/"}
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/10007"}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" gutterBottom>
              Wasitiyyah
            </Typography>
            <Grid container spacing={2} sx={{ pb: "1rem" }}>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Explanation of Wasitiyyah - Mūsá Richardson"}
                  link={
                    "https://www.spreaker.com/podcast/al-waasitiyyah-complete--4200808"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/10706"}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Tajweed
            </Typography>
            <Grid container spacing={2} sx={{ pb: "1rem" }}>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Tajweed Course"}
                  link={
                    "https://youtube.com/playlist?list=PLgmnBzceuTM8TJNDDGXoxw5tRpxb1uGrS&si=hrd1-Qq0BDMYMbib"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/5731"}
                />
              </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
              Fiqh
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <LinkUnderText
                  text={"▪︎ Buloog Al Maram"}
                  link={
                    "https://youtube.com/playlist?list=PLo8-JRSO3j92z_TfuF1UwYMqrMB731DJY&si=LX2ucQm646iQ3QLb"
                  }
                />
                <LinkUnderText
                  text={" [pdf]"}
                  link={"https://t.me/TheEnglishDiwan/4861"}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Listening;
