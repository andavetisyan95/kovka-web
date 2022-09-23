//react
import axios from "axios";
//Mui components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react components
import { Advantege, MainPage, OurWorks, Services } from "./home-page";

export default function Home() {
  const [kovkaData, setKovkaData] = useState([]);

  useEffect(() => {
    fetchAllInfo();
  }, []);
  //env files are'nt work

  async function fetchAllInfo() {
    const [advanteges, services] = await Promise.all([
      axios
        .get(process.env.REACT_APP_ADVANTEGES_HOST)
        .then(res => {
          setKovkaData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err)),
      axios
        .get(process.env.REACT_APP_SERVICE_HOST)
        .then(res => {
          setKovkaData(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err))
    ]);
    setKovkaData({ advanteges, services });
    console.log(kovkaData);
  }

  return (
    <Box>
      <MainPage />
      <Services services={kovkaData?.services} />
      <OurWorks works={kovkaData?.services} />
      <Advantege advanteges={kovkaData?.advanteges} />
    </Box>
  );
}
