import React from "react";
import Leveler from "./Leveler";

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
              link: "https://t.me/TheEnglishDiwan/9315",
            },
            {
              name: "Commentary on Shaykh al-Islam Ibn Taymiyyah’s Al-‘Aqidah al-Wasitiyyah by Shaykh ‘Uthaymīn, 2 volumes",
              link: "https://t.me/TheEnglishDiwan/7817",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "Summary of Fiqh - Salih Al Fawzan, 2 Volumes",
              link: "https://t.me/DarPDFs/2090",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "Explanation of Sharah as Sunnah - Salih Al Fawzan, 2 Volumes",
              link: "https://t.me/DarPDFs/1690",
            },
            {
              name: "Encyclopedia on Bid’ah & Its Principles by Shaykh al-Albani",
              link: "https://t.me/TheEnglishDiwan/7258",
            },
          ],
        },
        {
          title: "Awakening",
          books: [
            {
              name: "Ibn al-Jawzee’s The Devil’s Deception",
              link: "https://t.me/TheEnglishDiwan/6568",
            },
          ],
        },
        {
          title: "Wise Sayings",
          books: [
            {
              name: "Al-Fawaid - A Collection of Wise Sayings by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/8687",
            },
          ],
        },
        {
          title: "Pondering",
          books: [
            {
              name: "Men and the Universe, Reflections of Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/8711",
            },
          ],
        },
        {
          title: "As Sirath al Mustaqeem",
          books: [
            {
              name: "The Right Way - A Summarised Translation of Iqtida as-Siratul-Mustaqeem by Ibn Taymiyyah",
              link: "https://t.me/TheEnglishDiwan/6047",
            },
          ],
        },
        {
          title: "Seerah",
          books: [
            {
              name: "Concise Biography of the Prophet Muhammad of Muhammad ibn ‘Abdul-Wahhab by Shaykh Salih Al-Sheikh",
              link: "https://t.me/TheEnglishDiwan/6432",
            },
            {
              name: "The Daily Practices of the Prophet ﷺ by Abdullah al-Furaih",
              link: "https://t.me/TheEnglishDiwan/9362",
            },
          ],
        },
      ],
    },
  };

  return <Leveler level={levelContent.level5} />;
};

export default Level05;
