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
import CampDetail, { loaderVanDetail } from "./pages/camps/CampDetail";
import Layout from "./component/Layout";

// we import server module that acts as our server having data, to fetch data from ie to initiate a fakeRequest
import "./server.";
import Dashboard from "./pages/Host/dashboard";
import Income from "./pages/Host/income";
import Reviews from "./pages/Host/reviews";
import HostLayout from "./component/hostLayout";
import HostCamps, { hostcampLoader} from "./pages/Host/hostCamp";
import HostCampDetails, {hostvanDetailLoader} from "./pages/Host/hostCampDetail";
import NotFound from "./pages/notFound";
import Error from "./component/error";
import Login, { loaderLogin } from "./pages/login";
import Camps, { loaderCamps } from "./pages/camps/camps";
import CampPhotos from "./pages/Host/hostCampPhoto";
import CampInfo from "./pages/Host/hostCampinfo";
import CampPrices from "./pages/Host/hostCampPricing";

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
        element={<Camps />}
        errorElement={<Error />}
        loader={loaderCamps}
      />
      {/* we create a dynamic route parameter by using a colon inside the path nested vans route * nb id is just randomly chosen leters- it is but just a placeholder*/}
      <Route
        path="vans/:id"
        element={<CampDetail />}
        loader={loaderVanDetail}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route
          path="/host/dashboard"
          element={<Dashboard />}
          errorElement={<Error />}
        />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route index element={<HostCamps />} 
                       loader={hostcampLoader} />

        <Route
          path="vans/:id"
          element={<HostCampDetails />}
          loader={hostvanDetailLoader}
        >
          <Route
            index
            element={<CampInfo />}
           
          />
          <Route
            path="price"
            element={<CampPrices />}
          
          />

          <Route path="photos" element={<CampPhotos />} 
          
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
