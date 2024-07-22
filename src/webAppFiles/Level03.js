import React from "react";
import Leveler from "./Leveler";

const Level03 = () => {
  const levelContent = {
    level3: {
      title: "LEVEL 03",
      subjects: [
        {
          title: "Aqeeda",
          books: [
            {
              name: "Explanation of the Three Fundamental Principles by Shaykh ‘Uthaymīn [tamil]",
              link: "https://t.me/TheEnglishDiwan/8332",
            },
            {
              name: "Interpretation of Kitab at-Tauhid - The Destination of the Seeker of Truth by Shaykh Salih Aali Shaikh",
              link: "https://t.me/TheEnglishDiwan/10013",
            },
            {
              name: "Tawhid of Allāh’s Most Beautiful Names & Lofty Attributes by Shaykh Muhammad ibn Khalifa al-Tamimi",
              link: "https://t.me/TheEnglishDiwan/7532",
            },
            {
              name: "Logical Proofs for Onness & Perfection of Allah - Shaykh Abdur Rahman as Sa'di",
              link: "https://t.me/DarPDFs/2146",
            },
            {
              name: "The Additions to the Aspects of the Days of Ignorance by Shaykh Abdullah ibn Muhammad ad-Duwaish",
              link: "https://t.me/TheEnglishDiwan/5079",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Prophet’s Prayer Described ﷺ by Shaykh al-Albaani",
              link: "https://t.me/TheEnglishDiwan/7137",
            },
            {
              name: "Common Mistakes in Prayer by Shaykh Muhammad Bazmool",
              link: "https://t.me/TheEnglishDiwan/5858",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "Paragons of the Qur’an by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/4941",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "The Methodology of the Saved Sect",
              link: "https://t.me/DarPDFs/6165",
            },
            {
              name: "It is Not from the Manhaj of the Salaf by Shaykh Muhammad Bazmool",
              link: "https://t.me/TheEnglishDiwan/8642",
            },
            {
              name: "Explanation of Usool as Sunnah of Ahmed - Shaykh Rabee",
              link: "https://t.me/DarPDFs/2001",
            },
            {
              name: "Differences of Opinion Amongst the Scholars - Their Causes and Our Positions Towards Them by Shaykh ‘Uthaymīn",
              link: "https://t.me/TheEnglishDiwan/7292",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "Splitting Of the Muslim Ummah - Abu Iyad",
              link: "https://www.aqidah.com/creed/articles/oeotc-glimpses-into-the-splitting-of-the-muslim-ummah-part-1.cfm",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Spiritual Disease and Its Cure by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/6920",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "The Spiritual Journey to Allāh & His Messenger (Ar-Risalah at-Tabukiyyah) by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/9838",
            },
          ],
        },
        {
          title: "Rights",
          books: [
            {
              name: "The Innate Rights According to Islamic Laws by Shaykh ‘Uthaymīn",
              link: "https://t.me/TheEnglishDiwan/10184",
            },
          ],
        },
        {
          title: "Awareness",
          books: [
            {
              name: "Fatawa Concerning Looking by Memphis Da’wah",
              link: "https://t.me/TheEnglishDiwan/9323",
            },
            {
              name: "Clarification of common mistakes widespread among the Muslims - By:Shaykh Salih Al ash Shaykh",
              link: "https://t.me/TheEnglishDiwan/10322",
            },
          ],
        },
        {
          title: "Manners",
          books: [
            {
              name: "A Glimpse at the Impeccable Character of the Noble Messenger by Shaykh Abdul-Muhsin al-Abbad al-Badr",
              link: "https://t.me/TheEnglishDiwan/3362",
            },
          ],
        },
        {
          title: "Admonition",
          books: [
            {
              name: "The Advice of Prophet Yahya ibn Zakariya explained by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/9402",
            },
            {
              name: "One Hundred Pieces of Advice by Ibn al-Qayyim",
              link: "https://t.me/TheEnglishDiwan/3088",
            },
          ],
        },
      ],
    },
  };

  return <Leveler level={levelContent.level3} />;
};

export default Level03;
