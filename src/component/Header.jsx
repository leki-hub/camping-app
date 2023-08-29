
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header(){



    return(
        <>
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host">Host</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans">Vans</NavLink>

        </nav>
      </header>
        </>
    )
}