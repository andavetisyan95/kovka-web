//Mui components
import { Box } from "@mui/material";
//Components
import { Main, Machins } from "./about-page";
import { BoxBackground, OurWorks } from "src/components/common";

export default function AboutUs() {
  return (
    <>
      <BoxBackground imgName="/images/aboutPage.jpg" />
      <Box sx={{ px: { xs: 3, sm: 12, xl: 28.5 } }}>
        <Main />
        <OurWorks />
      </Box>
      <Box sx={{ pt: { xs: 10, sm: 15, lg: 20 } }}>
        <Machins />
      </Box>
    </>
  );
}
