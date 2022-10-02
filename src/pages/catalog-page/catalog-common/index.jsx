//Mui components
import { Box, Stack, Typography } from "@mui/material";

export default function CatalogCommon({ children, title }) {
  return (
    <Stack sx={{ gap: { xs: 5, sm: 10 } }}>
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
          fontFamily: "Play",
          fontStyle: "normal",
          fontSize: { sm: 50, xs: 30 },
          lineHeight: { lg: "69px", sm: "70px", xs: "42px" },
          fontWeight: 400
        }}
      >
        {title}
      </Typography>
      <Box sx={{ pb: { xs: 5, sm: 10 } }}>{children}</Box>
    </Stack>
  );
}
