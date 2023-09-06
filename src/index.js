import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loaderVans } from "./pages/vans/vans";
import VanDetail, { loaderVanDetail } from "./pages/vans/VanDetail";
import Layout from "./component/Layout";

// we import server module that acts as our server having data, to fetch data from ie to initiate a fakeRequest
import "./server.";
import Dashboard from "./pages/Host/dashboard";
import Income from "./pages/Host/income";
import Reviews from "./pages/Host/reviews";
import HostLayout from "./component/hostLayout";
import HostVans, { hostvanLoader } from "./pages/Host/hostVan";
import HostVanDetails, {
  hostvanDetailLoader,
} from "./pages/Host/hostVanDetail";
import VanInfo from "./pages/Host/hostVaninfo";
import VanPhotos from "./pages/Host/hostVanPhoto";

import VanPrices from "./pages/Host/hostVanPricing";
import NotFound from "./pages/notFound";
import Error from "./component/error";

import { requireAuth} from "./pages/utilityfunction";
import Login, { loaderLogin } from "./pages/login";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} 
         loader={loaderLogin}
      
      
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={loaderVans}
      />
      {/* we create a dynamic route parameter by using a colon inside the path nested vans route * nb id is just randomly chosen leters- it is but just a placeholder*/}
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={loaderVanDetail}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          path="/host/dashboard"
          element={<Dashboard />}
          loader={async () => await requireAuth()}
          errorElement={<Error />}
        />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route index element={<HostVans />} 
                          
                       loader={hostvanLoader} />

        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hostvanDetailLoader}
        >
          <Route
            index
            element={<VanInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="price"
            element={<VanPrices />}
            loader={async () => await requireAuth()}
          />

          <Route path="photos" element={<VanPhotos />} 
            loader={ async()=>
           await   requireAuth()   
             } 
          />
          <Route />
        </Route>
      </Route>
      {/* below is a catch all , ie * route incase one tries to look for a path not specified as a child of Layout wrapper component */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
