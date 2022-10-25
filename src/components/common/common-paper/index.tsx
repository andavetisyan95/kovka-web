import React from "react";

//Mui components
import { Box, Paper, Stack, Typography } from "@mui/material";
import { CommonProps } from "src/types/common-types";

export default function CommonPaper({ title, children }: CommonProps) {
  return (
    <Paper
      sx={{
        bgcolor: "rgba(0,0,0,0.7)",
        py: { lg: 7, sm: 10, xs: 5 },
        px: { sm: 5, lg: 9, xs: 3 }
      }}
    >
      <Stack spacing={{ sm: 7.5, xs: 5 }}>
        <Box>
          <Typography
            sx={{
              color: "primary.main",
              fontFamily: "Play",
              fontStyle: "normal",
              fontSize: { xs: 30, sm: 50, lg: "3.125vw" },
              lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
              fontWeight: 400
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box>{children}</Box>
      </Stack>
    </Paper>
  );
}
