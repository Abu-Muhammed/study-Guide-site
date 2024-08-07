import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ScholarlyQuote = () => {
  return (
    <Card
      sx={{ maxWidth: 700, margin: "2rem auto", mt: "5rem", padding: "1rem" }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Shaykh Abdus Salam Ash-Shuwayir says:
        </Typography>
        <Typography gutterBottom>
          Knowledge is Easy. By Allah, Knowledge is Easy, But the problem is
          (in) two things:
        </Typography>
        <Typography gutterBottom>
          Being Inconcistent In Seeking Knowledge, And not knowing the Correct
          Path that takes to the Destination.
        </Typography>
        <Typography gutterBottom>
          If you keep your feet on the Correct Path and Traverse Continuously,
          even if you are low in Intelligence and have many commitments, You
          will attain It.
        </Typography>
        <Typography>
          As long as you upon the Correct Path, and traverse Continuously, you
          will attain it.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScholarlyQuote;
