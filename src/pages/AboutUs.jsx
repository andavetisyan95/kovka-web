//Mui components
import { Box } from "@mui/material";
//React hooks
import { useState, useEffect } from "react";
//Components
import { Main, Machins } from "./about-page";
import { OurWorks } from "./home-page";

export default function AboutUs() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then(res => res.json())
      .then(results => setItems(results));
  }, []);
  return (
    <Box>
      <Main />
      <OurWorks works={items} />
      <Machins />
    </Box>
  );
}
