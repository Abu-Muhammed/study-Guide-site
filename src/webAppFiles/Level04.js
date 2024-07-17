import React from "react";
import Container from "./Container";
import { Box, Link, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

const Level04 = () => {
  const levelContent = {
    level4: {
      title: "LEVEL 04",
      subjects: [
        {
          title: "Manners of a Talibul Ilm",
          books: [
            {
              name: "The Book of Knowledge by Shaykh ‘Uthaymīn",
              link: "https://dummy.link/book-of-knowledge",
            },
            {
              name: "The Fruit of Knowledge by Shaykh Abdur-Razzaq al-Badr",
              link: "https://dummy.link/fruit-of-knowledge",
            },
            {
              name: "20 Stressors for a Student of Knowledge by AbdulRahman Hassan",
              link: "https://dummy.link/stressors-for-student",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "Lā Ilāha ill-Allāh - Its Meanings, Conditions, Nullifiers, Virtues Nd Syntactic Analysis by Shaykh Muhammad Raslan",
              link: "https://dummy.link/lailaha-illallah",
            },
            {
              name: "Understanding Your Testimony of Faith - Seven Essential Points of Understanding of Muhammad ibn Abdul-Wahhab explained by Shaykh Muhammad Aman al-Jami",
              link: "https://dummy.link/understanding-testimony",
            },
            {
              name: "The Reality of the Testimony that Muhammad is the Messenger of Allāh ﷺ by Shaykh Abdul Aziz Al ash-Shaykh",
              link: "https://dummy.link/reality-testimony",
            },
            {
              name: "Purity of Faith (Kitab at-Tawhid) by Muhammad ibn Abdul-Wahhab",
              link: "https://dummy.link/purity-of-faith",
            },
            {
              name: "Exemplary Principles Concerning the Beautiful Names and Attributes of Allaah by Sh Utahymeen",
              link: "https://dummy.link/beautiful-names-attributes",
            },
            {
              name: "Causes Behind the Increase and Decrease of Eemaan by Shaykh Abdur-Razzaq al-Badr",
              link: "https://dummy.link/increase-decrease-eeman",
            },
            {
              name: "An Explanation of the Aspects of the Days of Ignorance by Shaykh Saalih al-Fawzaan",
              link: "https://dummy.link/explanation-days-ignorance",
            },
            {
              name: "Belief In Qadar - Shaykh Muhammad Al Jibaly",
              link: "https://dummy.link/belief-in-qadar",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Guidance of the Companions with regards to the People of Innovation by Shaykh Muhammad bin Ramzaan al-Haajiri",
              link: "https://dummy.link/guidance-of-companions",
            },
            {
              name: "A Collection of Treatises for Ahlus-Sunnah on How to Deal with the People of Innovation by Shaykh Ubayd al-Jabiree",
              link: "https://dummy.link/treatises-ahlus-sunnah",
            },
            {
              name: "Deviant Methodologies - Shaykh Ahmed an Najmi",
              link: "https://dummy.link/deviant-methodologies",
            },
            {
              name: "Al-Bid’ah - Its General Rules and Its Evil Effects upon the Ummah by Shaykh Ali ibn Nasir al-Faqihi",
              link: "https://dummy.link/al-bidah-general-rules",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            { name: "Fiqh", link: "https://dummy.link/fiqh" }, // Placeholder for actual content
          ],
        },
        {
          title: "Prophetic Seerah",
          books: [
            {
              name: "Provisions for the Hereafter, Summary of Zad al-Ma’ad of Ibn al-Qayyim by Muhammad ibn Abdul-Wahhab",
              link: "https://dummy.link/provisions-hereafter",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "The Islamic Creed & Its History by Shaykh Muhammad Aman al-Jami",
              link: "https://dummy.link/islamic-creed-history",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "Characteristics of the Hypocrites by Ibn al-Qayyim",
              link: "https://dummy.link/characteristics-hypocrites",
            },
            {
              name: "The Inner Secrets of worship - Imam Ibn Qudama",
              link: "https://dummy.link/inner-secrets-worship",
            },
          ],
        },
        {
          title: "Love",
          books: [
            {
              name: "The Principle of Love & Desire by Ibn Taymiyyah",
              link: "https://dummy.link/principle-love-desire",
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
          {levelContent.level4.title}
        </Typography>
      </GreenBar>
      <Container>
        {levelContent.level4.subjects.map((subject, index) => (
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

export default Level04;
