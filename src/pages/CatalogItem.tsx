import React from "react";

import axios from "axios";

//react hooks
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

//MUi components
import { Box } from "@mui/material";

//react components
import { IndividualItem, ItemsExamples } from "./catalog-page";

//types
import { Product } from "../types/common-types";

export default function CatalogItem() {
  const [itemInfo, setItemInfo] = useState<Product[]>([]);
  const [examples, setExamples] = useState<[]>([]);

  //get query params
  const { itemName } = useParams();

  const getItemName = useCallback(async () => {
    const { data } = await axios.get<Product[]>(
      `${process.env.REACT_APP_SERVICE_HOST}?item=${itemName}`
    );
    setItemInfo(data);
  }, [itemName]);

  const fetchData = useCallback(async () => {
    const { data } = await axios.get<[]>(process.env.REACT_APP_SERVICE_HOST as string);
    setExamples(data);
  }, []);

  useEffect(() => {
    getItemName();
    fetchData();
  }, [getItemName, fetchData]);

  return (
    <>
      <Box
        pt={{ xs: 10, xl: 8 }}
        px={{ xs: 3, sm: 12, xl: 28.5 }}
        sx={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <IndividualItem product={itemInfo?.[0]} />
      </Box>
      <ItemsExamples examples={examples} />
    </>
  );
}
