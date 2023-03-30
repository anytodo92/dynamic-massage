import MainLayout from "../components/layouts/Main";

import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { withLoading } from "../hocs/withLoading.hoc";

const BASE_PATH = "/";

const HomePage = lazy(() => import("../views/Home"));
const ImpressumPage = lazy(() => import("../views/Impressum"));
const DatenschutzPage = lazy(() => import("../views/Datenschutz"));

const Home = withLoading(HomePage);
const Impressum = withLoading(ImpressumPage);
const Datenschutz = withLoading(DatenschutzPage);

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_PATH} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
