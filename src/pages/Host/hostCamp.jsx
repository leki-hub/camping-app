import React from "react"
import { Link, useLoaderData } from "react-router-dom"
// import { requireAuth } from "../utilityfunction"

 async function getHostCamps() {
    const url =  "/api/host/camps"
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

export  function hostcampLoader() {
  
    // await requireAuth()
    return getHostCamps()
   
   
}



export default function HostCamps() {
    const data =useLoaderData()
console.log(data)

    const hostCamps = data.map(camp => (
        <Link
            to={`/host/vans/${camp.id}`}
            key={camp.id}
            className="host-camp-link-wrapper"
        >
           
            <div className="host-camp-single" key={camp.id} >
                <img src={camp.imageUrl} alt={`Phot of ${camp.name}`}  />
                <div className="host-camp-info">
                    <h3>{camp.name}</h3>
                    <p>${camp.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h1 className="host-camps-title">Your listed camps</h1>
            <div className="host-camps-list">
                {
                  
                        <section>
                            {hostCamps}
                        </section>

                 
                }
            </div>
        </section>
    )
}