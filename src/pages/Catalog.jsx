import { Box } from "@mui/material";
import { MoreServices } from "./catalog-page";

export default function Catalog() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Catalog />
      <MoreServices />
    </Box>
  );
}
