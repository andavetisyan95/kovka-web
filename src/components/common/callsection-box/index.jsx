// Mui components
import { Box, Link, Typography } from "@mui/material";

export default function CallSectionBox({ text, dir }) {
  return (
    <Box>
      <Link sx={{ textDecoration: "none" }} href={dir}>
        <Typography sx={{ fontSize: 24, fontWeight: 500, lineHeight: "30px" }}>{text}</Typography>
      </Link>
    </Box>
  );
}
