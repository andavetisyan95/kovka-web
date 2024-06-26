import React from "react";

//MUI
import { Box } from "@mui/material";

type BackgroundProps ={
  imgName: string
}

export default function BoxWithBackground({ imgName }:BackgroundProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        zIndex: -1,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <img src={imgName} alt={imgName} style={{ objectFit: "cover" }} width="100%" height="100%" />
    </Box>
  );
}
