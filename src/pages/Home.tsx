import React from "react";

//react hooks
import { useEffect, useState } from "react";

//Mui components
import { Box } from "@mui/material";

//react components
import { Advantege, MainPage, Services } from "./home-page";
import { BoxBackground, OurWorks } from "../components/common";

//types
import { DataInsertion } from "../types/common-types";

//function for title generation
import { TabTitle } from "src/utils/GeneralFunctions";

export default function Home() {
  TabTitle("Главная");

  const [kovkaData, setKovkaData] = useState<DataInsertion>({});

  useEffect(() => {
    fetchAllInfo();
  }, []);

  async function fetchAllInfo() {
    const [services, advanteges] = await Promise.all([
      fetch(process.env.REACT_APP_SERVICE_HOST as string).then(res => res.json()),
      fetch(process.env.REACT_APP_ADVANTEGES_HOST as string).then(res => res.json())
    ]);
    setKovkaData({ services, advanteges });
  }

  return (
    <>
      <BoxBackground imgName={"/images/mainBack.jpg"} />
      <Box px={{ xl: 28.5, sm: 12, xs: 3 }} display="flex" flexDirection="column">
        <MainPage />
        <Services services={kovkaData?.services} />
        <OurWorks />
      </Box>
      <Advantege advanteges={kovkaData?.advanteges} />
    </>
  );
}
