import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EasyKnowledge = () => {
  return (
    <Card sx={{ maxWidth: 700, margin: "1rem auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          ஷைஃக் அப்துஸ்ஸலாம் அஷ் ஷுவையிர் கூறுகின்றார்கள்:
        </Typography>
        <Typography variant="body1" paragraph>
          கல்வி எளிதான ஒன்றாகும். அல்லாஹ்வின் மீது சத்தியமாக கல்வி எளிதான
          ஒன்றாகும். ஆனால் இரண்டு விடயங்கள் பிரச்சினையாக இருக்கின்றன:
        </Typography>
        <Typography variant="body1" paragraph>
          கல்வி தேடுவதில் தொடர்ச்சியாக இல்லாதிருப்பது, மேலும் இலக்கிற்கு கொண்டு
          சேர்க்கும் (அதற்குரிய) சரியான பாதையை அறியாதிருப்பது.
        </Typography>
        <Typography variant="body1" paragraph>
          நீ சரியான பாதையின் மீது உன் பாதத்தை வைத்து தொடர்ச்சியாக பயணித்தால், நீ
          புத்திசாலித்தனத்தில் மிகக் குறைவானவனாக, அதிகமான கடமைகள் உடையவனாக
          இருந்தாலும் சரி, நீ அதை (கல்வியை) அடைந்து கொள்வாய்.
        </Typography>
        <Typography variant="body1" paragraph>
          நீ நேரான பாதையின் மீதிருந்து, இடைவிடாது அதன் மீது தொடர்ச்சியாக
          இருக்கும் வரை நீ அதை (கல்வியை) அடைந்து கொள்வாய்.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EasyKnowledge;
