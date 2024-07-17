import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level01 = () => {
  const levelContent = {
    level1: {
      title: "LEVEL 01",
      subjects: [
        {
          title: "Knowledge & Manners",
          books: [
            {
              name: "A Translation of the Summary of the Veneration of Knowledge",
              link: "https://dummy.link/translation-summary",
            },
            {
              name: "Veneration of Knowledge",
              link: "https://dummy.link/veneration-knowledge",
            },
            {
              name: "Obstacles in the Path of Seeking Knowledge by Shaykh Abd as-Salam Burjis",
              link: "https://dummy.link/obstacles-path",
            },
            {
              name: "How to record the knowledge and preserve the benefits Dr. Saleh bin Abdul Aziz bin Othman Sindi",
              link: "https://dummy.link/record-knowledge",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "The Names and Attributes of Allāh - Explanation of the Correct Belief through Authentic Tafsir by Abdulilah Lahmami",
              link: "https://dummy.link/names-attributes",
            },
            {
              name: "The Correct Belief",
              link: "https://dummy.link/correct-belief",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Prerequisites, Pillars & Obligations of the Prayer by Muhammad ibn Abdul-Wahhab",
              link: "https://dummy.link/prayer-prerequisites",
            },
            {
              name: "An Explanation of the Conditions, Pillars and Requirements of Prayer by Shaykh Muhammad Amaan al-Jaamee and Shaykh Abdul-Muhsin al-Abbad [for reference]",
              link: "https://dummy.link/conditions-prayer",
            },
            {
              name: "The Humility in Prayer by Ibn Rajab",
              link: "https://dummy.link/humility-prayer",
            },
            {
              name: "Guidance for Fasting Muslims by Shaykh ‘Uthaymīn",
              link: "https://dummy.link/fasting-guidance",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Salafi Methodology by Shaykh Muhammad Bazmul",
              link: "https://dummy.link/salafi-methodology",
            },
            {
              name: "Al-Ghurabah - The Strangers by Ibn Rajab",
              link: "https://dummy.link/al-ghurabah",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "Authentic Tafsir by Abdulilah Lahmami",
              link: "https://dummy.link/authentic-tafsir",
            },
          ],
        },
        {
          title: "General Manners",
          books: [
            {
              name: "Noble Manners Based Upon 4 Pillars by Sh ‘Abdur-Razzaq al-Badr",
              link: "https://dummy.link/noble-manners",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "The Journey to Allāh by Ibn Rajab",
              link: "https://dummy.link/journey-to-allah",
            },
            {
              name: "How to Escapes Sins by Ibn al-Qayyim explained by Shaykh Abdur-Razzaq al-Badr",
              link: "https://dummy.link/escape-sins",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Ten Principles Concerning Purification of the Soul by Shaykh Abdur-Razzaq al-Badr",
              link: "https://dummy.link/ten-principles",
            },
            {
              name: "A Treatise in Condemnation of the Hardness of the Heart by Ibn Rajab",
              link: "https://dummy.link/condemnation-hardness",
            },
          ],
        },
        {
          title: "Da'wa",
          books: [
            {
              name: "Provisions for the Caller to Allah by Shaykh ‘Uthaymīn",
              link: "https://dummy.link/provisions-caller",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "Concise Biography of Prophet Muhammed",
              link: "https://dummy.link/concise-biography",
            },
            {
              name: "Love for Prophet Muhammed",
              link: "https://dummy.link/love-prophet",
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
          {levelContent.level1.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level1.subjects.map((subject, index) => (
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

export default Level01;
