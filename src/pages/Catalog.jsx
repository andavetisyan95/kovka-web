//axios
import axios from "axios";
//MUi components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react components
import { MoreServices, CatalogMain } from "./catalog-page";

export default function Catalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const result = async () => setItems((await axios.get(process.env.REACT_APP_SERVICE_HOST)).data);
    result().then(res => setItems(res.data));
  }, []);

  return (
    <>
      <Box
        sx={{
          pt: { xs: 10, xl: 8 },
          px: { xs: 3, sm: 12, xl: 28.5 },
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CatalogMain items={items} />
      </Box>
      <MoreServices />
    </>
  );
}
