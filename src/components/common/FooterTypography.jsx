import { Typography } from "@mui/material";

export default function FooterTypography({ title }) {
  return (
    <Typography
      sx={{
        fontSize: { lg: "20px", xs: "16px" },
        fontWeight: 500,
        lineHeight: { lg: "25px", xs: "20px" },
        textAlign: "center"
      }}
    >
      {title}
    </Typography>
  );
}
