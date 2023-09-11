import React from "react";
import { Outlet, useLoaderData} from "react-router-dom";
import { Link,NavLink } from "react-router-dom";

async function getHostVans(id) {
  const url = `/api/host/camps/${id}` 
  const res = await fetch(url)
  if (!res.ok) {
      return {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.camps
}


export async function hostvanDetailLoader({params}){

  return getHostVans(params.id)
}


export default function HostCampDetails() {

  const currentCamp =useLoaderData()

  return (
    <section>
      <Link
        to=".."
        // ie ,the link should go one step back to parent directory, and not relative to parent route
        // relative="path"
        className="back-button"
      >
        &larr; <span>Back to all camps</span>
      </Link>
      <div className="host-camp-detail-layout-container">
        <div className="host-camp-detail">
          <img src={currentCamp.imageUrl} alt="" />
          <div className="host-camp-detail-info-text">
            <i className={`camp-type camp-type-${currentCamp.type}`}>
              {currentCamp.type}
            </i>
            <h3>{currentCamp.name}</h3>
            <h4>${currentCamp.price}/day</h4>
          
          </div>
        </div>
        <nav className="host-camp-detail-nav">
          {/* navlink is similar to Links, but it only enables csetting Classname and easy styling */}
          <NavLink to="."  >Details</NavLink>
          <NavLink to="price">Price</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>
        {/* the outlet component is just like a context provider, in that context attribu is used in place of "value"  used in react to define inheritable properties, so that in childern you can use the context using the useOutletContext hook*/}
        <Outlet context={{currentCamp}} />
      </div>
    </section>
  );
}
