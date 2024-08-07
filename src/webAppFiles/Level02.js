import React from "react";
import Leveler from "./Leveler";

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
              link: "https://t.me/TheEnglishDiwan/7601",
            },
            {
              name: "Excellence of Knowledge, The Virtue of the Salaf over the Khalaf by Ibn Rajab",
              link: "https://t.me/TheEnglishDiwan/8995The",
            },
            {
              name: "The Student of Knowledge and Books by Shaykh Saalih Aali Shaikh",
              link: "https://t.me/TheEnglishDiwan/6100",
            },
            {
              name: "Daily Routine of a Student of knowledge",
              link: "https://t.me/DarPDFs/1882",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "Explanation of 'La Ilaha Illallah' [tamil]",
              link: "https://t.me/salafimaktabahmpm/30",
            },
            {
              name: "Conditions of Kalima [tamil]",
              link: "https://t.me/salafimaktabahmpm/35",
            },
            {
              name: "Explanation of 'Muhammadur Rasoolullah' [tamil]",
              link: "https://t.me/salafimaktabahmpm/41",
            },
            {
              name: "Explanation of The Four Principles [tamil]",
              link: "https://t.me/islamiyanoolagam/785",
            },
            {
              name: "Benefits of Knowing Allah Part-1 [tamil]",
              link: "https://t.me/salafimaktabahmpm/103",
            },
            {
              name: "Benefits of Knowing Allah Part-2 [tamil]",
              link: "https://t.me/salafimaktabahmpm/122",
            },
            {
              name: "Benefits of Knowing Allah Part-3 [tamil]",
              link: "https://t.me/salafimaktabahmpm/149",
            },
            {
              name: "Manhaj of Ahlus Sunnah in Names and Attributes [tamil]",
              link: "https://t.me/salafimaktabahmpm/81",
            },
            {
              name: "11 General Principles of Ahlus Sunnah in Names and Attributes Part-1 [tamil]",
              link: "https://t.me/salafimaktabahmpm/294",
            },
            {
              name: "11 General Principles of Ahlus Sunnah in Names and Attributes Part-2 [tamil]",
              link: "https://t.me/salafimaktabahmpm/310",
            },
            {
              name: "The Creed of al-Wasitiyyah by Ibn Taymiyyah",
              link: "https://t.me/TheEnglishDiwan/10706",
            },
            {
              name: "Aspects of the Days of Ignorance by Muhammad ibn Abdul-Wahhaab",
              link: "https://t.me/TheEnglishDiwan/7585",
            },
            {
              name: "Divine Decree & Pre Ordainment - Shaykh Salih Al Uthaymīn",
              link: "https://t.me/DarPDFs/2144",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Abridgment of the Prophet’s Prayer Described by Shaykh al-Albani",
              link: "https://t.me/TheEnglishDiwan/9186",
            },
            {
              name: "Inner Dimension of the Prayer by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/8120",
            },
            {
              name: "The Magnifying Glass on Clarifying Common Errors in Salah by Shaykh Saalih Aali Shaykh",
              link: "https://t.me/TheEnglishDiwan/7280",
            },
            {
              name: "The Fiqh of Fasting the Month of Ramadan Work book",
              link: "https://t.me/TheEnglishDiwan/3573",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "How are We Obligated to Interpret the Noble Qur’aan? by Shaykh al-Albani",
              link: "https://t.me/TheEnglishDiwan/4949",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Foundations of the Salafi Da’wah by Shaykh Abdus-Salam bin Burjis",
              link: "https://t.me/TheEnglishDiwan/2822",
            },
            {
              name: "Reality of Salafiyyah - Salih Al Fawzan",
              link: "https://t.me/DarPDFs/2508",
            },
            {
              name: "Commentary on Usool as Sunnah of Ahmed",
              link: "https://t.me/DarPDFs/5315",
            },
          ],
        },
        {
          title: "General Manners",
          books: [
            {
              name: "The Manners & Attributes of the Prophet Muhammad ﷺ by Abdul-Ghani al-Maqdisi",
              link: "https://t.me/TheEnglishDiwan/11711",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "Heartfelt Advice to a Friend by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/4544",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Diseases of the Hearts & Their Cures by Ibn Taymiyyah",
              link: "https://t.me/TheEnglishDiwan/8315",
            },
          ],
        },
        {
          title: "Asma al Husna",
          books: [
            {
              name: "Explanation to the Beautiful and Perfect Names of Allāh by as-Sa’di",
              link: "https://t.me/TheEnglishDiwan/4793",
            },
          ],
        },
      ],
    },
  };
  return <Leveler level={levelContent.level2} />;
};

export default Level02;
