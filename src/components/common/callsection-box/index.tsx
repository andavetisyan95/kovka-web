import React from "react";

// Mui components
import { Box, Link, Typography } from "@mui/material";

type CallProps={
  text: string,
  dir: string
}

export default function CallSectionBox({ text, dir }:CallProps) {
  return (
    <Box>
      <Link sx={{ textDecoration: "none" }} href={dir}>
        <Typography sx={{ fontSize: 24, fontWeight: 500, lineHeight: "30px" }}>{text}</Typography>
      </Link>
    </Box>
  );
}
