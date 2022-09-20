//Mui components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react components
import { Advantege, MainPage, OurWorks, Services } from "./home-page";

export default function Home() {
  const { REACT_APP_SERVICE_HOST, REACT_APP_ADVANTEGES_HOST } = process.env;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchAllInfo();
  }, []);

  async function fetchAllInfo() {
    const [advanteges, services] = await Promise.all([
      fetch(REACT_APP_ADVANTEGES_HOST).then(res => res.json()),
      fetch(REACT_APP_SERVICE_HOST).then(res => res.json())
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
