import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";

const threePaths = [
  {
    title: "Memorizing",
    description: "Texts to be Memorized.",
    route: "/memorizing",
  },
  {
    title: "Listening",
    description: "Daily & Weekend Classes.",
    route: "/listening",
  },
  {
    title: "Reading",
    description: "Articles and Pdf books.",
    route: "/reading",
  },
];

const WaysToKnowledge = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h5" align="center" paddingBottom="2rem">
        3 Paths Of Knowledge
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {threePaths.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={activity.route} style={{ textDecoration: "none" }}>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    paddingBottom: "15px !important",
                    "&:hover": { bgcolor: "#D6F9D1" },
                  }}
                >
                  <Typography variant="h6" component="div">
                    {activity.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {activity.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WaysToKnowledge;
