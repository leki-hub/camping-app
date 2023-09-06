import React from "react"
// import { useState } from "react"
import { Link,  useLoaderData,  useLocation } from "react-router-dom"
import { getVans } from "../api"


export function loaderVanDetail({params}) {
   
    return getVans(params.id)
  }

export default function VanDetail() {
    const van = useLoaderData()
    // we use the uselocation hook to receive state send alongside the link that directed to this page ,ie link in Van page, it is esentialy to help identify initially clicked state 
  const location = useLocation()

//    optional chaining. ie, if state property exists in location object, then rerturc its searc property, otherwise return null, it works on same way as  const search = location.state && location.state.search || ""
    const search = location.state?.searc || ""
    const type= location.state?.type || "all"
    return(
        <div className="van-detail-container">
            <Link
       
                to={`..${search}`}
                
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} destinations</span></Link>






     
            
            <div className="van-detail">
                <img src={van.imageUrl} alt=""/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
            
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">-Book with us-</button>
               
            </div>
      
    </div>
    ) }