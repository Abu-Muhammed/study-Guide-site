import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Narrations = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        py: "1rem",
        backgroundColor: "#f5f5f5",
        mt: "1rem",
      }}
    >
      <Link to={"/narrationsAboutSalaf"} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingBottom: "15px !important",
            }}
          >
            <Typography variant="h6" component="div">
              Salaf In Pursuit Of Knowledge
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default Narrations;
