//Mui components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react components
import { Advantege, MainPage, OurWorks, Services } from "./home-page";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchAllInfo();
  });
  //env files are'nt work

  async function fetchAllInfo() {
    const [advanteges, services] = await Promise.all([
      fetch("http://localhost:8000/advanteges").then(res => res.json()),
      fetch("http://localhost:8000/services").then(res => res.json())
    ]);
    setData({ advanteges, services });
  }
  return (
    <Box>
      <MainPage />
      <Services services={data?.services} />
      <OurWorks works={data?.services} />
      <Advantege advanteges={data?.advanteges} />
    </Box>
  );
}
