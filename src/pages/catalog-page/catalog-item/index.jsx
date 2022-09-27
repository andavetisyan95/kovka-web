//axios
import axios from "axios";
//react hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function CatalogItem() {
  const [itemInfo, setItemInfo] = useState([]);
  const { itemName } = useParams();
  useEffect(() => {
    axios(`http://localhost:8000/services?item=${itemName}`)
      .then(res => setItemInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  console.log(itemInfo[0].title);
  return <div>Catalog Item </div>;
}
