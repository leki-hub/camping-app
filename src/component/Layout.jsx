import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
        <Header/>
        <main>
            <Outlet />
        </main>
      
        <Footer/>
        </div>
        
    )
}