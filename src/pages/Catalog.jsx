//axios
import axios from "axios";

//react hooks
import { useCallback, useEffect, useState } from "react";

//MUi components
import { Box } from "@mui/material";

//react components
import { MoreServices, CatalogMain } from "./catalog-page";

export default function Catalog() {
  const [items, setItems] = useState([]);

  const getServices = useCallback(async () => {
    const { data } = await axios.get(process.env.REACT_APP_SERVICE_HOST);
    setItems(data ?? []);
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  return (
    <Box>
      <Box
        pt={{ xs: 10, xl: 8 }}
        px={{ xs: 3, sm: 12, xl: 28.5 }}
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <CatalogMain items={items} />
      </Box>
      <MoreServices />
    </Box>
  );
}
