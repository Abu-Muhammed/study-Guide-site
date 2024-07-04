import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const activities = [
  {
    title: "Memorization",
    description: "Texts to be Memorized.",
    route: "/memorization",
  },
  {
    title: "Reading",
    description: "Articles and Pdf books.",
    route: "/reading",
  },
  {
    title: "Listening Classes",
    description: "Daily & Weekend Classes.",
    route: "/listening-classes",
  },
];

const TalibulIlmActivities = () => {
  return (
    <div
      style={{
        padding: "2.5rem",
        margin: "1.5rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="h5" align="center" paddingBottom="2rem">
        3 Parallel Things For A Diligent Student{" "}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={activity.route} style={{ textDecoration: "none" }}>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
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
    </div>
  );
};

export default TalibulIlmActivities;
