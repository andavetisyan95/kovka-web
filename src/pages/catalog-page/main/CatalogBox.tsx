import React from "react";

//react hooks
import { useState } from "react";

//Mui components
import { Box, Collapse, Stack, Typography } from "@mui/material";

type CatalogBoxProps = {
  title: string;
  description: string;
  image: string;
};

export default function CatalogBox({ title, description, image }: CatalogBoxProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box
      className="clickable"
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      position="relative"
    >
      <img style={{ objectFit: "cover", width: "100%", height: "380px" }} src={image} alt={image} />
      <Collapse
        sx={{
          width: "100%",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.4)",
          bottom: 0
        }}
        timeout={600}
        in={showInfo}
        orientation="vertical"
        collapsedSize={80}
      >
        <Box width="100%">
          <Stack spacing={6.5} pl={5} pb={{ xs: 2, lg: 5 }}>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 20, md: "1.563vw" },
                lineHeight: { xs: "25px", sm: "25px" }
              }}
              color={showInfo ? "#FFDB7F" : "white"}
            >
              {title}
            </Typography>

            <Typography sx={{ fontSize: 16, lineHeight: "20px", textAlign: "start" }}>
              {description}
            </Typography>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
}
