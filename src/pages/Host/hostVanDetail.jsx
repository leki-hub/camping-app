import React from "react";
import { Outlet, useLoaderData} from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
import { getHostVans } from "../api";
import { requireAuth } from "../utilityfunction";

export async function hostvanDetailLoader({params}){
  await requireAuth()
  return getHostVans(params.id)
}



export default function HostVanDetails() {

  const currentVan =useLoaderData()


 
  return (
    <section>
      <Link
        to=".."
        // ie ,the link should go one step back to parent directory, and not relative to parent route
        // relative="path"
        className="back-button"
      >
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          {/* navlink is similar to Links, but it only enables csetting Classname and easy styling */}
          <NavLink to="."  >Details</NavLink>
          <NavLink to="price">Price</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        {/* the outlet component is just like a context provider, in that context attribu is used in place of "value"  used in react to define inheritable properties, so that in childern you can use the context using the useOutletContext hook*/}
        <Outlet context={{currentVan}} />
      </div>
    </section>
  );
}
