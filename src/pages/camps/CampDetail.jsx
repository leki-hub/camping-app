import React from "react"
// import { useState } from "react"
import { Link,  useLoaderData,  useLocation } from "react-router-dom"


async function getCamps(id) {
    let url = `/api/camps/${id}`
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


export function loaderVanDetail({params}) {
   
    return getCamps(params.id)
  }

export default function CampDetail() {
    const camp = useLoaderData()
    // we use the uselocation hook to receive state send alongside the link that directed to this page ,ie link in Van page, it is esentialy to help identify initially clicked state 
  const location = useLocation()

//    optional chaining. ie, if state property exists in location object, then rerturc its searc property, otherwise return null, it works on same way as  const search = location.state && location.state.search || ""
    const search = location.state?.searc || ""
    const type= location.state?.type || "all"
    return(
        <div className="camp-detail-container">
            <Link
       
                to={`..${search}`}
                
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} destinations</span></Link>






     
            
            <div className="camp-detail">
                <img src={camp.imageUrl} alt=""/>
                <i className={`camp-type ${camp.type} selected`}>{camp.type}</i>
                <h2>{camp.name}</h2>
            
                <p className="camp-price"><span>${camp.price}</span>/day</p>
                <p>{camp.description}</p>
                <button className="link-button">-Book with us-</button>
               
            </div>
      
    </div>
    ) }