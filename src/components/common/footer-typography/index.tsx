import React from "react";

//MUI
import { Typography } from "@mui/material";

type FooterTypographyProps = {
  title: string;
};

export default function FooterTypography({ title }: FooterTypographyProps) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 14, sm: 16, lg: 20 },
        fontWeight: 500,
        lineHeight: { lg: "25px", xs: "20px" },
        textAlign: "center"
      }}
    >
      {title}
    </Typography>
  );
}
