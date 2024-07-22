import React from "react";
import Leveler from "./Leveler";

const Level06 = () => {
  const levelContent = {
    level6: {
      title: "LEVEL 06",
      subjects: [
        {
          title: "Rulings Pertaining to Al-Qur’an",
          books: [
            {
              name: "Islamic Rulings Regarding the Qur’an by the Permanent Committee of Scholars in Saudi Arabia",
              link: "https://t.me/TheEnglishDiwan/2608",
            },
          ],
        },
        {
          title: "Fatawa Reads",
          books: [
            {
              name: "Fatawa Islamiyah, 8 Volumes",
              link: "https://t.me/TheEnglishDiwan/12502",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "Tafseer as-Sa’di, 10 volumes",
              link: "https://t.me/TheEnglishDiwan/5366",
            },
          ],
        },
        {
          title: "Hadeeth",
          books: [
            {
              name: "Explanation of Riyadus-Saliheen by Shaykh ‘Uthaymīn, 6 volumes",
              link: "https://t.me/TheEnglishDiwan/5379",
            },
          ],
        },
        {
          title: "Wise Sayings",
          books: [
            {
              name: "Sayd al Khatir - Captured Thoughts by Ibn al-Jawzi",
              link: "https://t.me/TheEnglishDiwan/5267",
            },
          ],
        },
      ],
    },
  };

  return <Leveler level={levelContent.level6} />;
};

export default Level06;
