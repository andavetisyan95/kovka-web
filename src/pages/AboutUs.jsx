//react
import axios from "axios";
//Mui components
import { Box } from "@mui/material";
//React hooks
import { useState, useEffect } from "react";
//Components
import { Main, Machins } from "./about-page";
import { OurWorks } from "src/components/common";

export default function AboutUs() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000/services")
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <Box>
      <Main />
      <OurWorks works={items} />
      <Machins />
    </Box>
  );
}
