import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level06 = () => {
  const levelContent = {
    level6: {
      title: "LEVEL 06",
      subjects: [
        {
          title: "Rulings Regarding the Qur’an",
          books: [
            {
              name: "Islamic Rulings Regarding the Qur’an by the Permanent Committee of Scholars in Saudi Arabia",
              link: "https://dummy.link/islamic-rulings-quran",
            },
          ],
        },
        {
          title: "Fatawa Reads",
          books: [
            {
              name: "Fatawa Islamiyah, Vol 1",
              link: "https://dummy.link/fatawa-islamiyah-vol1",
            },
            {
              name: "Fatawa Islamiyah, Vol 2",
              link: "https://dummy.link/fatawa-islamiyah-vol2",
            },
            {
              name: "Fatawa Islamiyah, Vol 3",
              link: "https://dummy.link/fatawa-islamiyah-vol3",
            },
            {
              name: "Fatawa Islamiyah, Vol 4",
              link: "https://dummy.link/fatawa-islamiyah-vol4",
            },
            {
              name: "Fatawa Islamiyah, Vol 5",
              link: "https://dummy.link/fatawa-islamiyah-vol5",
            },
            {
              name: "Fatawa Islamiyah, Vol 6",
              link: "https://dummy.link/fatawa-islamiyah-vol6",
            },
            {
              name: "Fatawa Islamiyah, Vol 7",
              link: "https://dummy.link/fatawa-islamiyah-vol7",
            },
            {
              name: "Fatawa Islamiyah, Vol 8",
              link: "https://dummy.link/fatawa-islamiyah-vol8",
            },
          ],
        },
        {
          title: "Wise Sayings",
          books: [
            {
              name: "Sayd al Khatir - Captured Thoughts by Ibn al-Jawzi",
              link: "https://dummy.link/sayd-al-khatir",
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
          {levelContent.level6.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level6.subjects.map((subject, index) => (
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

export default Level06;
