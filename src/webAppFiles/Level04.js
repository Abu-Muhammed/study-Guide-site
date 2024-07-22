import React from "react";
import Leveler from "./Leveler";

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
              link: "https://t.me/TheEnglishDiwan/3173",
            },
            {
              name: "The Fruit of Knowledge by Shaykh Abdur-Razzaq al-Badr",
              link: "https://t.me/TheEnglishDiwan/3100",
            },
            {
              name: "20 Stressors for a Student of Knowledge by AbdulRahman Hassan",
              link: "https://t.me/TheEnglishDiwan/3030",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "Lā Ilāha ill-Allāh - Its Meanings, Conditions, Nullifiers, Virtues and Syntactic Analysis by Shaykh Muhammad Raslan",
              link: "https://t.me/TheEnglishDiwan/3398",
            },
            {
              name: "Understanding Your Testimony of Faith - Seven Essential Points of Understanding of Muhammad ibn Abdul-Wahhab explained by Shaykh Muhammad Aman al-Jami",
              link: "https://t.me/TheEnglishDiwan/6448",
            },
            {
              name: "The Reality of the Testimony that Muhammad is the Messenger of Allāh ﷺ by Shaykh Abdul Aziz Al ash-Shaykh",
              link: "https://t.me/TheEnglishDiwan/9445",
            },
            {
              name: "Purity of Faith (Kitab at-Tawhid) by Muhammad ibn Abdul-Wahhab",
              link: "https://t.me/TheEnglishDiwan/9944",
            },
            {
              name: "Exemplary Principles Concerning the Beautiful Names and Attributes of Allaah by Shaykh Ibn Utahymeen",
              link: "https://t.me/TheEnglishDiwan/13020",
            },
            {
              name: "Causes Behind the Increase and Decrease of Eemaan by Shaykh Abdur-Razzaq al-Badr",
              link: "https://t.me/TheEnglishDiwan/8148",
            },
            {
              name: "An Explanation of the Aspects of the Days of Ignorance by Shaykh Saalih al-Fawzaan",
              link: "https://t.me/TheEnglishDiwan/10798",
            },
            {
              name: "Belief In Qadar - Shaykh Muhammad Al Jibaly",
              link: "https://t.me/DarPDFs/4470",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Guidance of the Companions with regards to the People of Innovation by Shaykh Muhammad bin Ramzaan al-Haajiri",
              link: "https://t.me/TheEnglishDiwan/5525",
            },
            {
              name: "A Collection of Treatises for Ahlus-Sunnah on How to Deal with the People of Innovation by Shaykh Ubayd al-Jabiree",
              link: "https://t.me/TheEnglishDiwan/3426",
            },
            {
              name: "Deviant Methodologies - Shaykh Ahmed an Najmi",
              link: "https://t.me/DarPDFs/1982",
            },
            {
              name: "Al-Bid’ah - Its General Rules and Its Evil Effects upon the Ummah by Shaykh Ali ibn Nasir al-Faqihi",
              link: "https://t.me/TheEnglishDiwan/3451",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "Al-Fiqh [tamil]",
              link: "https://t.me/islamiyanoolagam/748",
            },
          ],
        },
        {
          title: "Prophetic Seerah",
          books: [
            {
              name: "Provisions for the Hereafter, Summary of Zad al-Ma’ad of Ibn al-Qayyim by Muhammad ibn Abdul-Wahhab",
              link: "https://t.me/TheEnglishDiwan/8535",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "The Islamic Creed & Its History by Shaykh Muhammad Aman al-Jami",
              link: "https://t.me/TheEnglishDiwan/6895",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "Characteristics of the Hypocrites by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/3455",
            },
            {
              name: "The Inner Secrets of worship - Imam Ibn Qudama",
              link: "https://t.me/DarPDFs/2148",
            },
          ],
        },
        {
          title: "Love",
          books: [
            {
              name: "The Principle of Love & Desire by Ibn Taymiyyah",
              link: "https://t.me/TheEnglishDiwan/6392",
            },
          ],
        },
      ],
    },
  };
  return <Leveler level={levelContent.level4} />;
};

export default Level04;
