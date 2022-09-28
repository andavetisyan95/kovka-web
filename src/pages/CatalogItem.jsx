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
  const { itemName } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_SERVICE_HOST}?item=${itemName}`)
      .then(res => setItemInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(itemInfo);
  return (
    <Box>
      <IndividualItem item={itemInfo[0]} />
      <ItemsExamples />
    </Box>
  );
}
