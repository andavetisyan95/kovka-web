import { FC } from "react";

//components
import AboutUs from "./pages/AboutUs";
import Catalog from "./pages/Catalog";
import CatalogItem from "./pages/CatalogItem";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Prices from "./pages/Prices";
import SearchResults from "./pages/SearchResults";

interface Routes {
  id: number;
  path: string;
  Component: FC;
}

export const routes: Array<Routes> = [
  { id: 0, path: "/", Component: Home },
  { id: 1, path: "/catalog", Component: Catalog },
  { id: 2, path: "/catalog_item/:itemName", Component: CatalogItem },
  { id: 3, path: "/search_results", Component: SearchResults },
  { id: 4, path: "/prices", Component: Prices },
  { id: 5, path: "/aboutUs", Component: AboutUs },
  { id: 6, path: "/contacts", Component: Contacts },
  { id: 7, path: "*", Component: PageNotFound }
];
