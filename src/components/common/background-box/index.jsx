import { Box } from "@mui/material";

export default function BoxWithBackground({ img, children }) {
  return (
    <Box
      sx={{
        background: `url(${img})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {children}
    </Box>
  );
}
