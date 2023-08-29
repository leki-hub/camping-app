import React from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
export default function HostVanDetails() {
  const [currentVan, setcurrentVan] = useState([]);

  const { id } = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setcurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link
        to=".."
        // ie ,the link should go one step back to parent directory, and not relative to parent route
        relative="path"
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
