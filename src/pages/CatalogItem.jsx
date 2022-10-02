//axios
import axios from "axios";
//MUi components
import { Box } from "@mui/material";
//react hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IndividualItem, ItemsExamples } from "./catalog-page";
//react components

export default function CatalogItem() {
  const [itemInfo, setItemInfo] = useState([]);
  const [examples, setExamples] = useState([]);

  //get query params
  const { itemName } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVICE_HOST}?item=${itemName}`)
      .then(res => setItemInfo(res.data))
      .catch(err => console.log(err));
  }, [itemName]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVICE_HOST)
      .then(res => setExamples(res.data))
      .catch(err => console.log(err));
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
        <IndividualItem item={itemInfo[0]} />
      </Box>
      <ItemsExamples examples={examples} />
    </>
  );
}
