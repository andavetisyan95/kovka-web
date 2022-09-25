//react
import axios from "axios";
//Mui components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react components
import { Advantege, MainPage, Services } from "./home-page";
import { OurWorks } from "src/components/common";

export default function Home() {
  const [kovkaData, setKovkaData] = useState([]);

  useEffect(() => {
    fetchAllInfo();
  }, []);
  //env files are'nt work

  async function fetchAllInfo() {
    const [services, advanteges] = await Promise.all([
      fetch(process.env.REACT_APP_SERVICE_HOST).then(res => res.json()),
      fetch(process.env.REACT_APP_ADVANTEGES_HOST).then(res => res.json())
    ]);
    setKovkaData({ services, advanteges });
  }

  return (
    <Box>
      <MainPage />
      <Services services={kovkaData?.services} />
      <OurWorks />
      <Advantege advanteges={kovkaData?.advanteges} />
    </Box>
  );
}
