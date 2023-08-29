import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostTyles= {
  fontWeight: "bold",
  color: "#161616",
  textDecoration:"underline"
}


export default function HostLayout() {
  return (
    <>
   
      <nav className="host-nav">
        <NavLink style={({isActive})=>isActive?HostTyles:null} end   to="/host">Dashboard</NavLink>
        <NavLink style={({isActive})=>isActive?HostTyles:null}    to="income">Income</NavLink>
        <NavLink  style={({isActive})=>isActive?HostTyles:null}    to="vans">Vans</NavLink>
        <NavLink style={({isActive})=>isActive?HostTyles:null}     to="reviews">Reviews</NavLink> 
      </nav>
      <Outlet />
    </>
  );
}
