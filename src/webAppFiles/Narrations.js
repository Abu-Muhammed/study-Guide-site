import { Card, CardContent, Grid } from "@mui/material";
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
      <Card>
        <CardContent>
          <Link to={"/narrationsAboutSalaf"} style={{ textDecoration: "none" }}>
            Narrations About Salaf
          </Link>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Narrations;
