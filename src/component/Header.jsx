
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Header(){

    return(
        <>
        <header>
        <Link className="site-logo" to="/">Lesmo Safaris</Link>
        <nav>
           <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/about">About</NavLink>
           <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/vans">Camps</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null} to="/host">Host</NavLink>
         
          <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/car-icon.png"
                        className="login-icon"
                        alt=""
                    />
                    </Link>
                   
        </nav>
      </header>
        </>
    )
}
