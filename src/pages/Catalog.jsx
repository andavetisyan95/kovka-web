import { Box } from "@mui/material";
import { MoreServices, Main } from "./catalog-page";

export default function Catalog() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Main />
      <MoreServices />
    </Box>
  );
}
