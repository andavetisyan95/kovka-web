//Mui components
import { Box, Collapse, Grid, Typography } from "@mui/material";
//react hooks
import { useState } from "react";

export default function CatalogBox({ title, description, image, item }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Box
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
      sx={{ cursor: "pointer", position: "relative" }}
    >
      <img style={{ objectFit: "cover" }} width="100%" height={380} src={image} alt={image} />
      <Collapse
        sx={{
          width: "100%",
          position: "absolute",
          background: "rgba(0, 0, 0, 0.3)",
          bottom: 0
        }}
        timeout={600}
        in={showInfo}
        orientation="vertical"
        collapsedSize={80}
      >
        <Box
          sx={{
            width: "100%"
          }}
        >
          <Grid
            container
            spacing={8}
            sx={{ pt: "5px", pl: "40px", pb: { xs: "24px", lg: "40px" } }}
          >
            <Grid item>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "25px", md: "1.563vw" },
                  lineHeight: { xs: "25px", sm: "38px" }
                }}
                color={showInfo ? "#FFDB7F" : "white"}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: "16px", lineHeight: "20px", textAlign: "start" }}>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
}
