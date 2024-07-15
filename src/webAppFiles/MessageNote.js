import { Typography } from "@mui/material";
import React from "react";

const MessageNote = ({ children }) => {
  return (
    <Typography
      sx={{
        marginTop: "1.5rem",
        padding: "1rem",
        backgroundColor: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Typography>
  );
};

export default MessageNote;
