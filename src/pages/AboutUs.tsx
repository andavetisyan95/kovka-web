//react
import React from 'react';

//Mui components
import { Box } from "@mui/material";

//Components
import { BoxBackground, OurWorks } from '../components/common';
import Main from './about-page/main';
import Machins from './about-page/machins';

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
