import React from "react"
import { useState } from "react"
import { Link,  useLocation,  useParams } from "react-router-dom"

export default function VanDetail() {
    const[van,setVan]= useState(null)
    // ie, grab the parameters from the url using useParams hook
    const {id}= useParams()
    // we use the uselocation hook to receive state send alongside the link that directed to this page ,ie link in Van page, it is esentialy to help identify initially clicked state 
  const location = useLocation()
  console.log(location)
    React.useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then(res => res.json())
         .then(data=> setVan(data.vans))
    },[id])

//    optional chaining. ie, if state property exists in location object, then rerturc its searc property, otherwise return null, it works on same way as  const search = location.state && location.state.search || ""
    const search = location.state?.searc || ""
    const type= location.state?.type || "all"
    return(
        <div className="van-detail-container">
            <Link
       
                to={`..${search}`}
                
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>






        {van ? (
            
            <div className="van-detail">
                <img src={van.imageUrl} alt=""/>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
               
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    ) }