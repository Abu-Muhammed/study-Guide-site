import React from "react";
import Leveler from "./Leveler";

const Level01 = () => {
  const levelContent = {
    level1: {
      title: "LEVEL 01",
      subjects: [
        {
          title: "Knowledge & Manners",
          books: [
            {
              name: "Virtues of Seeking Knowledge - Shaykh Sulaiman ar Ruhaylee [tamil]",
              link: "https://t.me/salafimaktabahmpm/61",
            },
            {
              name: "Virtues of Attaining Understanding in Deen [tamil]",
              link: "https://t.me/salafimaktabahmpm/65",
            },
            {
              name: "The Intend behind the word 'Ilm' in Relegious Texts [tamil]",
              link: "https://t.me/salafimaktabahmpm/70",
            },
            {
              name: "The Summary of the Veneration of Knowledge - Shaykh Salih al Usaymee",
              link: "https://t.me/TheEnglishDiwan/10497",
            },
            {
              name: "Veneration of Knowledge [reference]",
              link: "https://t.me/TheEnglishDiwan/11424?single",
            },
            {
              name: "Obstacles in the Path of Seeking Knowledge by Shaykh Abd as-Salam Burjis",
              link: "https://t.me/TheEnglishDiwan/5209",
            },
            {
              name: "How to record the knowledge and preserve the benefits Dr. Saleh bin Abdul Aziz bin Othman Sindi",
              link: "https://drive.google.com/file/d/1GPLIwfvbOXn2SyvvGAIZwI_UuGQJufmE/view?usp=sharing",
            },
          ],
        },
        {
          title: "Aqeeda",
          books: [
            {
              name: "The Importance of Aqeeda and the ruling on learning it [tamil]",
              link: "https://drive.google.com/file/d/1EuNBYKY5d3Jdup2GIi0WGwhjkvvn4bpi/view",
            },
            {
              name: "Tawheed - Importance & Benefits [tamil]",
              link: "https://t.me/salafimaktabahmpm/21",
            },
            {
              name: "Explanation of the Kalima [tamil]",
              link: "https://t.me/islamiyanoolagam/443",
            },
            {
              name: "The Four Principles on Shirk [tamil]",
              link: "https://t.me/islamiyanoolagam/401",
            },
            {
              name: "Know Basic Creed [tamil]",
              link: "https://t.me/salafimaktabahmpm/388",
            },
            {
              name: "Importance of Knowing Names and Attributes of Allāh [tamil]",
              link: "https://t.me/salafimaktabahmpm/88",
            },
            {
              name: "The Names and Attributes of Allāh - Explanation of the Correct Belief through Authentic Tafsir by Abdulilah Lahmami",
              link: "https://t.me/TheEnglishDiwan/2962",
            },
            {
              name: "The adverse effect of Absence of Aqeeda [tamil]",
              link: "https://t.me/salafimaktabahmpm/218",
            },
            {
              name: "The Da'wa without Aqeeda fails [tamil]",
              link: "https://t.me/salafimaktabahmpm/11",
            },
          ],
        },
        {
          title: "Fiqh",
          books: [
            {
              name: "The Prerequisites, Pillars & Obligations of the Prayer by Muhammad ibn Abdul-Wahhab",
              link: "https://t.me/TheEnglishDiwan/12685",
            },
            {
              name: "An Explanation of the Conditions, Pillars and Requirements of Prayer by Shaykh Muhammad Amaan al-Jaamee and Shaykh Abdul-Muhsin al-Abbad [reference]",
              link: "https://t.me/TheEnglishDiwan/6552",
            },
            {
              name: "The Humility in Prayer by Ibn Rajab",
              link: "https://t.me/TheEnglishDiwan/7350",
            },
            {
              name: "Guidance for Fasting Muslims by Shaykh ‘Uthaymīn",
              link: "https://t.me/TheEnglishDiwan/3160",
            },
          ],
        },
        {
          title: "Manhaj",
          books: [
            {
              name: "Why is it Obligatory to follow the Understanding of Salaf in Comprehending the Book and Sunnah [tamil]",
              link: "https://t.me/salafimaktabahmpm/558",
            },
            {
              name: "Understanding the statement 'Obligation of Following the Understanding of Salaf' [tamil]",
              link: "https://t.me/salafimaktabahmpm/597",
            },
            {
              name: "How can we Follow Sahaba while they fell in errors?! [tamil]",
              link: "https://t.me/salafimaktabahmpm/606",
            },
            {
              name: "Salafi Manhaj in Brief [tamil]",
              link: "https://t.me/salafimaktabahmpm/8",
            },
            {
              name: "The Companions in the Light of Kitab and Sunnah [tamil]",
              link: "https://t.me/islamiyanoolagam/210",
            },
            {
              name: "The Salafi Methodology by Shaykh Muhammad Bazmul",
              link: "https://t.me/TheEnglishDiwan/7557",
            },
            {
              name: "Al-Ghurabah - The Strangers by Ibn Rajab",
              link: "https://t.me/TheEnglishDiwan/6363",
            },
          ],
        },
        {
          title: "Tafseer",
          books: [
            {
              name: "Authentic Tafsir by Abdulilah Lahmami",
              link: "https://t.me/TheEnglishDiwan/4305",
            },
          ],
        },
        {
          title: "General Manners",
          books: [
            {
              name: "Noble Manners Based Upon 4 Pillars by Sh ‘Abdur-Razzaq al-Badr",
              link: "https://t.me/TheEnglishDiwan/12445",
            },
          ],
        },
        {
          title: "Sulook",
          books: [
            {
              name: "The Journey to Allāh by Ibn Rajab",
              link: "https://t.me/TheEnglishDiwan/7847",
            },
            {
              name: "How to Escapes Sins by Ibn al-Qayyim explained by Shaykh Abdur-Razzaq al-Badr",
              link: "https://t.me/TheEnglishDiwan/4982",
            },
          ],
        },
        {
          title: "Tazkiyah",
          books: [
            {
              name: "Importance of Purifying the Soul by Shaykh Abdur-Razzaq al-Badr Part-1 [tamil]",
              link: "https://t.me/salafimaktabahmpm/778",
            },
            {
              name: "Importance of Purifying the Soul by Shaykh Abdur-Razzaq al-Badr Part-2 [tamil]",
              link: "https://t.me/salafimaktabahmpm/786",
            },
            {
              name: "Ten Principles Concerning Purification of the Soul by Shaykh Abdur-Razzaq al-Badr",
              link: "https://t.me/TheEnglishDiwan/7354",
            },
            {
              name: "A Treatise in Condemnation of the Hardness of the Heart by Ibn Rajab",
              link: "https://t.me/TheEnglishDiwan/7226",
            },
          ],
        },
        {
          title: "Da'wa",
          books: [
            {
              name: "Provisions for the Caller to Allah by Shaykh ‘Uthaymīn",
              link: "https://t.me/TheEnglishDiwan/6104",
            },
          ],
        },
        {
          title: "History",
          books: [
            {
              name: "Importance of Knowing Our Prophet Muhammed [tamil]",
              link: "https://t.me/salafimaktabahmpm/416",
            },
            {
              name: "Signs of Prophecy [tamil]",
              link: "https://t.me/salafimaktabahmpm/469",
            },
            {
              name: "Concise Biography of Prophet Muhammed",
              link: "https://sarhaan.com/ab/a-concise-biography-of-the-prophet-peace-be-upon-him-and-his-special-traits/",
            },
            {
              name: "Love for Prophet and its Signs [tamil]",
              link: "https://t.me/salafimaktabahmpm/442",
            },
          ],
        },
      ],
    },
  };

  return <Leveler level={levelContent.level1} />;
};

export default Level01;
