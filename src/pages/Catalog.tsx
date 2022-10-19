//react
import React from 'react';

//axios
import axios from "axios";

//react hooks
import { useCallback, useEffect, useState } from "react";

//MUi components
import { Box } from "@mui/material";

//react components
import { CatalogMain, MoreServices } from './catalog-page';

//types
import { Product } from '../types/CommonTypes';



export default function Catalog() {
  const [items, setItems] = useState<Product[]>([]);

  const getServices = useCallback(async () => {
    const { data } = await axios.get<Product[]>(process.env.REACT_APP_SERVICE_HOST as string);
    setItems(data);
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
