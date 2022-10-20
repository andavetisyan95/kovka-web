import React from "react";

//hooks and helpers
import { Routes, Route } from "react-router";

//components
import MainLayout from "./layouts/MainLayout";

// source
import { routes } from "./routes";

function App() {
  return (
    <MainLayout>
      <Routes>
        {routes.map(({ id, path, Component }) => (
          <Route key={`routes_${id}`} path={path} element={<Component />} />
        ))}
      </Routes>
    </MainLayout>
  );
}

export default App;
