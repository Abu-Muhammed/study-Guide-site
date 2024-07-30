import React from "react";
import { Box, Typography } from "@mui/material";
import GreenBarWithProgress from "./GreenBarWithProgress";

const quotes = [
  {
    text: "I heard ibn Ṭāhir say, “I urinated blood twice whilst seeking knowledge. Once in Baghdād and another time in Makkah. I used to walk bare-footed in the heat, as a result I was afflicted with that [urinating blood]; and I never rode an animal in pursuit of knowledge. I used to carry my books upon my head, and I never asked anyone for a thing whilst I was seeking knowledge. I used to live on whatever came to me.”",
    reference: "Al-Dhahābī, Siyār Aʿlām al-Nubalā (19/363).",
    narrator: "Abū Masʿūd ʿAbd ar-Raḥmān",
  },
  {
    text: "“Shuʿbah sought knowledge from al-Ḥākim ibn ʾUtaybāh for 18 months. He even sold the beams of the roof of his house [to get by].”",
    reference: "al-Iʾlāl wa Mārifāt al-Rijāl (2/342).",
    narrator: "Aḥmad ibn Ḥanbal",
  },
  {
    text: "“We were in Egypt for 7 months, and we did not [even] eat broth whilst we were there. Our day was apportioned for the scholars’ assemblies and at night we would write and revise [what we learnt]. Once, I and a companion came to a shaykh [to study], but they said ‘he is ill’. Then, on our way [back] we saw a fish that we liked, so we bought it. When we arrived home, it was time to attend a gathering, so we did not have time to prepare it. We left it and proceeded to the lesson. We remained [busy in seeking knowledge] until 3 days passed over it and it almost expired, so we ate it raw. We didn’t even have enough time give it to someone who would cook it [for us]. Then he said. ‘Knowledge is not attained with convenience.”",
    reference: "Al-Dhahābī, Tathkirāt al-Hufādh (3/38).",
    narrator: "ʿAbd ar-Raḥmān ibn Abī Ḥātim",
  },
  {
    text: "The great scholar of Arabic grammar, Muḥammad ibn Aḥmad Abū Bakr al-Khayyat al-Baghdādī Used to study all the time, even on the road. He would often fall into a hole or be trampled by an animal!",
    reference: "Mashūq ill al-Qirāta Talāb al-Ilm (p. 62).",
    narrator: "It has been narrated that",
  },
  {
    text: "“I try my very best to limit the time I spend eating, to such an extent that I choose dry biscuit and a sip of water over eating bread, because of the difference in chewing [time] between the two, so as to save my time for reading or writing down some useful ideas. The best thing for the wise man to save is time.”",
    reference: "Ibn Abī Yaʿlā, Tabaqāt al-Hanābilah (1/145).",
    narrator: "Ibn ʿAqīl",
  },
  {
    text: "Dāwūd al-Tāʿī used to drink bread soup instead of eating bread. When that was mentioned to him he replied, “The difference between chewing bread and drinking bread soup is [enough time for] the reciting of 50 verses.”",
    reference: "Al-Majālis wa al-Jawāhir al-Ilm (1/346).",
    narrator: "It has been narrated that",
  },
  {
    text: "I heard Shuʿbah say; “Whoever seeks knowledge will go bankrupt! I sold my mother’s washing basin for seven dinars.”",
    reference: "Al-Dhahābī, Siyār Aʿlām al-Nubalā (10/578).",
    narrator: "Ibn ʿUyyanāh",
  },
  {
    text: "I heard my father say, “I remained in Baṣrah in the year 214 AH for eight months, but I wanted to stay there for a year, however I had no more money [to suffice]. So [as a result] I started to sell the clothing on my back until my money finished again. At that time I used to attend lessons of scholars with my friend. I would seek knowledge from them until the night, my friend would leave and I would return back to my house with nothing. So I began to drink water due to hunger. Then, the next day, my friend came early in the morning and I went around with him listening to ḥadīth whilst I was severely hungry. Then he left [for home] and I would return hungry. The next day, he came early in the morning and said, ‘Come with us to the scholars.” So I replied, “I am too weak.” So he asked, “What has weakened you?” I said, “I will not hide from you my condition. It has been two days since I ate anything.” He said, “I have a dinār remaining, I will support you with it and use the other half for the rent.” So we left Baṣrah and I took from him half a dinār.”",
    reference: "Muqaddimah al-Jārḥ wa all-Taʿdīl (p.363).",
    narrator: "ʿAbd ar-Raḥmān ibn Abī Ḥātim",
  },
  {
    text: "“We used to go to the gathering of ʿAlī ibn al-Madanī at the time of al-ʿĀsr – today, for the gathering of tomorrow. We would sit all night in fear that our place would be taken whilst we used the toilet, and as a consequence we would not hear the lesson the next day. I saw an old man in the gathering urinating in his tūylasān (a type of garment worn on the head) whilst folding the tūylasān until he finished urinating, all because he feared losing his seat if he left to urinate.”",
    reference:
      "Al-Khaṭīb al-Baghdādī, al-Jāmīʿ li ʾAkhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/38).",
    narrator: "Jaʿfar ibn Durūstuyāh",
  },
  {
    text: "“In one of our journeys to Baghdād, Aḥmad ibn Ḥanbal passed by us whilst he was running with his shoes in his hands. So my father took hold of his thobe and said: “Abū ʿAbdullāh, have you no shame? Until when will you race with these youngsters?” He replied: “Until death.” Abū Hurayrāh said, “I have seen myself having a seizure between the minbār of the Prophet and ʿĀʾisha’s room, and the people were saying ‘He is insane.’ Yet I was not affected by insanity, nothing was wrong with me except hunger.”",
    reference: "Abū Nuʿmān, Hilyāh al-‘Awliyyāh (3/362).",
    narrator: "Muḥammad ibn Ismāʿīl al-Sāigh",
  },
  {
    text: "“al-Bukhārī would wake up at night from his sleep, light the lantern, and then write a beneficial thought that crossed his mind. He would then put out the lantern, and then wake up again and again, until the number of times he did that would be close to twenty times.”",
    reference: "Ibn Kathīr, al-Bidāyāh (11/3).",
    narrator: "Ibn al-Kathīr",
  },
  {
    text: "“No one can obtain this knowledge except one who closes down his shop, ruins his farm, abandons his brothers and who, when the closest of his family dies, does not attend his funeral.”",
    reference:
      "Al-Khaṭīb al-Baghdādī, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "Abū Aḥmad Nāsr ibn Aḥmad al-ʿIyādh al-Samarqāndī",
  },
  {
    text: "“Seeking knowledge caused Mālik ibn Anas to demolish the roof of his house and sell its wood.”",
    reference: "Al-Khaṭīb al-Baghdādī, Tarīkh al-Baghdād (2/13).",
    narrator: "Ibn al-Qāsim",
  },
  {
    text: "“I used to leave my house in the morning and not return until it was dark.”",
    reference:
      "Al-Khaṭīb al-Baghdādī, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "Yaḥyā ibn Saʿīd al-Qaṭṭān",
  },
  {
    text: "“I stayed for forty-five years going between al-Shām and al-Ḥijāz, and I did not find a ḥadīth which I considered rare! [I’ve never heard].”",
    reference: "Abū Nuʿmān, Hilyāh al-‘Awliyyāh (3/362).",
    narrator: "Ibn Shihāb az-Zūhrī",
  },
  {
    text: "“I lived thirty years not eating with my hands – I mean at night my sister would feed me while I wrote.”",
    reference:
      "Al-Khaṭīb al-Baghdādī, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "ʿUbayd bin Yaʿīsh",
  },
  {
    text: "“I drank my urine in this affair [of seeking knowledge] five times. al-Khaṭīb al-Baghdādī said, “I presume he was compelled to do so during journeys due to the absence of water, and Allāh knows best.”",
    reference: "Al-Khatīb al-Baghdādī, Tarīkh al-Baghdād (10/280).",
    narrator: "Al-Ḥāfiẓ ʿAbd al-Raḥmān ibn Yūsuf ibn Kirāsh",
  },
  {
    text: "“I was with ‘Abdullāh ibn al-Mubārak in the masjid one cold winter night. We stood to leave and when we were at the door, he narrated some ḥadīth to me or I narrated to him. He did not cease to narrate to me or I did not cease to narrate to him until the man who calls to prayer came and called to the Fajr prayer.”",
    reference:
      "Al-Khatīb al-Baghdādī, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "ʿAlī ibn al-Ḥasan Shaqīq",
  },
  {
    text: "“I found some parts of Arabic grammar difficult. So I spent 80,000 dinārs until I mastered it.”",
    reference: "Al-Dhahābī, Siyār Āʿlām al-Nubalā (10/578).",
    narrator: "Khalaf ibn Hishām",
  },
  {
    text: "“I entered upon Sufyān al-Thawrī when he was in the state of illness that caused his death. So a man narrated a ḥadīth to him that surprised him. So he thrust his hand beneath his bed and withdrew some [writing] tablets of his and he wrote that ḥadīth. It was asked of him, ‘[Do you do such a thing] in the state you are in?’ to which he replied, ‘Indeed it is good and I have heard [something] good, and if I die, then indeed I have written goodness.”",
    reference: "Abū Nuʿmān, Hilyāh al-Awliyyāh (7/64).",
    narrator: "Farqad al-Subkhī",
  },
  {
    text: "“I wrote (ḥadīth) in Baṣrah from one thousand, one hundred and eighty-six men.”",
    reference:
      "Al-Khaṭīb al-Baghdadi, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "Muḥammad ibn Yūnus",
  },
  {
    text: "“I walked a distance of seventy days because of the transcript of Mūfadhal Fudhālah, and if a baker offered me a loaf of bread [for exchange] it wouldn’t be accepted.”",
    reference: "Al-Dhahābī, Tathkirāt al-Hufādh (3/121).",
    narrator: "Ibn al-Mughīrah",
  },
  {
    text: "“I followed Saʿīd ibn al-Musayyib for three days in seeking knowledge.”",
    reference: "Abū Nuʿmān, Hilyah al-Awliyyāh (3/362).",
    narrator: "Az-Zuhrī",
  },
  {
    text: "“Ibn ʿAbbās used to fetter my leg and teach me the Qurʾān and Sunnah.”",
    reference: "Abū Nuʿmān, Hilyāh al-Awliyyāh (3/362).",
    narrator: "Ikrimāh",
  },
  {
    text: "“We use to listen to the narrations of the companions of the Messenger of Allāh in Baṣra, but we were not satisfied until we travelled to Madīnah and heard them from their mouths.”",
    reference:
      "Al-Khaṭīb al-Baghdādī, al-Jāmīʿ li Akhlāq al-Rāwī wa Ādāb al-Sāmī’ (2/174).",
    narrator: "Abū ʿĀliyah",
  },
  {
    text: "“I heard my father say, ‘The first time I travelled to study ḥadīth, I spent seven years in which I counted the steps I walked, they exceeded a thousand leagues – a league is the distance of one hour and a half – and then I stopped counting. As for travelling from Kūfa to Baghdad, they were of countless times. From Makkah to Madīnah [I travelled] many times. I slipped out from the sea near Madīnah [all the way] to Egypt walking, then by foot from Egypt to Ramlāh. I then walked from Ramlāh to Bayt al-Maqdis and then from ar-Ramlāh to Asqalān. I then travelled from Ramlāh to Tiberius and from Tiberius to Damascus. Thereafter, I travelled from Damascus to Homs, from Homs to Antakya and then to Tarsus. I then returned from Tarsus and went back to Homs. I had some ḥadīth left to hear from Abī al-Yamānī, so I heard from him. I then left Homs to Bayt She’an and thereafter to Raqqah. I then rode from Raqqah to the Euphrates to Baghdād, before I departed for Shām. I went to Wāsit and then to the Nile. From the Nile I went to Kūfah. All of that was by foot on my first journey [in pursuit of knowledge] for seven years, whilst I was twenty years of age. I departed Rayy in the year 213 AH in the month of Ramaḍān, and returned in the year 221 AH.”",
    reference: "Ibn Abī Ḥātim al-Rāzī, al-Jārḥ wal-Taʿdīl (1/359).",
    narrator: "Imam Ibn Abī Ḥātim al-Rāzī",
  },
  {
    text: "Abū Dāwūd al-Sījistānī used to tailor one sleeve of his garment wider than the other. When he was asked about it he said, “The wider sleeve is for books and the other is not in need of it.",
    reference: "Al-Dhahābī, Siyār Āʿlām al-Nubalā (13/217).",
    narrator: "It has been narrated that",
  },
  {
    text: "“I am not allowed to waste an hour of my life. Even when I am not delivering lessons or reading, my mind would still be occupied with some matters whilst I’m lying down, and I will not get up until I find something useful to write. I still find zeal in my search for knowledge whilst [I am] in my eighties more than when I were in my twenties.”",
    reference: "Ibn al-Jawzī, al-Muntadham (9/214).",
    narrator: "Ibn ʿAqīl",
  },
  {
    text: "Sulaym ibn Ayyūb used to give much importance to his time. He never wasted it without doing something beneficial. He wrote books, taught lessons or read.",
    reference: "Al-Dhahābī, Siyār Āʿlām al-Nubalā (17/646).",
    narrator: "It has been narrated that",
  },
  {
    text: " Abū Masʿūd Aḥmad ibn al-Furāt al-Rāzī Used to repeat every ḥadīth 500 times. A man once said to him; ‘I [continuously] forget the narrations that I have memorised!’ ‘Upon you is to revise every single narration 500 times.’ said Abū Masʿūd. “Who is able to do that!’ [complained] the man. Abū Masʿūd replied; “And that is why you people [are not able] to memorise”.",
    reference: "adh-Dhahabī, Shams al-Dīn Muḥammad, Tahdhīb al-Tahdhīb (1/58).",
    narrator: "It has been narrated that",
  },
  {
    text: "“I read IbnʿAbd al-Ḥākīm’s Mukhtaṣar 500 times, al-Asadīyah 75 times, al-Muwaṭṭá and al-Mabsūṭa 30 times and Ibn al-Barqī’s Mukhtaṣar 70 times.”",
    reference: "al-Qāḍī Iyāḍ, Abū al-Faḍl, Taqrīb al-Masālik (1/427).",
    narrator: "Abū Bakr al-Abharī al-Mālikī",
  },
  {
    text: "“Abū Bakr al-Anṣārī would recount any issue from a lesson that was asked without having to revise or review the issue. This was possibly due to the fact that in the early stages of his pursuit in seeking knowledge he would repeat every lesson 400 times.",
    reference:
      "Ibn Kathīr, Ismāʻīl ibn ʻUmar , al-Bidāyah wa al-Nihāyah (12/227).",
    narrator: "Ibn Kathīr",
  },
  {
    text: "“We wont know a ḥadīth [by heart] unless we write it down or listen to it 50 times.”",
    reference: "Ibn ʻAsākir, ʻAlī ibn al-Ḥasan, Tārīkh ad-Dimashq (14/65)",
    narrator: "Yaḥyá ibn Maʿīn",
  },
  {
    text: "“I used to repeat every issue of qiyās 1000 times, once I finished, I would do the same with the next issue. I would likewise repeat every lesson 1000 times.",
    reference: "Subkī, Tāj al-Dīn, Ṭabaqāt al-Shāfi ʼIyah al-Kubrā (4/115)",
    narrator: "Abū Isḥāq al-Shīrāzī",
  },
  {
    text: "Ibn al-ʿAjamī Used to repeat his lesson 50 times.",
    reference:
      "adh-Dhahabī, Shams al-Dīn Muḥammad, Siyar Aʻlām an-Nubalāʼ (23/115)",
    narrator: "It has been narrated that",
  },
  {
    text: "“I read ar-Risāla 500 times and I would find a new benefit every time I read it.",
    reference: "an-Nawawī, Yaḥyá ibn Saraf, Tahdhīb al-Asmā (1/59)",
    narrator: "al-Muzanī",
  },
  {
    text: "“Abū Ishāq ash-Shirāzī Used to repeat a lesson 100 times and if he was eating resins, he would [only] revise a lesson 70 times.",
    reference:
      "al-Jawzī, Abū al-Faraj ʻAbd al-Raḥmān, al-Ḥath ‘alaḤifz al-‘Ilm (p.43)",
    narrator: "It has been narrated that",
  },
  {
    text: "“The jurist does not put something to memory until he repeats [the issue] 50 times.",
    reference:
      "al-Jawzī, Abū al-Faraj ʻAbd al-Raḥmān, al-Ḥath ‘alaḤifz al-‘Ilm (p.43)",
    narrator: "al-Ḥaṣan ibn Abī Bakr an-Naysābūr ī",
  },
  {
    text: "“al-Ḥaṣan narrated that a jurist repeated a lesson in his house so much so that an old woman in the house said to him: ‘Oh God, [even] I have memorised it.” So he asked her to repeat it and so she did. After a few days, he said to her: ‘Old woman, repeat that lesson’ “I have not memorised it.’ she replied, he said: ”I repeat the lesson lest i’m inflicted with what has afflicted you.",
    reference:
      "al-Jawzī, Abū al-Faraj ʻAbd al-Raḥmān, al-Ḥath ‘ala Ḥifẓ al-‘Ilm (p.44)",
    narrator: "Ibn al-Jawzī",
  },
  {
    text: "Make the most of your youth and your whole life by learning. Do not be deceived by procrastination and wishful thinking about the future. Every hour of your life that passes cannot be replaced. Abstain from whatever you can of distractions and obstacles which prevent you from striving your utmost to attain knowledge. Hence the righteous predecessors encouraged keeping away from one’s family and keeping distance from one’s homeland because when person is distracted he will not be able to focus and concentrate on knowledge and subtle issues.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 20",
    narrator: "A Piece of Wise Saying",
  },
  {
    text: "A brick fell from the house above, which was the house of Abu Hanifah, whilst i was in the house and injured my head. So he (Abu Hanifah) said to me, you have choice of either financial compensation or i narrate three hundred Hadith to you. I said, i choose the three hundred Hadith, so he narrated to me the Hadith.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 23",
    narrator: "Abdullah ibn Farrookh Al Farsee Al Qayrawani",
  },
  {
    text: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee came from Marwa to Baghdad, and studied jurisprudence and Hadith under Imam Ahmed, then he returned to Khurasaan and remained in the city of Naysaboor. Then he was told that Imam Ahmed retracted and withdrew some of the rulings on certain issues that he had studied from him. So he walked barefoot from Naysaboor to Baghdad to clarify those issues that he learnt from him.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 23",
    narrator: "It has been narrated that",
  },
  {
    text: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi travelled to the west on foot to seek knowledge from the scholars. But when he began his journey on the way he was stopped by the people. He escaped from there after they were impressed by his manners. This scholar is Baqiyyobnu Makhlad Al Undulusi. He travelled to Baghdad on his foot whilst he was only twenty years old. His only intention was to meet Imam Ahmed ibn Hanbal and to seek knowledge from him.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 24",
    narrator: "It has been narrated that",
  },
  {
    text: "“If the kings and the leaders of the world today know the happiness, the sweetness and the pleasure that we are in they will fight with swords to take away that sweetness and pleasure from us.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 38",
    narrator: "One of the Salaf Said",
  },
  {
    text: "Imam Muhammed ibn Ismaeel Al Bukhari travelled to all the teachers of Hadith in all the cities that was possible for him to travel to. And he narrated from more than thousand teachers. Firabree (one of the greatest students of Imam Bukhari) says: “Around seventy thousand people heard Sahih Bukhari from Imam Bukhari only in my presence.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 50",
    narrator: "It has been narrated that",
  },
  {
    text: "Imam Muhammed ibn Suhnoon Al Qayrawani, a great scholar in jurisprudence in the Maliki school of thought and a great scholar in Hadith, had a slave woman called ‘Ummu Mudam’. He was with her one day and became engaged in writing a book till night. She served him food but he said to her, ‘I am busy at this moment.’ When the night prolonged, she began to feed him by putting the morsels in his mouth and he remained busy until the call for the morning prayers. Then he said: ‘I got busy tonight Ummu Mudam, bring the food that you have prepared.’ So she said, ‘By Allah, I fed you.’ He said, ‘I am not aware of this.’",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 51",
    narrator: "It has been narrated that",
  },
  {
    text: "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani taught Hadith in many cities, and authored more than seventy-five books. Zakwani says, “Imam Tabrani was asked how he gathered a great number of Hadith, so he said: for thirty years I slept on a straw mat.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 53",
    narrator: "It has been narrated that",
  },
  {
    text: "I was in Asqalan, and listening to Hadith from Ibn Musahhih and other scholars. My living became tight on me, and many days passed by without eating anything. I started to write but was unable to due to hunger. So I went to a bakery, and sat next to it, smelling the bread being baked in the oven and that smell would give me strength to write, and I would write.'",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 87",
    narrator:
      "Hafiz Imam Jawwal Abu Ali Al Hassan ibn Ali Al Balkhi Al Wakhshee",
  },
  {
    text: "Imam Yahya ibn Mae’en's father Mae’en was a professional writer for Abdullah ibn Malik. When he died he left for his son Yahya one million and fifty thousand dirhams. Imam Yahya spent this entire wealth on seeking knowledge and Hadith to the extent that he never had money for his own shoes.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 109",
    narrator: "It has been narrated that",
  },
  {
    text: "My father left behind thirty thousand dirham. Fifteen thousand were spent on Arabic Grammar and Poetry and the remaining fifteen thousand were spent on Hadith and Jurisprudence.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 110",
    narrator: "Imam Muhammed ibn Hassan Al Shaybani",
  },
  {
    text: "I heard my grandfather say: I asked my father for permission to study under Qutaybah, so he said: First learn the Qur'aan and then I will give you permission. So I memorized the Qur'aan by heart. Then he said to me: Remain until you have led the people in prayer with it (i.e. for taraweeh prayer). So I did so, and after the 'eed prayer he gave me permission, so I left for Marw.",
    reference: "Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/722)",
    narrator: "Muhammad ibn al-Fadl",
  },
  {
    text: "It is fitting for a student that he begins with memorization of the Book of Allaah -since it is the greatest of the branches of knowledge and that which should be placed first and given precedence.",
    reference: "Al-Jaami' li-Akhlaaqir-Raawee wa Aadaabis-Saami'(1/106)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "The first thing he should begin with is memorization of the mighty Qur'aan, which is the most important of the branches of knowledge. And the Companions and those that follow them did not use to teach hadeeth or fiqh except to one who had memorized the Qur'aan. When he has memorized it, let him beware of preoccupying himself from it with hadeeth, fiqh or other things, to the extent that it leads him to forget anything of the Qur'aan, or makes that likely.",
    reference: "From the introduction to Al-Majmoo' Sharhul-Muhadhhab (1/38)",
    narrator: "Al-Haafidh an-Nawawee",
  },
  {
    text: "We read al-Muwattaa to Maalik (d.179H) in forty days, so he said: A book that took me forty years to compile, you take from me in forty days! How little you understand of it.'",
    reference: "Related by Ibn 'Abdul-Barr in at-Tamheed (1/77)",
    narrator: "Umar ibn 'Abdul-Waahid, a companion of al-Awzaa'ee said",
  },
  {
    text: "It is fitting that he takes care in acquiring knowledge and that he should not take too much in one go. Rather, he should take a little at a time, such that he can bear it, memorize it, and be able to understand it. Because Allaah says: And those who disbelieve say: Why is the Qur'aan not sent down to him all at once? Thus (is it sent down in parts) that We may strengthen your heart thereby. And We have revealed it to you gradually, in stages. (Soorah al-Furqaan 25:32)",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/101)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "And know that the heart is an organ from the organs. It is able to bear some things and unable to bear others, just like the rest of the body. Thus, some people are able to carry one-hundred pounds, whereas others are unable to carry even twenty. Some people are able to walk a number of miles in a day without tiring, whereas others are unable to even walk a mile a day before they become tired... So let each person limit himself to what he is able without expending all his energies, because that will better aid him in learning with a good mind, from a firm and proficient teacher.",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/107)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "From where did you acquire this knowledge? So he said: Allaah's Messenger (sallallaahu `alayhi wa sallam) said: Zam-zam water is that for which it is drunk. (Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/721)). So when I drank zam-zam water, I supplicated to Allaah for beneficial knowledge.'",
    reference: "Hasan: MaqaasidulHasanah (no.928) of as-Sakhaawee",
    narrator:
      "Abu Bakr Muhammad ibn Ja'far said: 'I heard Ibn Khuzaymah being asked: ",
  },
  {
    text: "One of the students of knowledge, in the science of hadeeth, from the Salaf (i.e. Pious Predecessors) had a very strong ambition for seeking knowledge, but he aspired to gather all of the knowledge at one time by sitting in all the circles of knowledge. Then after some time he began to realize that he was not benefiting from the knowledge that he was trying to acquire, and he said to himself: 'This path of seeking knowledge is really not for me!' Consequently, he abandoned the circles of knowledge altogether considering himself to be incompetent and deficient in understanding the intricate matters of knowledge, or he thought that it was not meant for him to be a student of knowledge. So one day he came across a boulder which appeared to be eroding due to the trickles of water that were falling on top of it. So he pondered over this for a moment and said: 'This water along with its softness is eroding this boulder along with its coarseness!! My heart and intellect are not harder than this boulder nor is water softer than knowledge!!' So he decided to return to the path of seeking knowledge and was patient until he eventually became one of the most prominent scholars of his time. This will show you that in order to be a true student of knowledge you have to possess strong determination and ambition that will safeguard you from becoming discouraged and dispirited.",
    reference: "The Methodology of Seeking Knowledge Pg 7 & 8",
    narrator: "Khateeb Al Baghdaadee",
  },
  {
    text: "How does one have sincerity while seeking knowledge?' He replied: 'Having sincerity while seeking knowledge is by making your sole intention to remove ignorance from yourself, because the one who is knowledgeable is not equal to the one who is ignorant.",
    reference: "The Methodology of Seeking Knowledge pg 11",
    narrator: "Imam Ahmad was asked",
  },
  {
    text: "Whoever seeks to acquire knowledge all at once, then it will go away from him all at once. Instead knowledge is sought by the passing away of many days and nights.' (i.e. in due time).",
    reference: "The Methodology of Seeking Knowledge pg 12 & 13",
    narrator: "Imaam Az Zuhri",
  },
  {
    text: "If you see the books of a student of knowledge neatly placed in order on the book shelf then know that he is a student that doesn’t read, rather he has abandoned his books.",
    reference: "The Methodology of Seeking Knowledge pg 17",
    narrator: "Some of the Salaf used to say",
  },
  {
    text: "If you give knowledge all of you it might give you some of it.",
    reference: "The Methodology of Seeking Knowledge pg 19",
    narrator: "Some of the Salaf used to say",
  },
  {
    text: "Imaam Ahmad and Abu Zur’ah, Ubaydullah Ibn Abdul Kareem (Rahimahumullah) who was a well-known Imaam, that they prayed Salat ul Isha (i.e. Night Prayer) together and afterwards they went into Imaam Ahmad’s house, and suddenly before they knew it, the Adhan (i.e. Call to Prayer) for Salat ul Fajr (i.e. Morning Prayer) was being called, and this is because they spent the whole night reviewing matters of knowledge!!",
    reference: "The Methodology of Seeking Knowledge Pg 28",
    narrator: "It has been narrated that",
  },
  {
    text: "Wakee related to us from Abee Keeraan who said: I heard Shabee saying: 'If you hear anything, write it down even on a wall.'",
    reference:
      "Kitaabul Ilm of Abu Khaythama with the checking of Imaam Al Albaanee, narration number:146. page:34",
    narrator: "Abu Khaythama narrated to us, (saying)",
  },
  {
    text: "Wakee related to us, (saying): Ubay related to us from Abdullaah Ibn Hanash who said: 'Indeed, I have seen them (i.e. the people) writing on their palms with reeds in Baraa’ah’s presence.'",
    reference:
      "Kitaabul Ilm of Abu Khaythama with the checking of Imaam Al Albaanee, narration number: 147. page:34",
    narrator: "Abu Khaythama narrated to us, (saying)",
  },
  {
    text: "Oh my sons, confine [preserve] knowledge through the book [i.e. in writing it down].",
    reference: "Taq'īdul ilm, pg 96",
    narrator:
      "Anas ibn Malik al-Ansary would encourage his children upon writing knowledge so he would say to them",
  },
  {
    text: "We would not consider the knowledge of the one who does not write down his knowledge, as knowledge.",
    reference: "Taq'īdul ilm, pg 96",
    narrator: "It is narrated that Anas ibn Malik al-Ansary would say",
  },
  {
    text: "Saeed ibn Jubair narrates that he would write whilst attending with Ibn Abbas, to the extent that his papers would become full and he would later continue upon his palms.",
    reference: "Taq'īdul ilm, pg 102 & 103",
    narrator: "Saeed ibn Jubair",
  },
  {
    text: "Intend Allaah through your (search for) knowledge, for indeed I never sat in a gathering of people in which I made it my intention to humble myself except that I didn’t leave from it until I had surpassed them. And I never sat in a gathering of people in which I made it my intention to surpass them, except that I didn’t leave from it until I was disgraced. Knowledge is one of the many acts of worship and one of the many ways of gaining nearness to Allaah. So if one purifies his intention while seeking it, his deed will be accepted and purified. And its blessing will become complete. However, if he intends other than the sake of Allaah when seeking knowledge, his deed becomes nullified and wasted and his transaction is lost. Perhaps he may even miss out on these (worldly) objectives and never achieve any of them. So in this case, he will have failed in his objective and at the same time wasted his efforts.",
    reference: "Tadhkirat-us-Saami’ wal-Mutakallim (pg. 69-70)",
    narrator: "Abu Yoosuf",
  },
  {
    text: "Knowledge is the servant of action and Action is the main objective of knowledge - so if it were not for action, knowledge would not be sought, and if it were not for knowledge, action would not be sought. And if I were to not follow the truth out of ignorance of it, that would be more beloved to me than if I were to not follow it out of intentionally abstaining from it.",
    reference: "Iqtidaa-ul-‘Ilm al-‘Amal, pg 7",
    narrator: "Some of the wise people",
  },
  {
    text: "Knowledge is one of the pleasures of this worldly life. But when one acts on it, it then becomes for the Hereafter.",
    reference: "Iqtidaa-ul-‘Ilm al-‘Amal, Athar: 23",
    narrator: "Sahl bin 'Abdillaah",
  },
  {
    text: "Knowledge calls upon action. So if it responds, (they join) and if not, it departs.",
    reference: "Iqtidaa-ul-‘Ilm al-‘Amal, Athar: 40",
    narrator: "'Alee bin Abee Taalib",
  },
  {
    text: "Seize the available opportunity, and do not anticipate tomorrow. For who can guarantee that tomorrow will occur?",
    reference: "Iqtidaa-ul-‘Ilm al-‘Amal, Athar: 188",
    narrator: "'Abdullaah bin Al-Mu'taz",
  },
];

const SalafQuotes = () => {
  return (
    <>
      <GreenBarWithProgress>
        <Typography variant="h5" align="center" gutterBottom>
          Narrations
        </Typography>
      </GreenBarWithProgress>
      <Box sx={{ p: "1rem", mt: "1rem" }}>
        {quotes.map((quote, index) => (
          <Box key={index} sx={{ my: "2rem" }}>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              ● {quote.narrator} :
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginBottom: "0.5rem", fontStyle: "italic" }}
            >
              {quote.text}
            </Typography>
            <Typography variant="caption" sx={{ color: "gray" }}>
              {quote.reference}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default SalafQuotes;
