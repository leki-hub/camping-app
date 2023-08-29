import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./component/Layout";

// we import server module that acts as our server having data, to fetch data from ie to initiate a fakeRequest
import "./server.";
import Dashboard from "./pages/Host/dashboard";
import Income from "./pages/Host/income";
import Reviews from "./pages/Host/reviews";
import HostLayout from "./component/hostLayout";
import HostVans from "./pages/Host/hostVan";
import HostVanDetails from "./pages/Host/hostVanDetail";
import VanInfo from "./pages/Host/hostVaninfo";
import VanPhotos from "./pages/Host/hostVanPhoto";

import VanPrices from "./pages/Host/hostVanPricing";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          {/* we create a dynamic route parameter by using a colon inside the path nested vans route * nb id is just randomly chosen leters- it is but just a placeholder*/}
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<VanInfo />} />
              <Route path="price" element={<VanPrices />} />

              <Route path="photos" element={<VanPhotos />} />
              <Route />
            </Route>
          </Route>
          {/* below is a catch all , ie * route incase one tries to look for a path not specified as a child of Layout wrapper component */}
          <Route path="*" element={<NotFound/>}   />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
