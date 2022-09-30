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

  async function fetchAllInfo() {
    const [services, advanteges] = await Promise.all([
      fetch(process.env.REACT_APP_SERVICE_HOST).then(res => res.json()),
      fetch(process.env.REACT_APP_ADVANTEGES_HOST).then(res => res.json())
    ]);
    setKovkaData({ services, advanteges });
  }

  return (
    <Box>
      <Box
        sx={{
          background: "url(/images/mainBack.svg)",
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: -1,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh"
        }}
      />{" "}
      <Box sx={{ px: { xl: 28.5, sm: 12, xs: 3 } }}>
        <MainPage />
        <Services services={kovkaData?.services} />
        <OurWorks />
      </Box>
      <Advantege advanteges={kovkaData?.advanteges} />
    </Box>
  );
}
