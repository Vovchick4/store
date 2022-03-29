import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import routes from "../../config/routes";

export default function App() {
  return (
    <Suspense fallback={<p>Load...</p>}>
      <Routes>
        {routes.map(({ path, component: Component, route }) => (
          <Route key={path} path={path} element={<Component />} {...route} />
        ))}
      </Routes>
    </Suspense>
  );
}
