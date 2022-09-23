//react hooks
import { useParams } from "react-router";

export default function CatalogItem() {
  const { itemName } = useParams();
  console.log(itemName);
  return <div>Catalog Item </div>;
}
