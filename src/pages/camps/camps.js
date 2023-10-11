import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

async function getCamp() {
  let url = "/api/camps"
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


export  function loaderCamps() {
  return   getCamp()
}

export default function Camps() {
  // const [vanis, setVans] = React.useState([]);
  // const [error] = React.useState(null)
  // we use useLoaderData hook to save data obtained from the getVans() promise function
  const data = useLoaderData()
  console.log(data)

  const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")





const filteredMap= typeFilter?data.filter(char=>char.type===typeFilter):data


  const campElements = filteredMap.map((camp) => (
        <div className="camp-tile" key={camp.id}>
          <Link to={`/camps/${camp.id}`}
          // passing the state along with the link , ie in vanDetail page
          state={{ searc: `?${searchParams.toString()}` ,type:typeFilter }}
          >
      <img src={camp.imageUrl} alt="" />
      <div className="camp-info">
    
      <h3>{camp.name} </h3>
 
        <p>
          ${camp.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`camp-type  ${camp.type} selected`}> {camp.type}</i>
      </Link>
    </div>
        
  ));

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
}

// if (error) {
//   return <h1>There was an error: {error.message}</h1>
// }


  return (
    <div className="camp-list-container">
      <h1> Explore our Camping Options </h1>
       <div className="camp-list-filter-buttons">
       <button
     onClick={()=>{handleFilterChange("type","simple")} }   className={
      `camp-type simple ${typeFilter === "simple" ? "selected" : ""}`
  }
     >Simple</button>
        <button
     onClick={()=>{handleFilterChange("type" ,"standard")}}  className={
      `camp-type simple ${typeFilter === "standard" ? "selected" : ""}`
  }
     >Standard</button>
             <button
     onClick={()=>{handleFilterChange("type","luxury")}}  className={
      `camp-type simple ${typeFilter === "luxury" ? "selected" : ""}`
  }
     >Luxury</button>
             {typeFilter?  (   <button
     onClick={()=>handleFilterChange("type" ,null)}  className="camp-type clear-filters"
     >clear</button>) :null
             }
       </div>

      <div className="camp-list">{campElements}</div>

    </div>
  );
  }












































