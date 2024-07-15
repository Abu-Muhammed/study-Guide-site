import { Link } from "@mui/material";
import React from "react";

const LinkUnderText = ({ link, text }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      {text}
    </Link>
  );
};

export default LinkUnderText;
