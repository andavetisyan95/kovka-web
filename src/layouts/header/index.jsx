//Mui components
import { Box, Stack } from "@mui/material";

//Components
import { CallSection } from "./bar";
import { NavBar } from "./bar";

export default function Header() {
  return (
    <Box width="100%">
      <Stack>
        <CallSection />
        <NavBar />
      </Stack>
    </Box>
  );
}
