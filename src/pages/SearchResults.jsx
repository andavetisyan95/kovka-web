//axios
import axios from "axios";
//Mui components
import { Box, Typography, Stack } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
//react router
import { useLocation } from "react-router";
import { CatalogMain } from "./catalog-page";

export default function SearchResults() {
  const location = useLocation();
  const result = location.search.split("?")[1].split("=")[1];

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVICE_HOST}?q=${result}`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, [result]);

  const newArr = [];
  items?.filter(el => {
    if (el.title.includes(result)) {
      newArr.push(el);
    }
    return newArr;
  });

  const titleArr = [];
  newArr.filter(({ title }) => {
    titleArr.push(title);
    return titleArr;
  });

  return (
    <main>
      <Box>
        <Stack spacing={10} sx={{ py: { xs: 25, sm: 27.5 }, px: { xs: 12, sm: 27.5 } }}>
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
            {titleArr.toString().includes(result) ? (
              <CatalogMain items={newArr} />
            ) : (
              <Typography sx={{ fontSize: 30, lineHeight: "38px" }}>
                По запросу {result} ничего не найдено.
              </Typography>
            )}
          </Box>
        </Stack>
      </Box>
    </main>
  );
}
