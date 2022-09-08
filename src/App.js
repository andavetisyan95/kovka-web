//hooks and helpers
import { Routes, Route } from "react-router";
//components
import Home from "./components/pages/Home";
import Catalog from "./components/pages/Catalog";
import Prices from "./components/pages/Prices";
import AboutUs from "./components/pages/AboutUs";
import Contacts from "./components/pages/Contacts";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
