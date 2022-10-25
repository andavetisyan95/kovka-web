import React from "react";

//Mui components
import { Box, Stack, Typography } from "@mui/material";

//types
import { CommonProps } from "src/types/common-types";

export default function CommonBox({ title, children }: CommonProps) {
  return (
    <Stack spacing={{ sm: 8, xs: 5 }} pt={{ xs: 10, sm: 15, lg: 20 }}>
      <Box>
        <Typography
          sx={{
            fontSize: { sm: 40, xs: 30 },
            color: "primary.main",
            fontFamily: "Play",
            lineHeight: { lg: "69px", sm: "70px", xs: "42px" }
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box>{children}</Box>
    </Stack>
  );
}
