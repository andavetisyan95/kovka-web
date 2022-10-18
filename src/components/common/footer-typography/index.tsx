//react
import React from "react";

//MUI
import { Typography } from "@mui/material";

type FooterTypographyProps = {
  title: string
}

export default function FooterTypography({ title }:FooterTypographyProps) {
  return (
    <Typography
      sx={{
        fontSize: { lg: 20, xs: 14 },
        fontWeight: 500,
        lineHeight: { lg: "25px", xs: "20px" },
        textAlign: "center"
      }}
    >
      {title}
    </Typography>
  );
}
