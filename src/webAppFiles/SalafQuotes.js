import React from "react";
import { Box, Typography } from "@mui/material";
import GreenBar from "./GreenBar";

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
    text: "Used to study all the time, even on the road. He would often fall into a hole or be trampled by an animal!",
    reference: "Mashūq ill al-Qirāta Talāb al-Ilm (p. 62).",
    narrator:
      "The great scholar of Arabic grammar, Muḥammad ibn Aḥmad Abū Bakr al-Khayyat al-Baghdādī",
  },
  {
    text: "“I try my very best to limit the time I spend eating, to such an extent that I choose dry biscuit and a sip of water over eating bread, because of the difference in chewing [time] between the two, so as to save my time for reading or writing down some useful ideas. The best thing for the wise man to save is time.”",
    reference: "Ibn Abī Yaʿlā, Tabaqāt al-Hanābilah (1/145).",
    narrator: "Ibn ʿAqīl",
  },
  {
    text: "used to drink bread soup instead of eating bread. When that was mentioned to him he replied, “The difference between chewing bread and drinking bread soup is [enough time for] the reciting of 50 verses.”",
    reference: "Al-Majālis wa al-Jawāhir al-Ilm (1/346).",
    narrator: "Dāwūd al-Tāʿī",
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
    text: "“The wider sleeve is for books and the other is not in need of it.’",
    reference: "Al-Dhahābī, Siyār Āʿlām al-Nubalā (13/217).",
    narrator: "Abū Dāwūd al-Sījistānī",
  },
  {
    text: "“I am not allowed to waste an hour of my life. Even when I am not delivering lessons or reading, my mind would still be occupied with some matters whilst I’m lying down, and I will not get up until I find something useful to write. I still find zeal in my search for knowledge whilst [I am] in my eighties more than when I were in my twenties.”",
    reference: "Ibn al-Jawzī, al-Muntadham (9/214).",
    narrator: "Ibn ʿAqīl",
  },
  {
    text: "“He never wasted it without doing something beneficial. He wrote books, taught lessons or read.",
    reference: "Al-Dhahābī, Siyār Āʿlām al-Nubalā (17/646).",
    narrator: "Sulaym ibn Ayyūb",
  },
  {
    text: "“Used to repeat every ḥadīth 500 times. A man once said to him; ‘I [continuously] forget the narrations that I have memorised!’ ‘Upon you is to revise every single narration 500 times.’ said Abū Masʿūd. “Who is able to do that!’ [complained] the man. Abū Masʿūd replied; “And that is why you people [are not able] to memorise”.",
    reference: "adh-Dhahabī, Shams al-Dīn Muḥammad, Tahdhīb al-Tahdhīb (1/58).",
    narrator: "Abū Masʿūd Aḥmad ibn al-Furāt al-Rāzī",
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
    text: "“Used to repeat his lesson 50 times.”",
    reference:
      "adh-Dhahabī, Shams al-Dīn Muḥammad, Siyar Aʻlām an-Nubalāʼ (23/115)",
    narrator: "Ibn al-ʿAjamī",
  },
  {
    text: "“I read ar-Risāla 500 times and I would find a new benefit every time I read it.",
    reference: "an-Nawawī, Yaḥyá ibn Saraf, Tahdhīb al-Asmā (1/59)",
    narrator: "al-Muzanī",
  },
  {
    text: "“Used to repeat a lesson 100 times and f he was eating resins, he would [only] revise a lesson 70 times.",
    reference:
      "al-Jawzī, Abū al-Faraj ʻAbd al-Raḥmān, al-Ḥath ‘alaḤifz al-‘Ilm (p.43)",
    narrator: "Abū Ishāq ash-Shirāzī",
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
    text: "“During his childhood, might well have wanted to leave before Fajr to go to the circles of the scholars, but his mother would hold on to his clothing, as a mercy to him, until the adhaan would be given, or the morning would come.",
    reference: "",
    narrator: "Abū 'Abdullāh, Aḥmad ibn Ḥanbal",
  },
  {
    text: "“And this is something that I do not know of anyone in our time who would be able to do it!",
    reference: "adh-Dhahabī said in Tāreekh al-Islām",
    narrator: "Al-Khaṭeeb",
  },
  {
    text: "“In the very beginning, would study the whole night, but his mother was merciful to him, and she stopped him from reading at night. He used to take the lamp and put it under the jafanah (a kind of large vessel), and he would pretend to be asleep. When his mother would fall asleep, he would take out the lamp and start to study.",
    reference:
      "ta'dheemul ilm, (Some Narrations found under the discussion of the) third principle.",
    narrator: "Abū Muḥammad Ibn at-Tabbān",
  },
  {
    text: "“Knowledge at a young age is like engraving on stone.”",
    reference: "ta'dheemul ilm, seventh principle.",
    narrator: "Al-Ḥasan al-Baṣrī (may Allāh have mercy on him)",
  },
  {
    text: "“I kept on coming back to 'Amr ibn Deenār five hundred times, and I didn't hear anything more than one hundred ḥadeeth from him; in every five sittings, one ḥadeeth.”",
    reference: "ta'dheemul ilm, seventh principle.",
    narrator: "Shu'bah ibn al-Ḥajjāj",
  },
  {
    text: "“Every day, learn three matters, and do not add anything to that.”",
    reference: "ta'dheemul ilm, eighth principle.",
    narrator: "Ḥammād ibn Abī Sulaymān",
  },
  {
    text: "“Keep yourself patient [by being] along with those who call upon their Lord in the morning and evening, seeking His face.” [al-Kahf 28]. “It is the gatherings of knowledge, and nobody can achieve knowledge without patience.”",
    reference: "ta'dheemul ilm, eighth principle.",
    narrator: "Yaḥyā ibn Abī Katheer",
  },
  {
    text: "“Knowledge is not gained by resting the body.”",
    reference: "ta'dheemul ilm, eighth principle.",
    narrator: "Yaḥyā ibn Abī Katheer",
  },
  {
    text: "“Whoever cannot bear the pain of learning, cannot taste the pleasure of knowledge.”",
    reference: "ta'dheemul ilm, eighth principle.",
    narrator: "One of the pious predecessors",
  },
  {
    text: "“Whoever does not face difficulties will not achieve their desires.”",
    reference: "ta'dheemul ilm, nineth principle.",
    narrator: "It used to be said",
  },
  {
    text: "“Through etiquettes knowledge is understood.”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Yūsuf ibn al-Ḥusayn",
  },
  {
    text: "“A man asked al-Buqā'ī if the man could read to him, so al-Buqā'ī permitted him to do so. The man sat cross-legged, so al-Buqā'ī refused to let him read and said to him, 'You are more in need of etiquettes than the knowledge which you came to seek.'”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Al-Buqā'ī",
  },
  {
    text: "“They used to learn the way of behaving, just as they used to learn knowledge.”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Ibn Seereen (may Allāh have mercy on him)",
  },
  {
    text: "“O nephew, learn etiquette before you learn knowledge.”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Mālik ibn Anas",
  },
  {
    text: "“We are in greater need of a great deal of manners than a great deal of knowledge.”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Makhlad ibn al-Ḥusayn to Ibn al-Mubārak",
  },
  {
    text: "“My mother used to put on my turban and say to me, 'Go to Rabee'ah (i.e., Ibn 'Abdur-Raḥman, the great scholar of fiqh among the people of Madinah at his time) and learn his etiquettes before you learn his knowledge.'”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "Mālik ibn Anas",
  },
  {
    text: "“What is this? You are more in need of a little manners than you are in need of a lot of knowledge.”",
    reference: "ta'dheemul ilm, tenth principle.",
    narrator: "al-Layth ibn Sa'd (may Allāh have mercy on him)",
  },
  {
    text: "“The influence of a companion over his companion is not by statements and actions alone; rather, even by looking at him.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "ar-Rāghib al-Aṣfahānī",
  },
  {
    text: "“The luminary scholars do not cease to urge people to memorise, and to command people to do so.”",
    reference: "Ṣayd-ul-Khāṭir.",
    narrator: "Ibn-ul-Jawzī (may Allāh have mercy on him)",
  },
  {
    text: "“I found the most beneficial of knowledge to be that which my heart memorised and my tongue oft-repeated.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "‘Ubaydullāh ibn al-Ḥasan",
  },
  {
    text: "“We memorised a little and read a lot; yet we benefited from what we memorised more than we benefited from what we read.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "Ibn 'Uthaymeen (may Allāh have mercy on him)",
  },
  {
    text: "“Ibn al-Furāt (may Allāh have mercy on him) used to not let a day go by without memorising something in the morning, even if a little. (Whoever understands this, his knowledge will not stop increasing, and will not cease doing so, until death).”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "Ibn al-Furāt (may Allāh have mercy on him)",
  },
  {
    text: "“Ibn Mālik (may Allāh have mercy on him), the author of al-Alfiyyah on the topic of naḥw; for he memorised on the day that he died five pieces of poetry.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "Ibn Mālik (may Allāh have mercy on him)",
  },
  {
    text: "“The thing which really causes knowledge to go is forgetfulness and abandoning revision.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "az-Zuhrī (may Allāh have mercy on him)",
  },
  {
    text: "“This knowledge is actually a treasury; it is opened up by asking questions.”",
    reference: "ta'dheemul ilm, twelfth principle.",
    narrator: "az-Zuhrī (may Allāh have mercy on him)",
  },
  {
    text: "“Hire me [transport], I will leave this city. This is a city in which knowledge will die.”",
    reference: "ta'dheemul ilm, thirteenth principle.",
    narrator: "Sufyān ath-Thawrī (may Allāh have mercy on him)",
  },
  {
    text: "“I saw Mālik ibn Anas more than once; he was given reverence and admiration by his companions. If a person raised his voice, they would call to him [to lower his voice].”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "Yaḥyā al-Mawṣilī",
  },
  {
    text: "“Whoever wants to look at the gatherings of the prophets, let him look at the gatherings of the scholars. A man comes and says, 'O so-and-so, what do you say about a man who took an oath against his wife with such-and-such words?' He replied, 'His wife is divorced.' Another comes and says, 'What do you say about a man who took an oath against his wife with such-and-such words?' He replies, 'His oath does not count with these words.' This is for none other than a prophet or a scholar, so recognise this as being for them.”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "Sahl ibn 'Abdullāh",
  },
  {
    text: "“The gatherings of the scholars foster khushoo, tranquility, and calmness.”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "Mālik ibn Anas",
  },
  {
    text: "“The gatherings of the scholars foster khushoo, tranquility, and calmness.”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "Mālik (may Allāh have mercy on him)",
  },
  {
    text: "“When he wanted to narrate a ḥadeeth, would make wuḍū, sit on the front part of his mat, comb his beard, and make sure that he was sitting calmly and with dignity, then he would narrate.”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "Mālik (may Allāh have mercy on him)",
  },
  {
    text: "“Did not allow anyone to talk in his gathering, nor for a pen to scrape, and nobody would smile.(When) Wakee' ibn al-Jarrāḥ used to be in his gathering, as though they (ie. The students) were in prayer.”",
    reference: "ta'dheemul ilm, fourteenth principle.",
    narrator: "'Abdur-Raḥmān ibn Mahdī",
  },
  {
    text: "“One day, Is-ḥāq ibn Rāhawayh threw down a book with his hand and was seen by Abū 'Abdullāh Aḥmad ibn Ḥanbal who became angry and said, 'Is this what is done with the speech of the righteous!?'”",
    reference: "ta'dheemul ilm, sixteenth principle.",
    narrator: "Aḥmad ibn Ḥanbal",
  },
  {
    text: "“If a person were to speak in his gathering, or a pen were to scratch, he would speak out, put on his sandals, and would enter [his home].”",
    reference: "ta'dheemul ilm, sixteenth principle.",
    narrator: "'Abdur-Raḥmān ibn Mahdī",
  },
  {
    text: "“If he disapproved of something from those sitting with him, he would put on his sandals and would enter [his home].”",
    reference: "ta'dheemul ilm, sixteenth principle.",
    narrator: "Wakee'",
  },
  {
    text: "“This was witnessed many times from the shaykh of our shuyookh, Muḥammad ibn Ibrāheem Aal-ash-Shaykh; how many times he was seen leaving when he heard a student ranting about a statement - he would take his sandals and leave.”",
    reference: "ta'dheemul ilm, sixteenth principle.",
    narrator: "Muḥammad ibn Ibrāheem Aal-ash-Shaykh",
  },
  {
    text: "“A young man attended the gathering of Sufyān ath-Thawrī and he began to preside over the assembly, speaking and being conceitful in his knowledge; Sufyān became angry and he said, 'The earlier generations were not like this; the earlier generations were not like this - one of them would not claim to be an imām, nor would he sit at the front, until he had studied this knowledge for thirty years, and you show arrogance towards those who are older than you. Stand and leave me, and I do not want to see you approach my gathering!'”",
    reference: "ta'dheemul ilm, seventeenth principle.",
    narrator: "Sufyān ath-Thawrī (may Allāh have mercy on him)",
  },
  {
    text: "“If you see a young person speaking in front of the scholars, even if he has reached a significant amount of knowledge, despair of good from him; for he has little shame.”",
    reference: "ta'dheemul ilm, seventeenth principle.",
    narrator: "Sufyān ath-Thawrī (may Allāh have mercy on him)",
  },
  {
    text: "“A man asked Ibn-ul-Mubārak about a ḥadeeth while he was walking. He said, 'This is not from respecting knowledge.'”",
    reference: "ta'dheemul ilm, eighteenth principle.",
    narrator: "Ibn-ul-Mubārak",
  },
  {
    text: "“‘Abdur-Raḥmān ibn Abī Laylā also used to dislike being asked while he was walking.”",
    reference: "ta'dheemul ilm, eighteenth principle.",
    narrator: "'Abdur-Raḥmān ibn Abī Laylā",
  },
  {
    text: "“A man asked Zayd ibn Aslam (may Allāh have mercy on him), about something, and behaved in a humorous manner towards him. Zayd said, 'Go and learn how to ask, then come and ask.'”",
    reference: "ta'dheemul ilm, eighteenth principle.",
    narrator: "Zayd ibn Aslam (may Allāh have mercy on him)",
  },
  {
    text: "Whoever does not allow the pleasure of gaining knowledge and the desire for it, to overcome the pleasure of the body and the desires of the soul will never reach the level of knowledge.",
    reference: "Miftāḥ Dār as-Sa'ādah.",
    narrator: "Ibn-ul-Qayyim (may Allāh, the Exalted, have mercy on him)",
  },
  {
    text: "The pleasure of knowledge is only gained by three things: Firstly: Giving your best and utmost effort. Secondly: Truthfulness in seeking it. Thirdly: The correctness of intention and sincerity.",
    reference: "Miftāḥ Dār as-Sa'ādah.",
    narrator: "Ibn-ul-Qayyim (may Allāh, the Exalted, have mercy on him)",
  },
  {
    text: "My pleasure is nothing but narrating a musnad; written with the most eloquent of words; and a gathering in which tranquillity descends; and revising and accompanying those who memorise.",
    reference: "ta'dheemul ilm, nineteenth principle.",
    narrator: "One of them (ie. Salaf) said",
  },
  {
    text: "Abū Ja'far an-Nasafī went to sleep in a state of anxiety, due to mental pressure, his terrible circumstances, and his large family. Then, a subsidiary matter from his madh-hab occurred to him (and he was a Ḥanafī, may Allāh have mercy on him), and he was amazed by it, so he stood, dancing in his home, saying, 'Where are the kings and the children of the kings!? - Where are the kings and the children of the kings!?'",
    reference: "Unnamed Salaf",
  },
  {
    text: "If my mind embarks on the sea of thought; upon a pearl from the mysteries that I seek answers to; I look down upon the kings of the earth getting what they have attained; when I have attained my desire through books, not through armies.",
    reference: "Unnamed Salaf",
  },
  {
    text: "It was said to Abū Ja'far al-Manṣoor, the famous Abbasid caliph whose kingdom stretched from the East to the West, is there something from the pleasures of this world that you have not achieved? He said, while sitting upon his throne and his seat of his kingdom, 'There remains the attribute of sitting upon a seat, surrounded by the people of ḥadeeth (i.e., the students of knowledge), so the one seeking to write says, 'Who did you mention, may Allāh have mercy on you?' He then replies, 'So-and-so narrated to us, saying, so-and-so narrated to us, mentioning the narrations with their chains.'",
    reference: "Unnamed",
  },
  {
    text: "A person will not find the pleasure of knowledge until he is hungry, but forgets his hunger.",
    reference: "Unnamed",
    narrator: "an-Naḍḥar ibn Shumayl",
  },
  {
    text: "An inkwell that stays with me in my day; is more beloved to me than the affability of a friend; and the end of the paper in my home; is more beloved to me than a measure of flour; and the blow to my cheek from a scholar; is more pleasurable to me than the drinking of nectar.",
    reference: "Unnamed",
    narrator: "Muḥammad ibn Hāroon ad-Dimashqī",
  },
  {
    text: "As for those passionate about knowledge, it is greater than any infatuation or passion that any passionate person has for anything.",
    reference: "Rawḍah al-Muḥibbeen.",
    narrator: "Ibn-ul-Qayyim",
  },
  {
    text: "It is befitting for a person to know the honour of his lifespan and the value of his time, so he does not waste even a moment of it without doing an act of worship, and he puts forward the best of speech and action.",
    reference: "Ṣayd al-Khāṭir.",
    narrator: "Ibn-ul-Jawzī",
  },
  {
    text: "I have not wasted even an hour of my time with amusement or play.",
    reference: "Unnamed",
    narrator: "Muḥammad ibn 'Abdul-Bāqī al-Bazzār",
  },
  {
    text: "It is not allowed for me to waste an hour of my life.",
    reference: "Unnamed",
    narrator: "Abūl-Wafā ibn 'Aqeel",
  },
  {
    text: "Aḥmad ibn Sulaymān al-Balqāsī, who died at the age of twenty-eight, used to have the different recitations of the Qur'an read to him while he was eating, out of fear of wasting time with something else. His companions used to read to him while he was taking his food and drink.",
    reference: "Unnamed",
    narrator: "Aḥmad ibn Sulaymān al-Balqāsī",
  },
  {
    text: "The elder Ibn Taymiyyah (may Allāh have mercy on him) used to go to the area of land for relieving himself, he would say to those around him: 'Read from this book and raise your voice.'",
    reference: "Unnamed",
    narrator: "Ibn Taymiyyah",
  },
  {
    text: "an-Nawawī (may Allāh have mercy on him) used to read twelve lessons to his teachers every day.",
    reference: "Unnamed",
    narrator: "an-Nawawī",
  },
  {
    text: "ash-Shawkānī (may Allāh have mercy on him), the author of Nayl al-Awṭār used to take thirteen lessons over a single day and night, among which were lessons that he took from his teachers and lessons that his students took from him.",
    reference: "Unnamed",
    narrator: "ash-Shawkānī",
  },
  {
    text: "Māḥmood al-Aloosī, author of the book of tafseer, exceeded them all, since he used to study twenty-four lessons in one day, and when he became busy with tafseer and giving fatāwā, he reduced it to thirteen.",
    reference: "Unnamed",
    narrator: "Māḥmood al-Aloosī",
  },
  {
    text: "I also found in the biography of Muḥammad ibn Abū Bakr ibn Jamā'ah that his lessons across a single day and night reached around fifty lessons.",
    reference: "Unnamed",
    narrator: "Muḥammad ibn Abū Bakr ibn Jamā'ah",
  },
  {
    text: "Ibn at-Tabbān studied al-Mudawwanah around one thousand times, and it might be found in some of the books of 'Abbās ibn al-Fārisī, in his own writing, 'I studied this a thousand times.'",
    reference: "Unnamed",
    narrator: "Ibn at-Tabbān",
  },
  {
    text: "Ghālib ibn 'Abdur-Raḥmān, better known as Ibn 'Aṭiyyah, father of the famous scholar of tafseer, studied Ṣaḥeeḥ al-Bukhārī seven hundred times.",
    reference: "Unnamed",
    narrator: "Ghālib ibn 'Abdur-Raḥmān",
  },
  {
    text: "Aḥmad ibn 'Abd-ud-Dā'im al-Maqdisī, one of the scholars of knowledge from the Ḥanbalīs, wrote two thousand volumes with his own hand, and similarly Ibn-ul-Jawzī.",
    reference: "Unnamed",
    narrator: "Aḥmad ibn 'Abd-ud-Dā'im al-Maqdisī",
  },
  {
    text: "Ibn-ul-Jawzī (may Allāh have mercy on him) read, while still a student, twenty thousand volumes.",
    reference: "Unnamed",
    narrator: "Ibn-ul-Jawzī",
  },
  {
    text: "Abū Sa'd as-Sam'ānī ,(his number of teachers) reached seven thousand. Ibn an-Najjār said in Dhayl Tāreekh Baghdād, 'This is something that nobody else reached.'",
    reference: "Dhayl Tāreekh Baghdād.",
    narrator: "Abū Sa'd as-Sam'ānī",
  },
  {
    text: "So guard your time, O student, for as the noble minister Ibn Hubayrah said, advising you with eloquence: 'Time is the most precious of that which you guard; and I see it as the easiest thing you can lose.'",
    reference: "Unnamed",
    narrator: "Ibn Hubayrah",
  },
  {
    text: "Make the most of your youth and your whole life by learning. Do not be deceived by procrastination and wishful thinking about the future. Every hour of your life that passes cannot be replaced. Abstain from whatever you can of distractions and obstacles which prevent you from striving your utmost to attain knowledge. Hence the righteous predecessors encouraged keeping away from one’s family and keeping distance from one’s homeland because when person is distracted he will not be able to focus and concentrate on knowledge and subtle issues.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 20",
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
    narrator: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee",
  },
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
    text: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee came from Marwa to Baghdad, and studied jurisprudence and Hadith under Imam Ahmed, then he returned to Khurasaan and remained in the city of Naysaboor. Then he was told that Imam Ahmed retracted and withdrew some of the rulings on certain issues that he had studied from him. So he walked barefoot from Naysaboor to Baghdad to clarify those issues that he learnt from him.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 23",
    narrator: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee",
  },
  {
    text: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi travelled to the west on foot to seek knowledge from the scholars. But when he began his journey on the way he was stopped by the people. He escaped from there after they were impressed by his manners. This scholar is Baqiyyobnu Makhlad Al Undulusi. He travelled to Baghdad on his foot whilst he was only twenty years old. His only intention was to meet Imam Ahmed ibn Hanbal and to seek knowledge from him.",
    reference: "Siyar Aalaam Al Nubala",
    narrator: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi",
  },
  {
    text: "“If the kings and the leaders of the world today know the happiness, the sweetness and the pleasure that we are in they will fight with swords to take away that sweetness and pleasure from us.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 38",
    narrator: "Unknown",
  },
  {
    text: "Imam Muhammed ibn Ismaeel Al Bukhari travelled to all the teachers of Hadith in all the cities that was possible for him to travel to. And he narrated from more than thousand teachers. Firabree (one of the greatest students of Imam Bukhari) says: “Around seventy thousand people heard Sahih Bukhari from Imam Bukhari only in my presence.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 50",
    narrator: "Imam Muhammed ibn Ismaeel Al Bukhari",
  },
  {
    text: "Imam Muhammed ibn Suhnoon Al Qayrawani, a great scholar in jurisprudence in the Maliki school of thought and a great scholar in Hadith, had a slave woman called ‘Ummu Mudam’. He was with her one day and became engaged in writing a book till night. She served him food but he said to her, ‘I am busy at this moment.’ When the night prolonged, she began to feed him by putting the morsels in his mouth and he remained busy until the call for the morning prayers. Then he said: ‘I got busy tonight Ummu Mudam, bring the food that you have prepared.’ So she said, ‘By Allah, I fed you.’ He said, ‘I am not aware of this.’",
    reference: "Tarteeb al Madarik",
    narrator: "Imam Muhammed ibn Suhnoon Al Qayrawani",
  },
  {
    text: "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani taught Hadith in many cities, and authored more than seventy-five books. Zakwani says, “Imam Tabrani was asked how he gathered a great number of Hadith, so he said: for thirty years I slept on a straw mat.”",
    reference: "Tazkiratul Huffaz",
    narrator:
      "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani",
  },
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
    text: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee came from Marwa to Baghdad, and studied jurisprudence and Hadith under Imam Ahmed, then he returned to Khurasaan and remained in the city of Naysaboor. Then he was told that Imam Ahmed retracted and withdrew some of the rulings on certain issues that he had studied from him. So he walked barefoot from Naysaboor to Baghdad to clarify those issues that he learnt from him.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 23",
    narrator: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee",
  },
  {
    text: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi travelled to the west on foot to seek knowledge from the scholars. But when he began his journey on the way he was stopped by the people. He escaped from there after they were impressed by his manners. This scholar is Baqiyyobnu Makhlad Al Undulusi. He travelled to Baghdad on his foot whilst he was only twenty years old. His only intention was to meet Imam Ahmed ibn Hanbal and to seek knowledge from him.",
    reference: "Siyar Aalaam Al Nubala",
    narrator: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi",
  },
  {
    text: "“If the kings and the leaders of the world today know the happiness, the sweetness and the pleasure that we are in they will fight with swords to take away that sweetness and pleasure from us.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 38",
    narrator: "Unknown",
  },
  {
    text: "Imam Muhammed ibn Ismaeel Al Bukhari travelled to all the teachers of Hadith in all the cities that was possible for him to travel to. And he narrated from more than thousand teachers. Firabree (one of the greatest students of Imam Bukhari) says: “Around seventy thousand people heard Sahih Bukhari from Imam Bukhari only in my presence.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 50",
    narrator: "Imam Muhammed ibn Ismaeel Al Bukhari",
  },
  {
    text: "Imam Muhammed ibn Suhnoon Al Qayrawani, a great scholar in jurisprudence in the Maliki school of thought and a great scholar in Hadith, had a slave woman called ‘Ummu Mudam’. He was with her one day and became engaged in writing a book till night. She served him food but he said to her, ‘I am busy at this moment.’ When the night prolonged, she began to feed him by putting the morsels in his mouth and he remained busy until the call for the morning prayers. Then he said: ‘I got busy tonight Ummu Mudam, bring the food that you have prepared.’ So she said, ‘By Allah, I fed you.’ He said, ‘I am not aware of this.’",
    reference: "Tarteeb al Madarik",
    narrator: "Imam Muhammed ibn Suhnoon Al Qayrawani",
  },
  {
    text: "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani taught Hadith in many cities, and authored more than seventy-five books. Zakwani says, “Imam Tabrani was asked how he gathered a great number of Hadith, so he said: for thirty years I slept on a straw mat.”",
    reference: "Tazkiratul Huffaz",
    narrator:
      "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani",
  },
  {
    text: "Hafiz Imam Jawwal Abu Ali Al Hassan ibn Ali Al Balkhi Al Wakhshee said: 'I was in Asqalan, and listening to Hadith from Ibn Musahhih and other scholars. My living became tight on me, and many days passed by without eating anything. I started to write but was unable to due to hunger. So I went to a bakery, and sat next to it, smelling the bread being baked in the oven and that smell would give me strength to write, and I would write.'",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 87",
    narrator:
      "Hafiz Imam Jawwal Abu Ali Al Hassan ibn Ali Al Balkhi Al Wakhshee",
  },
  {
    text: "Imam Yahya ibn Mae’en's father Mae’en was a professional writer for Abdullah ibn Malik. When he died he left for his son Yahya one million and fifty thousand dirhams. Imam Yahya spent this entire wealth on seeking knowledge and Hadith to the extent that he never had money for his own shoes.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 109",
    narrator: "Imam Yahya ibn Mae’en",
  },
  {
    text: "Imam Muhammed ibn Hassan Al Shaybani said: 'My father left behind thirty thousand dirham. Fifteen thousand were spent on Arabic Grammar and Poetry and the remaining fifteen thousand were spent on Hadith and Jurisprudence.'",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 110",
    narrator: "Imam Muhammed ibn Hassan Al Shaybani",
  },
  {
    text: "Muhammad ibn al-Fadl said: 'I heard my grandfather say: I asked my father for permission to study under Qutaybah, so he said: First learn the Qur'aan and then I will give you permission. So I memorized the Qur'aan by heart. Then he said to me: Remain until you have led the people in prayer with it (i.e. for taraweeh prayer). So I did so, and after the 'eed prayer he gave me permission, so I left for Marw.'",
    reference: "Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/722)",
    narrator: "Muhammad ibn al-Fadl",
  },
  {
    text: "Al-Khateeb al-Baghdaadee (d. 463H) said: 'It is fitting for a student that he begins with memorization of the Book of Allaah -since it is the greatest of the branches of knowledge and that which should be placed first and given precedence.'",
    reference: "Al-Jaami' li-Akhlaaqir-Raawee wa Aadaabis-Saami'(1/106)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Al-Haafidh an-Nawawee (d. 676H) said: 'The first thing he should begin with is memorization of the mighty Qur'aan, which is the most important of the branches of knowledge. And the Companions and those that follow them did not use to teach hadeeth or fiqh except to one who had memorized the Qur'aan. When he has memorized it, let him beware of preoccupying himself from it with hadeeth, fiqh or other things, to the extent that it leads him to forget anything of the Qur'aan, or makes that likely.'",
    reference: "From the introduction to Al-Majmoo' Sharhul-Muhadhhab (1/38)",
    narrator: "Al-Haafidh an-Nawawee",
  },
  {
    text: "Umar ibn 'Abdul-Waahid, a companion of al-Awzaa'ee said: 'We read al-Muwattaa to Maalik (d.179H) in forty days, so he said: A book that took me forty years to compile, you take from me in forty days! How little you understand of it.'",
    reference: "Related by Ibn 'Abdul-Barr in at-Tamheed (1/77)",
    narrator: "Umar ibn 'Abdul-Waahid",
  },
  {
    text: "Al-Khateeb al-Baghdaadee said: 'It is fitting that he takes care in acquiring knowledge and that he should not take too much in one go. Rather, he should take a little at a time, such that he can bear it, memorize it, and be able to understand it. Because Allaah says: And those who disbelieve say: Why is the Qur'aan not sent down to him all at once? Thus (is it sent down in parts) that We may strengthen your heart thereby. And We have revealed it to you gradually, in stages. (Soorah al-Furqaan 25:32)'",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/101)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Al-Khateeb also said: 'And know that the heart is an organ from the organs. It is able to bear some things and unable to bear others, just like the rest of the body. Thus, some people are able to carry one-hundred pounds, whereas others are unable to carry even twenty. Some people are able to walk a number of miles in a day without tiring, whereas others are unable to even walk a mile a day before they become tired... So let each person limit himself to what he is able without expending all his energies, because that will better aid him in learning with a good mind, from a firm and proficient teacher.'",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/107)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Abu Bakr Muhammad ibn Ja'far said: 'I heard Ibn Khuzaymah (d. 311H) being asked: From where did you acquire this knowledge? So he said: Allaah's Messenger (sallallaahu `alayhi wa sallam) said: Zam-zam water is that for which it is drunk. (Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/721)). So when I drank zam-zam water, I supplicated to Allaah for beneficial knowledge.'",
    reference: "Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/721)",
    narrator: "Ibn Khuzaymah",
  },
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
    text: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee came from Marwa to Baghdad, and studied jurisprudence and Hadith under Imam Ahmed, then he returned to Khurasaan and remained in the city of Naysaboor. Then he was told that Imam Ahmed retracted and withdrew some of the rulings on certain issues that he had studied from him. So he walked barefoot from Naysaboor to Baghdad to clarify those issues that he learnt from him.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 23",
    narrator: "Imam Abu Yaqoob Ishaq ibn Mansoor Al Kawsaj Al Marwazee",
  },
  {
    text: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi travelled to the west on foot to seek knowledge from the scholars. But when he began his journey on the way he was stopped by the people. He escaped from there after they were impressed by his manners. This scholar is Baqiyyobnu Makhlad Al Undulusi. He travelled to Baghdad on his foot whilst he was only twenty years old. His only intention was to meet Imam Ahmed ibn Hanbal and to seek knowledge from him.",
    reference: "Siyar Aalaam Al Nubala",
    narrator: "Hafiz Shaykul Islam Baqiy ibn Makhlad Al Qurtubi",
  },
  {
    text: "“If the kings and the leaders of the world today know the happiness, the sweetness and the pleasure that we are in they will fight with swords to take away that sweetness and pleasure from us.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 38",
    narrator: "Unknown",
  },
  {
    text: "Imam Muhammed ibn Ismaeel Al Bukhari travelled to all the teachers of Hadith in all the cities that was possible for him to travel to. And he narrated from more than thousand teachers. Firabree (one of the greatest students of Imam Bukhari) says: “Around seventy thousand people heard Sahih Bukhari from Imam Bukhari only in my presence.”",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 50",
    narrator: "Imam Muhammed ibn Ismaeel Al Bukhari",
  },
  {
    text: "Imam Muhammed ibn Suhnoon Al Qayrawani, a great scholar in jurisprudence in the Maliki school of thought and a great scholar in Hadith, had a slave woman called ‘Ummu Mudam’. He was with her one day and became engaged in writing a book till night. She served him food but he said to her, ‘I am busy at this moment.’ When the night prolonged, she began to feed him by putting the morsels in his mouth and he remained busy until the call for the morning prayers. Then he said: ‘I got busy tonight Ummu Mudam, bring the food that you have prepared.’ So she said, ‘By Allah, I fed you.’ He said, ‘I am not aware of this.’",
    reference: "Tarteeb al Madarik",
    narrator: "Imam Muhammed ibn Suhnoon Al Qayrawani",
  },
  {
    text: "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani taught Hadith in many cities, and authored more than seventy-five books. Zakwani says, “Imam Tabrani was asked how he gathered a great number of Hadith, so he said: for thirty years I slept on a straw mat.”",
    reference: "Tazkiratul Huffaz",
    narrator:
      "Hafiz Imam Abul Qasim Sulaiman ibn Ahmed Al Lakhmee Al Shamee Al Tabrani",
  },
  {
    text: "Hafiz Imam Jawwal Abu Ali Al Hassan ibn Ali Al Balkhi Al Wakhshee said: 'I was in Asqalan, and listening to Hadith from Ibn Musahhih and other scholars. My living became tight on me, and many days passed by without eating anything. I started to write but was unable to due to hunger. So I went to a bakery, and sat next to it, smelling the bread being baked in the oven and that smell would give me strength to write, and I would write.'",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 87",
    narrator:
      "Hafiz Imam Jawwal Abu Ali Al Hassan ibn Ali Al Balkhi Al Wakhshee",
  },
  {
    text: "Imam Yahya ibn Mae’en's father Mae’en was a professional writer for Abdullah ibn Malik. When he died he left for his son Yahya one million and fifty thousand dirhams. Imam Yahya spent this entire wealth on seeking knowledge and Hadith to the extent that he never had money for his own shoes.",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 109",
    narrator: "Imam Yahya ibn Mae’en",
  },
  {
    text: "Imam Muhammed ibn Hassan Al Shaybani said: 'My father left behind thirty thousand dirham. Fifteen thousand were spent on Arabic Grammar and Poetry and the remaining fifteen thousand were spent on Hadith and Jurisprudence.'",
    reference:
      "The Patience of the Pious Predecessors in Seeking Knowledge pg 110",
    narrator: "Imam Muhammed ibn Hassan Al Shaybani",
  },
  {
    text: "Muhammad ibn al-Fadl said: 'I heard my grandfather say: I asked my father for permission to study under Qutaybah, so he said: First learn the Qur'aan and then I will give you permission. So I memorized the Qur'aan by heart. Then he said to me: Remain until you have led the people in prayer with it (i.e. for taraweeh prayer). So I did so, and after the 'eed prayer he gave me permission, so I left for Marw.'",
    reference: "Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/722)",
    narrator: "Muhammad ibn al-Fadl",
  },
  {
    text: "Al-Khateeb al-Baghdaadee (d. 463H) said: 'It is fitting for a student that he begins with memorization of the Book of Allaah -since it is the greatest of the branches of knowledge and that which should be placed first and given precedence.'",
    reference: "Al-Jaami' li-Akhlaaqir-Raawee wa Aadaabis-Saami'(1/106)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Al-Haafidh an-Nawawee (d. 676H) said: 'The first thing he should begin with is memorization of the mighty Qur'aan, which is the most important of the branches of knowledge. And the Companions and those that follow them did not use to teach hadeeth or fiqh except to one who had memorized the Qur'aan. When he has memorized it, let him beware of preoccupying himself from it with hadeeth, fiqh or other things, to the extent that it leads him to forget anything of the Qur'aan, or makes that likely.'",
    reference: "From the introduction to Al-Majmoo' Sharhul-Muhadhhab (1/38)",
    narrator: "Al-Haafidh an-Nawawee",
  },
  {
    text: "Umar ibn 'Abdul-Waahid, a companion of al-Awzaa'ee said: 'We read al-Muwattaa to Maalik (d.179H) in forty days, so he said: A book that took me forty years to compile, you take from me in forty days! How little you understand of it.'",
    reference: "Related by Ibn 'Abdul-Barr in at-Tamheed (1/77)",
    narrator: "Umar ibn 'Abdul-Waahid",
  },
  {
    text: "Al-Khateeb al-Baghdaadee said: 'It is fitting that he takes care in acquiring knowledge and that he should not take too much in one go. Rather, he should take a little at a time, such that he can bear it, memorize it, and be able to understand it. Because Allaah says: And those who disbelieve say: Why is the Qur'aan not sent down to him all at once? Thus (is it sent down in parts) that We may strengthen your heart thereby. And We have revealed it to you gradually, in stages. (Soorah al-Furqaan 25:32)'",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/101)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Al-Khateeb also said: 'And know that the heart is an organ from the organs. It is able to bear some things and unable to bear others, just like the rest of the body. Thus, some people are able to carry one-hundred pounds, whereas others are unable to carry even twenty. Some people are able to walk a number of miles in a day without tiring, whereas others are unable to even walk a mile a day before they become tired... So let each person limit himself to what he is able without expending all his energies, because that will better aid him in learning with a good mind, from a firm and proficient teacher.'",
    reference: "Al-Faqeeh wal-Mutafaqqih (2/107)",
    narrator: "Al-Khateeb al-Baghdaadee",
  },
  {
    text: "Abu Bakr Muhammad ibn Ja'far said: 'I heard Ibn Khuzaymah (d. 311H) being asked: From where did you acquire this knowledge? So he said: Allaah's Messenger (sallallaahu `alayhi wa sallam) said: Zam-zam water is that for which it is drunk. (Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/721)). So when I drank zam-zam water, I supplicated to Allaah for beneficial knowledge.'",
    reference: "Related by adh-Dhahabee in Tadhkiratul-Huffaadh (2/721)",
    narrator: "Ibn Khuzaymah",
  },
  {
    text: "Khateeb Al Baghdaadee (Rahimahullah) mentioned in one of his monumental books that one of the students of knowledge, in the science of hadeeth, from the Salaf (i.e. Pious Predecessors) had a very strong ambition for seeking knowledge, but he aspired to gather all of the knowledge at one time by sitting in all the circles of knowledge. Then after some time he began to realize that he was not benefiting from the knowledge that he was trying to acquire, and he said to himself: 'This path of seeking knowledge is really not for me!' Consequently, he abandoned the circles of knowledge altogether considering himself to be incompetent and deficient in understanding the intricate matters of knowledge, or he thought that it was not meant for him to be a student of knowledge. So one day he came across a boulder which appeared to be eroding due to the trickles of water that were falling on top of it. So he pondered over this for a moment and said: 'This water along with its softness is eroding this boulder along with its coarseness!! My heart and intellect are not harder than this boulder nor is water softer than knowledge!!' So he decided to return to the path of seeking knowledge and was patient until he eventually became one of the most prominent scholars of his time. This will show you that in order to be a true student of knowledge you have to possess strong determination and ambition that will safeguard you from becoming discouraged and dispirited.",
    reference: "The Methodology of Seeking Knowledge Pg 7 & 8",
    narrator: "Khateeb Al Baghdaadee",
  },
  {
    text: "Imam Ahmad (Rahimahullah) was asked: 'How does one have sincerity while seeking knowledge?' He replied: 'Having sincerity while seeking knowledge is by making your sole intention to remove ignorance from yourself, because the one who is knowledgeable is not equal to the one who is ignorant'.",
    reference: "The Methodology of Seeking Knowledge pg 11",
    narrator: "Imam Ahmad",
  },
  {
    text: "Imaam Az Zuhri (Rahimahullah) who was a well-known Tabiee said: 'Whoever seeks to acquire knowledge all at once, then it will go away from him all at once. Instead knowledge is sought by the passing away of many days and nights.' (i.e. in due time).",
    reference: "The Methodology of Seeking Knowledge pg 12 & 13",
    narrator: "Imaam Az Zuhri",
  },
  {
    text: "Some of the Salaf used to say: 'If you see the books of a student of knowledge neatly placed in order on the book shelf then know that he is a student that doesn’t read, rather he has abandoned his books.'",
    reference: "The Methodology of Seeking Knowledge pg 17",
    narrator: "Unknown",
  },
  {
    text: "Some of the Salaf used to say: 'If you give knowledge all of you it might give you some of it.'",
    reference: "The Methodology of Seeking Knowledge pg 19",
    narrator: "Unknown",
  },
  {
    text: "There are narrations that mention that Imaam Ahmad and Abu Zur’ah, Ubaydullah Ibn Abdul Kareem (Rahimahumullah) who was a well-known Imaam, that they prayed Salat ul Isha (i.e. Night Prayer) together and afterwards they went into Imaam Ahmad’s house, and suddenly before they knew it, the Adhan (i.e. Call to Prayer) for Salat ul Fajr (i.e. Morning Prayer) was being called, and this is because they spent the whole night reviewing matters of knowledge!!",
    reference: "The Methodology of Seeking Knowledge Pg 28",
    narrator: "Imaam Ahmad and Abu Zur’ah, Ubaydullah Ibn Abdul Kareem",
  },
  {
    text: "Abu Khaythama narrated to us, (saying): Wakee related to us from Abee Keeraan who said: I heard Shabee saying: 'If you hear anything, write it down even on a wall.'",
    reference:
      "Kitaabul Ilm of Abu Khaythama with the checking of Imaam Al Albaanee, narration number:146. page:34",
    narrator: "Abu Khaythama",
  },
  {
    text: "Abu Khaythama narrated to us, (saying): Wakee related to us, (saying): Ubay related to us from Abdullaah Ibn Hanash who said: 'Indeed, I have seen them (i.e. the people) writing on their palms with reeds in Baraa’ah’s presence.'",
    reference:
      "Kitaabul Ilm of Abu Khaythama with the checking of Imaam Al Albaanee, narration number: 147. page:34",
    narrator: "Abu Khaythama",
  },
  {
    text: "Anas ibn Malik al-Ansary would encourage his children upon writing knowledge so he would say to them, 'Oh my sons, confine [preserve] knowledge through the book [i.e. in writing it down].'",
    reference: "Taq'īdul ilm, pg 96",
    narrator: "Anas ibn Malik al-Ansary",
  },
  {
    text: "Similarly it is narrated he would say, 'We would not consider the knowledge of the one who does not write down his knowledge, as knowledge.'",
    reference: "Taq'īdul ilm, pg 96",
    narrator: "Anas ibn Malik al-Ansary",
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
  {
    text: "Knowledge used to be in the chests of men, then it was transferred to the books, and its keys are in the hands of men.",
    reference: "How to Read a Book?, pg 34",
    narrator: "General",
  },
  {
    text: "I do not know of anything more beneficial for memory than desire of a man and constant referral and reading.",
    reference: "How to Read a Book?, pg 37",
    narrator: "Al-Bukhaari",
  },
  {
    text: "Al-Khateeb Al-Baghdaadi read Saheeh Al-Bukhaari to Kareemah Al-Marwaziyyah during the days of Mina.",
    reference: "How to Read a Book?, pg 54,55",
    narrator: "General",
  },
  {
    text: "Ibn Hajar read As-Sunan by Ibn Maajah in four sittings, and read Saheeh Muslim in four sittings, apart from the concluding sitting, and that occurred in about two days, for he used to sit from early morning until dhuhr. He read Al-Kabeer by An-Nasaa’i in ten sittings, and each sitting was about four hours. The fastest timing that he read a book in is that he read Mu`jam At-Tabaraani As-Sagheer in one sitting, between dhuhr and `Asr. This is a one volume work that comprises of approximately 1,500 Hadeeth. He reported Al-Bukhaari in ten sittings, each of which was four hours long. Ibn Hajar, in his stay in Damascus, which was for about two months and two thirds of a month, read close to a hundred volumes.",
    reference: "How to Read a Book?, pg 54,55",
    narrator: "General",
  },
  {
    text: "Yoonus, beware of taking books illegally. Holding them back from their owners.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "Az-Zuhri",
  },
  {
    text: "Due to people withholding books, more than one person has refused to give books to borrow.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "Al-Khateeb",
  },
  {
    text: "Do not allow anyone to borrow your book.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "Sufyaan",
  },
  {
    text: "Preserve your book, because if you lose a book, you will not find blessing.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "Al-Buwayti",
  },
  {
    text: "Do not lend your book unless you know that the one you lend to is of knowledge and religion.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "General",
  },
  {
    text: "Some, when asked to borrow a book, would say: Show me your books, and if they find then preserved and cherished, they would lend it to them, but if they found them dusty or changed in figure, they would refrain.",
    reference: "How to Read a Book?, pg 69,70",
    narrator: "General",
  },
  {
    text: "I never wrote a single hadīth except that I acted upon it, to the point that I came across a report that the Prophet (peace be upon him) got cupped and gave Abū Taybah (his cupper) a dīnār. So, I got cupped and gave the cupper a dīnār.",
    reference: "Siyar A’lām an-Nubalā (9/457)",
    narrator: "Ahmad bin Hambal",
  },
  {
    text: "It is upon the student of knowledge to manifest calmness, humility, and tranquility, and to follow in the footsteps of those who came before him.",
    reference: "The Manners Of the Knowledge Seeker, pg 13",
    narrator: "Mālik",
  },
  {
    text: "The student of knowledge is to clean his heart out from every bit of blemish, deceit, envy, and bad character in order to condition himself to soak up and memorize knowledge and discover its detailed meanings and hidden treasures. Knowledge is – as some have said – the secret prayer, the worship of the heart, and the inner means of gaining nearness to Allāh. And just as prayer – the worship of the external limbs – is not accepted except with external purification from filth and impurity, likewise, knowledge – the worship of the heart – is not facilitated except if you purify yourself from the filth of low and despicable characteristics and manners. And if you clean your heart out for knowledge, its blessing becomes clear and evident, just like the plot of land that is fertile for agriculture, and in the hadīth: Indeed, and in the body there is a piece of flesh. If it is sound, the rest of the body will be sound. If it is corrupt, the rest of the body will be corrupt. Indeed, it is the heart.",
    reference: "Tadhkirat as-Sāmi’ wal-Mutakallim (p. 67)",
    narrator: "Ibn Jamā’ah",
  },
  {
    text: "It is forbidden for any light to enter the heart while it contains anything that Allāh – the Mighty and Majestic – hates.",
    reference: "Tadhkirat as-Sāmi’ wal-Mutakallim (p. 67)",
    narrator: "Sahl",
  },
  {
    text: "And sins leave ugly, despicable, and harmful effects to the heart and body in this world and the next that none know except Allāh. From them is that one is prevented from knowledge, as knowledge is a light that Allāh places into the heart, and sins put out this light. When ash-Shāfi’ī sat in front of Mālik to read to him, he was amazed at what he was seeing of ash-Shāfi’ī’s intelligence, wisdom, and complete understanding and comprehension, saying: 'I see that Allāh has placed light in your heart. So, don’t put it out with the darkness of sin.'",
    reference: "al-Jawāb al-Kāfī, p. 54",
    narrator: "Ibn al-Qayyim",
  },
  {
    text: "I complained to Wakī’ of my bad memory * So, he advised me to abandon sins; And said: 'Know that knowledge is a blessing * and the blessing of Allāh is not accessible to the sinner.'",
    reference: "al-Jawāb al-Kāfī, p. 54",
    narrator: "ash-Shāfi’ī",
  },
  {
    text: "Knowledge is not constant narration. Rather, it is light that is placed in the heart.",
    reference: "The Manners Of the Knowledge Seeker, pg 17",
    narrator: "Ibn Mas’ūd",
  },
  {
    text: "The student of knowledge should utilize his youth and free time in his life to gain as much as he can, and he should not be deceived by the temptation to put things off for another day. Every hour that passes of his life is crucial and will not be replaced. He should cut off what he can of the distracting relationships and preventative obstacles that are in the way of the knowledge he seeks, and should instead exert his energy and power in gaining as much as he can, since these obstacles are like roadblocks in his way.",
    reference: "Tadhkirat as-Sāmi’ wal-Mutakallim, p. 70",
    narrator: "Ibn Jamā’ah",
  },
  {
    text: "For the past sixteen years, I never ate my fill. The reason for this is that eating excessively leads to excessive drinking and sleeping, dulling of the senses, and laziness of the body. This is all in addition to the fact that doing so is disliked in the Sharī’ah, and exposes the body to all types of dangerous disease, as it was said: Indeed, most of the diseases you see * Are from eating and drinking...",
    reference: "The Manners Of the Knowledge Seeker, pg 24",
    narrator: "ash-Shāfi’ī",
  },
  {
    text: "Sometimes, I would come across a hundred different explanations for a single verse, and I would ask Allāh to allow me to understand them. I would say: 'O Teacher of Ādam and Ibrāhīm, teach me!' I would go to an abandoned mosque, rub my face in the dirt, and ask Allāh, saying: 'O Teacher of Ibrāhīm, teach me.'",
    reference: "Tafsīr Sūrat al-Ikhlās, p. 6",
    narrator: "Ibn Taymiyyah",
  },
  {
    text: "Shaykh al-Islām Ibn Taymiyyah, who was never heard asking for food - dinner or supper – no matter how long he remained busy with some matter related to knowledge and action. Rather, he would sometimes be given food that he would leave for a long time before even turning to it, and if he ate from it, would only eat small bits. He would never mention the delights of this world, and would never speak or ask about it. Rather, all of his concern and conversation was in seeking the Hereafter and what could bring him closer to Allāh, the Exalted.",
    reference: "Ghāyat al-Amānī, 2/173",
    narrator: "General",
  },
  {
    text: "al-Hasan bin Ziyād began studying at the age of 80, and for forty years, he did not sleep an entire night on his bed, and Muhammad bin al-Hasan ash-Shaybānī would not sleep at night. He would place his books in front of him, and if he became bored of one book, he’d move on to another. He would also place in front of him a container of water that he’d use to keep himself awake, saying: 'Sleep comes from heat, and one must repel it with cold water.'",
    reference: "Ta’līm al-Muta’allim wa Turuq at-Ta’allum, p. 23",
    narrator: "az-Zarnūjī",
  },
  {
    text: "Mughīrah bin Ibrāhīm said: 'If they came to a man to study with him, they would look to his appearance, his prayer, and his overall condition. Then, they would study with him.'",
    reference: "The Manners Of the Knowledge Seeker, pg 54",
    narrator: "al-Khatīb al-Baghdādī",
  },
  {
    text: "Whoever studies with an innovator, Allāh will not allow him to benefit from what he learned, and whoever shakes his hand has removed the bonds of Islām, one by one.",
    reference: "The Manners Of the Knowledge Seeker, pg 54",
    narrator: "Sufyān ath-Thawrī",
  },
  {
    text: "We would honor Ibrāhīm an-Nakha’ī just as one would honor the ruler.",
    reference: "The Manners Of the Knowledge Seeker, pg 57, 58",
    narrator: "al-Mughīrah",
  },
  {
    text: "A man would sit with al-Hasan for three years and not ask him anything out of awe and respect for him.",
    reference: "The Manners Of the Knowledge Seeker, pg 57, 58",
    narrator: "Ayyūb",
  },
  {
    text: "I would see Yahyā al-Qattān praying ‘Asr. He would then lean on the base of the mosque’s minaret, and standing in front of him would be ‘Alī bin al-Madīnī, ash-Shādhakūnī, ‘Amr bin ‘Alī, Ahmad bin Hambal, Yahyā bin Ma’īn, etc. – all asking him about Hadīth while they were standing up. This would go on until the Maghrib prayer, and he would not offer any of them to sit, and none of them would sit out of awe and respect of him.",
    reference: "The Manners Of the Knowledge Seeker, pg 57, 58",
    narrator: "Ishāq ash-Shahīdī",
  },
  {
    text: "I would turn the pages of my books in front of Mālik in a very soft, quiet way so that he wouldn’t be bothered by its noise, out of respect for him.",
    reference: "The Manners Of the Knowledge Seeker, pg 57, 58",
    narrator: "ash-Shāfi’ī",
  },
  {
    text: "I humbled myself as a student. So, I became honorable as a teacher.",
    reference: "The Manners Of the Knowledge Seeker, pg 60",
    narrator: "Ibn ‘Abbās",
  },
  {
    text: "Nobody in the class of Abd ar-Rahmān bin Mahdī would even speak, sharpen a pen, or smile. If he saw that someone spoke or sharpened a pen, he would get up, put on his shoes, and go home.",
    reference: "The Manners Of the Knowledge Seeker, pg 64",
    narrator: "Ahmad bin Sinān al-Qattān",
  },
  {
    text: "Whoever is stingy with his knowledge will be tested with one of three things: he will forget and be unable to memorize, or he will not benefit from it, or he will find himself losing his books.",
    reference: "The Manners Of the Knowledge Seeker, pg 67",
    narrator: "Sufyān ath-Thawrī",
  },
];

const SalafQuotes = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <GreenBar>
        {" "}
        <Typography variant="h5" align="center" gutterBottom>
          ■ Salaf In Pursuit Of Knowledge ■
        </Typography>{" "}
      </GreenBar>
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
  );
};

export default SalafQuotes;
