import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level02 = () => {
  const levelContent = {
    level2: {
      title: "LEVEL 02",
      subjects: [
        {
          title: "Manners of a Talibul Ilm",
          books: [
            {
              name: "The Etiquette of Seeking Knowledge by Shaykh Bakr Aboo Zayd",
              link: "https://dummy.link/etiquette-seeking-knowledge",
            },
            {
              name: "Excellence of Knowledge, The Virtue of the Salaf over the Khalaf by Ibn Rajab",
              link: "https://dummy.link/excellence-knowledge",
            },
            {
              name: "Daily Routine of a Student of knowledge",
              link: "https://dummy.link/daily-routine-student",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "The Creed of al-Wasitiyyah by Ibn Taymiyyah",
              link: "https://dummy.link/creed-al-wasitiyyah",
            },
            {
              name: "Aspects of the Days of Ignorance by Muhammad ibn Abdul-Wahhaab",
              link: "https://dummy.link/days-of-ignorance",
            },
            {
              name: "Divine Decree & Pre Ordainment - Shaykh Salih Al Uthaymīn",
              link: "https://dummy.link/divine-decree",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Abridgment of the Prophet’s Prayer Described by Shaykh al-Albani",
              link: "https://dummy.link/prophets-prayer",
            },
            {
              name: "Inner Dimension of the Prayer by Ibn al-Qayyim",
              link: "https://dummy.link/inner-dimension-prayer",
            },
            {
              name: "The Magnifying Glass on Clarifying Common Errors in Salah by Shaykh Saalih Aali Shaykh",
              link: "https://dummy.link/errors-in-salah",
            },
            {
              name: "The Fiqh of Fasting the Month of Ramadan Work book",
              link: "https://dummy.link/fiqh-of-fasting",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "How are We Obligated to Interpret the Noble Qur’aan? by Shaykh al-Albani",
              link: "https://dummy.link/interpret-quran",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Foundations of the Salafi Da’wah by Shaykh Abdus-Salam bin Burjis",
              link: "https://dummy.link/salafi-dawah",
            },
            {
              name: "Reality of Salafiyyah - Salih Al Fawzan",
              link: "https://dummy.link/reality-of-salafiyyah",
            },
            {
              name: "Commentary on Usool as Sunnah of Ahmed",
              link: "https://dummy.link/usool-as-sunnah",
            },
          ],
        },
        {
          title: "General Manners",
          books: [
            {
              name: "The Manners & Attributes of the Prophet Muhammad ﷺ by Abdul-Ghani al-Maqdisi",
              link: "https://dummy.link/manners-attributes-prophet",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "Heartfelt Advice to a Friend by Ibn al-Qayyim",
              link: "https://dummy.link/advice-to-a-friend",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Diseases of the Hearts & Their Cures by Ibn Taymiyyah",
              link: "https://dummy.link/diseases-of-the-heart",
            },
          ],
        },
        {
          title: "Asma al Husna",
          books: [
            {
              name: "Explanation to the Beautiful and Perfect Names of Allāh by as-Sa’di",
              link: "https://dummy.link/beautiful-names",
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <GreenBar>
        <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
          {levelContent.level2.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level2.subjects.map((subject, index) => (
          <Box key={index}>
            <Typography variant="h6" sx={{ marginBottom: "0.5rem" }}>
              {subject.title}
            </Typography>
            {subject.books.map((book, bookIndex) => (
              <Typography
                key={bookIndex}
                variant="body1"
                sx={{ marginBottom: "0.3rem" }}
              >
                <Link
                  href={book.link}
                  style={{ textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▪ {book.name}
                </Link>
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Level02;
