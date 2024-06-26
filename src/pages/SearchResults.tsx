//react
import React from "react";

//axios
import axios from "axios";

//react hooks
import { useCallback, useEffect, useState } from "react";

//types
import { Product } from "src/types/common-types";

//react router
import { useLocation } from "react-router";

//Mui components
import { Box, Typography, Stack } from "@mui/material";

//react components
import { CatalogMain } from "./catalog-page";

//function for title generation
import { TabTitle } from "src/utils/GeneralFunctions";

export default function SearchResults() {
  TabTitle("Результат поиска");
  const location = useLocation();
  const result = location.search.split("?")[1].split("=")[1];

  const [items, setItems] = useState<Product[]>([]);

  const handleGetItems = useCallback(async () => {
    const { data } = await axios.get<Product[]>(
      `${process.env.REACT_APP_SERVICE_HOST}?title_like=${result}`
    );
    setItems(data);
  }, [result]);

  useEffect(() => {
    handleGetItems();
  }, [handleGetItems]);

  const newArr: Product[] = [];
  if (items.length > 0) {
    items?.filter(el => {
      if (items?.some(el => el.title?.includes(result))) {
        newArr.push(el);
      }
      return newArr;
    });
  }

  return (
    <Box>
      <Stack spacing={10} py={{ xs: 25, sm: 27.5 }} px={{ xs: 12, sm: 27.5 }}>
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "primary.main",
              fontSize: { sm: 50, xs: 30 },
              lineHeigh: { xs: "42px", sm: "70px" }
            }}
          >
            РЕЗУЛЬТАТ ПОИСКА
          </Typography>
        </Box>
        <Box>
          {items.length ? (
            <CatalogMain items={newArr} />
          ) : (
            <Typography sx={{ fontSize: 30, lineHeight: "38px" }}>
              По запросу {result} ничего не найдено.
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
