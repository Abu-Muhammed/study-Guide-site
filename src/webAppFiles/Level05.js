import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level05 = () => {
  const levelContent = {
    level5: {
      title: "LEVEL 05",
      subjects: [
        {
          title: "Aqeeda",
          books: [
            {
              name: "Al-Wala’ wa’l-Bara’ by Muhammad Saeed al-Qahtani, 3 volumes",
              link: "https://dummy.link/al-wala-wal-bara",
            },
            {
              name: "Commentary on Shaykh al-Islam Ibn Taymiyyah’s Al-‘Aqidah al-Wasitiyyah by Shaykh ‘Uthaymīn, 2 volumes",
              link: "https://dummy.link/commentary-aqidah-wasitiyyah",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "Summary of Fiqh - Salih Al Fawzan Vol 1",
              link: "https://dummy.link/summary-fiqh-vol1",
            },
            {
              name: "Summary of Fiqh - Salih Al Fawzan Vol 2",
              link: "https://dummy.link/summary-fiqh-vol2",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "Explanation of Sharah as Sunnah - Salih Al Fawzan Vol 1",
              link: "https://dummy.link/explanation-sharah-sunnah-vol1",
            },
            {
              name: "Explanation of Sharah as Sunnah - Salih Al Fawzan Vol 2",
              link: "https://dummy.link/explanation-sharah-sunnah-vol2",
            },
            {
              name: "Encyclopedia on Bid’ah & Its Principles by Shaykh al-Albani",
              link: "https://dummy.link/encyclopedia-bidah-principles",
            },
          ],
        },
        {
          title: "Awakening",
          books: [
            {
              name: "Ibn al-Jawzee’s The Devil’s Deception",
              link: "https://dummy.link/devils-deception",
            },
          ],
        },
        {
          title: "Wise Sayings",
          books: [
            {
              name: "Al-Fawaid - A Collection of Wise Sayings by Ibn al-Qayyim",
              link: "https://dummy.link/al-fawaid-wise-sayings",
            },
          ],
        },
        {
          title: "Pondering",
          books: [
            {
              name: "Men and the Universe, Reflections of Ibn al-Qayyim",
              link: "https://dummy.link/men-universe-reflections",
            },
          ],
        },
        {
          title: "As Sirath al Mustaqeem",
          books: [
            {
              name: "The Right Way - A Summarised Translation of Iqtida as-Siratul-Mustaqeem by Ibn Taymiyyah",
              link: "https://dummy.link/right-way-iqtida-siratul-mustaqeem",
            },
          ],
        },
        {
          title: "Seerah",
          books: [
            {
              name: "Concise Biography of the Prophet Muhammad of Muhammad ibn ‘Abdul-Wahhab by Shaykh Salih Al-Sheikh",
              link: "https://dummy.link/concise-biography-prophet-muhammad",
            },
            {
              name: "The Daily Practices of the Prophet ﷺ by Abdullah al-Furaih",
              link: "https://dummy.link/daily-practices-prophet",
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
          {levelContent.level5.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level5.subjects.map((subject, index) => (
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

export default Level05;
