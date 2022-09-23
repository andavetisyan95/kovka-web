import { About, Catalog, CatalogItem, Contacts, Home, PageNotFound, Prices, Search } from "./pages";

export const routes = [
  { id: 0, path: "/", Component: Home },
  { id: 1, path: "/catalog", Component: Catalog },
  { id: 2, path: "/catalog_item/:itemName", Component: CatalogItem },
  { id: 3, path: "/search_results", Component: Search },
  { id: 4, path: "/prices", Component: Prices },
  { id: 5, path: "/aboutUs", Component: About },
  { id: 6, path: "/contacts", Component: Contacts },
  { id: 7, path: "*", Component: PageNotFound }
];
