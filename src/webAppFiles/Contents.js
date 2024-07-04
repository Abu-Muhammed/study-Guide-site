import React from "react";
import ContentPage from "./ContentPage";
import { Typography } from "@mui/material";

const Contents = () => {
  const L1Aqeeda = [
    {
      title:
        "அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனை கற்றுக் கொள்வதன் மார்க்கச் சட்டம் - பாகம் 1",
      link: "அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனை கற்றுக் கொள்வதன் மார்க்கச் சட்டம் - பாகம் 1",
    },
    {
      title:
        "அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனைக் கற்றுக் கொள்வதன் மார்க்கச் சட்டம் - பாகம் 2",
      link: "அகீதாவைப் பயிலுவதின் முக்கியத்துவம் மற்றும் அதனைக் கற்றுக் கொள்வதன் மார்க்கச் சட்டம் - பாகம் 2",
    },
    {
      title:
        "தவ்ஹீதின் மிகப்பெரும் சிறப்புகளும் மற்றும் அதனுடைய மகத்தான பலன்களும் - அஷ்ஷைஃக் அப்துர் ரஹ்மான் பின் நாஸிர் அஸ்-ஸஅதி",
      link: "தவ்ஹீதின் மிகப்பெரும் சிறப்புகளும் மற்றும் அதனுடைய மகத்தான பலன்களும் - அஷ்ஷைஃக் அப்துர் ரஹ்மான் பின் நாஸிர் அஸ்-ஸஅதி",
    },
    {
      title: "லாஇலாஹ இல்லல்லாஹ்” பற்றிய விளக்கம்",
      link: "லாஇலாஹ இல்லல்லாஹ்” பற்றிய விளக்கம்",
    },
    {
      title: "இணைவைப்பிலிருந்து விடுபட நான்கு அடிப்படைகள்",
      link: "இணைவைப்பிலிருந்து விடுபட நான்கு அடிப்படைகள்",
    },
    {
      title: "அடிப்படை அகீதா அறிவோம்",
      link: "அடிப்படை அகீதா அறிவோம்",
    },
    {
      title:
        "அல்லாஹ்வுடைய அழகிய பெயர்கள் மற்றும் அவனது உயரிய பண்புகளை அறிவதன் முக்கியத்துவம் - ஷைஃக் ஸாலிஹ் ஸிந்தி ஹஃபிதஹுல்லாஹ்",
      link: "அல்லாஹ்வுடைய அழகிய பெயர்கள் மற்றும் அவனது உயரிய பண்புகளை அறிவதன் முக்கியத்துவம் - ஷைஃக் ஸாலிஹ் ஸிந்தி ஹஃபிதஹுல்லாஹ்",
    },
    {
      title:
        "The Names and Attributes of Allāh - Explanation of the Correct Belief through Authentic Tafsir by Abdulilah Lahmami",
      link: "The Names and Attributes of Allāh - Explanation of the Correct Belief through Authentic Tafsir by Abdulilah Lahmami",
    },
    {
      title: "இஸ்லாமிய அகீதா (சமூகத்தில்) இல்லாமல் போவதன் விளைவுகள்",
      link: "இஸ்லாமிய அகீதா (சமூகத்தில்) இல்லாமல் போவதன் விளைவுகள்",
    },
    {
      title:
        "அகீதாவைக் கொண்டு தொடங்கப்படாத அழைப்பானது பயனில்லாத, தோல்வியுறும் ஒரு அழைப்பாகும் - அஷ்ஷைஃக் ஸாலிஹ் பின் ஃபவ்ஸான் அல்-ஃபவ்ஸான்",
      link: "அகீதாவைக் கொண்டு தொடங்கப்படாத அழைப்பானது பயனில்லாத, தோல்வியுறும் ஒரு அழைப்பாகும் - அஷ்ஷைஃக் ஸாலிஹ் பின் ஃபவ்ஸான் அல்-ஃபவ்ஸான்",
    },
  ];
  const L1TalabulIlm = [
    {
      title:
        "மார்க்கக் கல்வியை தேடுவதின் சிறப்பு - அஷ்ஷைஃக் ஸுலைய்மான் அர்ருஹைய்லி",
      link: "மார்க்கக் கல்வியை தேடுவதின் சிறப்பு - அஷ்ஷைஃக் ஸுலைய்மான் அர்ருஹைய்லி",
    },
    {
      title:
        "மார்க்கத்தில் விளக்கம் பெறுவது என்பது, அல்லாஹ் ஒரு அடியானுக்கு நலவை நாடியிருப்பதன் அடையாளமாகும் - இமாம் அந்-நவவி, இமாம் இப்னு தைமிய்யா, அல்லாமாஹ் இப்னு உஸைமீன், அல்லாமாஹ் அப்துல் முஹ்ஸின் அல்அப்பாத்",
      link: "மார்க்கத்தில் விளக்கம் பெறுவது என்பது, அல்லாஹ் ஒரு அடியானுக்கு நலவை நாடியிருப்பதன் அடையாளமாகும் - இமாம் அந்-நவவி, இமாம் இப்னு தைமிய்யா, அல்லாமாஹ் இப்னு உஸைமீன், அல்லாமாஹ் அப்துல் முஹ்ஸின் அல்அப்பாத்",
    },
    {
      title:
        "குர்ஆனிலும், ஸுன்னாஹ்விலும் கல்வி என்ற வார்த்தையைக் கொண்டு நாடப்படுவது மார்க்கக் கல்வியே ஆகும் - ஷைஃக் ஸாலிஹ் அல்-ஃபவ்ஸான், ஷைஃக் ஸாலிஹ் அல்-உஸைமீ",
      link: "குர்ஆனிலும், ஸுன்னாஹ்விலும் கல்வி என்ற வார்த்தையைக் கொண்டு நாடப்படுவது மார்க்கக் கல்வியே ஆகும் - ஷைஃக் ஸாலிஹ் அல்-ஃபவ்ஸான், ஷைஃக் ஸாலிஹ் அல்-உஸைமீ",
    },
    {
      title: "A Translation of the Summary of the Veneration of Knowledge",
      link: "A Translation of the Summary of the Veneration of Knowledge",
    },
    {
      title: "Veneration of Knowledge [Original Book for Reference]",
      link: "Veneration of Knowledge [Original Book for Reference]",
    },
    {
      title:
        "Obstacles in the Path of Seeking Knowledge by Shaykh Abd as-Salam Burjis",
      link: "Obstacles in the Path of Seeking Knowledge by Shaykh Abd as-Salam Burjis",
    },
    {
      title: "Tadween al Ilm",
      link: "Tadween al Ilm",
    },
  ];
  const L1Fiqh = [
    {
      title:
        "The Prerequisites, Pillars & Obligations of the Prayer by Muhammad ibn Abdul-Wahhab",
      link: "The Prerequisites, Pillars & Obligations of the Prayer by Muhammad ibn Abdul-Wahhab",
    },
    {
      title:
        "An Explanation of the Conditions, Pillars and Requirements of Prayer by Shaykh Muhammad Amaan al-Jaamee and Shaykh Abdul-Muhsin al-Abbad [for reference]",
      link: "An Explanation of the Conditions, Pillars and Requirements of Prayer by Shaykh Muhammad Amaan al-Jaamee and Shaykh Abdul-Muhsin al-Abbad [for reference]",
    },
    {
      title: "The Humility in Prayer by Ibn Rajab",
      link: "The Humility in Prayer by Ibn Rajab",
    },
    {
      title: "Guidance for Fasting Muslims by Shaykh ‘Uthaymīn",
      link: "Guidance for Fasting Muslims by Shaykh ‘Uthaymīn",
    },
  ];
  const L1Manhaj = [
    {
      title:
        "அல்குர்ஆனையும், ஸுன்னாஹ்வையும் விளங்குவதில் ஏன் ஸலஃபுஸ் ஸாலிஹீன்களின் புரிதலை பின்பற்றுவது கடமையாக இருக்கின்றது? - அல்இமாம் முக்பில் பின் ஹாதீ அல்வாதி'ஈ ரஹிமஹுல்லாஹ்",
      link: "அல்குர்ஆனையும், ஸுன்னாஹ்வையும் விளங்குவதில் ஏன் ஸலஃபுஸ் ஸாலிஹீன்களின் புரிதலை பின்பற்றுவது கடமையாக இருக்கின்றது? - அல்இமாம் முக்பில் பின் ஹாதீ அல்வாதி'ஈ ரஹிமஹுல்லாஹ்",
    },
    {
      title:
        "ஸலஃபுகளைப் பின்பற்றுவது நம்மீது கடமை” என்ற வாக்கியத்தின் சரியான புரிதல் என்ன? - அஷ்ஷைஃக் அபுல் அதா’ அஹ்மத் பானாஜாஹ் ஹஃபிதஹுல்லாஹ்",
      link: "ஸலஃபுகளைப் பின்பற்றுவது நம்மீது கடமை” என்ற வாக்கியத்தின் சரியான புரிதல் என்ன? - அஷ்ஷைஃக் அபுல் அதா’ அஹ்மத் பானாஜாஹ் ஹஃபிதஹுல்லாஹ்",
    },
    {
      title:
        "சஹாபாக்கள் ஒருசில தவறுகளில் விழுந்திருக்கும் பட்சத்தில், எவ்வாறு அவர்களை நாம் பின்பற்ற இயலும்!? - அஷ்ஷைஃக் அபுல் அதா’ அஹ்மத் பானாஜாஹ் ஹஃபிதஹுல்லாஹ்",
      link: "சஹாபாக்கள் ஒருசில தவறுகளில் விழுந்திருக்கும் பட்சத்தில், எவ்வாறு அவர்களை நாம் பின்பற்ற இயலும்!? - அஷ்ஷைஃக் அபுல் அதா’ அஹ்மத் பானாஜாஹ் ஹஃபிதஹுல்லாஹ்",
    },
    {
      title:
        "மன்ஹஜுஸ் ஸலஃப் பற்றிய ஒரு சுருக்கமான அறிமுகம் - அஷ்ஷைஃக் ஸுலைய்மான் அர்-ருஹைய்லி",
      link: "மன்ஹஜுஸ் ஸலஃப் பற்றிய ஒரு சுருக்கமான அறிமுகம் - அஷ்ஷைஃக் ஸுலைய்மான் அர்-ருஹைய்லி",
    },
    {
      title: "The Salafi Methodology by Shaykh Muhammad Bazmul",
      link: "The Salafi Methodology by Shaykh Muhammad Bazmul",
    },
    {
      title:
        "அல்குர்ஆன், ஸுன்னாவின் ஒளியில் நபித்தோழர்கள் - அஷ்ஷெய்க். அப்துல் முஹ்ஸின் பின் ஹமத் அல்அப்பாத் அல்பத்ர்",
      link: "அல்குர்ஆன், ஸுன்னாவின் ஒளியில் நபித்தோழர்கள் - அஷ்ஷெய்க். அப்துல் முஹ்ஸின் பின் ஹமத் அல்அப்பாத் அல்பத்ர்",
    },
  ];
  const L1Tafseer = [
    {
      title: "Authentic Tafsir by Abdulilah Lahmami",
      link: "Authentic Tafsir by Abdulilah Lahmami",
    },
  ];
  const L1Manners = [
    {
      title:
        "Noble Manners Based Upon 4 Pillars by Shaykh Abdur-Razzaq al-Badr",
      link: "Noble Manners Based Upon 4 Pillars by Shaykh Abdur-Razzaq al-Badr",
    },
  ];
  const L1Sulook = [
    {
      title: "The Journey to Allāh by Ibn Rajab",
      link: "The Journey to Allāh by Ibn Rajab",
    },
    {
      title:
        "How to Escapes Sins by Ibn al-Qayyim explained by Shaykh Abdur-Razzaq al-Badr",
      link: "How to Escapes Sins by Ibn al-Qayyim explained by Shaykh Abdur-Razzaq al-Badr",
    },
  ];
  const L1TazkiyathunNafs = [
    {
      title:
        "உள்ளத்தை பரிசுத்தப்படுத்துவதன் முக்கியத்துவம்_பாகம் 1 - அஷ்ஷைஃக் அப்துர் ரஸ்ஸாக் அல்பத்ர்",
      link: "உள்ளத்தை பரிசுத்தப்படுத்துவதன் முக்கியத்துவம்_பாகம் 1 - அஷ்ஷைஃக் அப்துர் ரஸ்ஸாக் அல்பத்ர்",
    },
    {
      title:
        "உள்ளத்தை பரிசுத்தப்படுத்துவதன் முக்கியத்துவம்_பாகம் 2 - அஷ்ஷைஃக் அப்துர் ரஸ்ஸாக் அல்பத்ர்",
      link: "உள்ளத்தை பரிசுத்தப்படுத்துவதன் முக்கியத்துவம்_பாகம் 2 - அஷ்ஷைஃக் அப்துர் ரஸ்ஸாக் அல்பத்ர்",
    },
    {
      title:
        "Ten Principles Concerning Purification of the Soul by Shaykh Abdur-Razzaq al-Badr",
      link: "Ten Principles Concerning Purification of the Soul by Shaykh Abdur-Razzaq al-Badr",
    },
    {
      title:
        "A Treatise in Condemnation of the Hardness of the Heart by Ibn Rajab",
      link: "A Treatise in Condemnation of the Hardness of the Heart by Ibn Rajab",
    },
  ];
  const L1Dawa = [
    {
      title: "Provisions for the Caller to Allah by Shaykh ‘Uthaymīn",
      link: "Provisions for the Caller to Allah by Shaykh ‘Uthaymīn",
    },
  ];
  const L1History = [
    {
      title:
        "நபி ﷺ அவர்களைப் பற்றி அறிந்து கொள்வதன் முக்கியத்துவம் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
      link: "நபி ﷺ அவர்களைப் பற்றி அறிந்து கொள்வதன் முக்கியத்துவம் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
    },
    {
      title: "நபித்துவத்தின் ஆதாரங்கள் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
      link: "நபித்துவத்தின் ஆதாரங்கள் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
    },
    {
      title: "Concise Biography of Prophet Muhammed",
      link: "Concise Biography of Prophet Muhammed",
    },
    {
      title:
        "நபி ﷺ அவர்களை நேசித்தல் - அதன் அடையாளங்களும், அதன்பால் அழைக்கும் காரணிகளும் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
      link: "நபி ﷺ அவர்களை நேசித்தல் - அதன் அடையாளங்களும், அதன்பால் அழைக்கும் காரணிகளும் - அஷ்ஷைஃக் ஸாலிஹ் ஸிந்தி",
    },
  ];

  return (
    <>
      <Typography variant="h5">LEVEL 1</Typography>
      <ContentPage
        subject={"Virtue of Knowledge & Manners of a Talibul Ilm"}
        content={L1TalabulIlm}
      />
      <ContentPage subject={"Aqeeda"} content={L1Aqeeda} />
      <ContentPage subject={"Fiqh"} content={L1Fiqh} />
      <ContentPage subject={"Manhaj"} content={L1Manhaj} />
      <ContentPage subject={"Tafseer"} content={L1Tafseer} />
      <ContentPage subject={"Manners"} content={L1Manners} />
      <ContentPage subject={"Sulook"} content={L1Sulook} />
      <ContentPage subject={"Tazkiyath an Nafs"} content={L1TazkiyathunNafs} />
      <ContentPage subject={"Da'waa"} content={L1Dawa} />
      <ContentPage subject={"Seera"} content={L1History} />
    </>
  );
};

export default Contents;
