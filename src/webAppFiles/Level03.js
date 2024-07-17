import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level03 = () => {
  const levelContent = {
    level3: {
      title: "LEVEL 03",
      subjects: [
        {
          title: "Aqeeda",
          books: [
            {
              name: "Explanation of the Three Fundamental Principles by Shaykh ‘Uthaymīn [Tamil Pdf]",
              link: "https://dummy.link/fundamental-principles",
            },
            {
              name: "Interpretation of Kitab at-Tauhid - The Destination of the Seeker of Truth by Shaykh Salih Aali Shaikh",
              link: "https://dummy.link/interpretation-kitab-tauhid",
            },
            {
              name: "Tawhid of Allāh’s Most Beautiful Names & Lofty Attributes by Shaykh Muhammad ibn Khalifa al-Tamimi",
              link: "https://dummy.link/tawhid-beautiful-names",
            },
            {
              name: "Logical Proofs for Onness & Perfection of Allah - Shaykh Abdur Rahman as Sa'di",
              link: "https://dummy.link/logical-proofs-allah",
            },
            {
              name: "The Additions to the Aspects of the Days of Ignorance by Shaykh Abdullah ibn Muhammad ad-Duwaish",
              link: "https://dummy.link/additions-aspects-days",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Prophet’s Prayer Described ﷺ by Shaykh al-Albaani",
              link: "https://dummy.link/prophets-prayer",
            },
            {
              name: "Common Mistakes in Prayer by Shaykh Muhammad Bazmool",
              link: "https://dummy.link/common-mistakes-prayer",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "Paragons of the Qur’an by Ibn al-Qayyim",
              link: "https://dummy.link/paragons-quran",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Methodology of the Saved Sect",
              link: "https://dummy.link/methodology-saved-sect",
            },
            {
              name: "It is Not from the Manhaj of the Salaf by Shaykh Muhammad Bazmool",
              link: "https://dummy.link/not-from-manhaj",
            },
            {
              name: "Explanation of Usool as Sunnah of Ahmed - Shaykh Rabee",
              link: "https://dummy.link/explanation-usool-sunnah",
            },
            {
              name: "Differences of Opinion Amongst the Scholars - Their Causes and Our Positions Towards Them by Shaykh ‘Uthaymīn",
              link: "https://dummy.link/differences-of-opinion",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "Splitting Of the Muslim Ummah - Abu Iyad",
              link: "https://dummy.link/splitting-muslim-ummah",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Spiritual Disease and Its Cure by Ibn al-Qayyim",
              link: "https://dummy.link/spiritual-disease-cure",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "The Spiritual Journey to Allāh & His Messenger (Ar-Risalah at-Tabukiyyah) by Ibn al-Qayyim",
              link: "https://dummy.link/spiritual-journey",
            },
          ],
        },
        {
          title: "Rights",
          books: [
            {
              name: "The Innate Rights According to Islamic Laws by Shaykh ‘Uthaymīn",
              link: "https://dummy.link/innate-rights",
            },
          ],
        },
        {
          title: "Awareness",
          books: [
            {
              name: "Fatawa Concerning Looking by Memphis Da’wah",
              link: "https://dummy.link/fatawa-concerning-looking",
            },
            {
              name: "Clarification of common mistakes widespread among the Muslims - By:Shaykh Salih Al ash Shaykh",
              link: "https://dummy.link/clarification-mistakes",
            },
          ],
        },
        {
          title: "Manners",
          books: [
            {
              name: "A Glimpse at the Impeccable Character of the Noble Messenger by Shaykh Abdul-Muhsin al-Abbad al-Badr",
              link: "https://dummy.link/impeccable-character",
            },
          ],
        },
        {
          title: "Admonition",
          books: [
            {
              name: "The Advice of Prophet Yahya ibn Zakariya explained by Ibn al-Qayyim",
              link: "https://dummy.link/advice-yahya-ibn-zakariya",
            },
            {
              name: "One Hundred Pieces of Advice by Ibn al-Qayyim",
              link: "https://dummy.link/hundred-pieces-advice",
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
          {levelContent.level3.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level3.subjects.map((subject, index) => (
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

export default Level03;
