import React from "react";
import { Box, Link, Typography } from "@mui/material";

const ContentPage = ({ subject, content }) => {
  const cont = content.map((cont, i) => (
    <li key={cont.title}>
      <Link
        href={cont.link}
        sx={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        {i + 1}. {cont.title}
      </Link>
    </li>
  ));

  return (
    <Box
      sx={{
        pl: "16px",
        pb: "16px",
      }}
    >
      <Typography variant="h6">{subject}</Typography>
      <ul>{cont}</ul>
      <>-------------------------------------------------------------</>
    </Box>
  );
};

export default ContentPage;
