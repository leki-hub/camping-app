import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vanis, setVans] = React.useState([]);
  


  const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    console.log(typeFilter)

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

const filteredMap= typeFilter?vanis.filter(char=>char.type===typeFilter):vanis


  const vanElements = filteredMap.map((van) => (
        <div className="van-tile" key={van.id}>
          <Link to={`/vans/${van.id}`}
          // passing the state along with the link , ie in vanDetail page
          state={{ searc: `?${searchParams.toString()}` ,type:typeFilter }}
          >
      <img src={van.imageUrl} alt="" />
      <div className="van-info">
    
      <h3>{van.name} </h3>
 
        <p>
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type  ${van.type} selected`}> {van.type}</i>
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


  return (
    <div className="van-list-container">
      <h1> Explore our Van Options </h1>
       <div className="van-list-filter-buttons">
       <button
     onClick={()=>{handleFilterChange("type","simple")} }   className={
      `van-type simple ${typeFilter === "simple" ? "selected" : ""}`
  }
     >Simple</button>
        <button
     onClick={()=>{handleFilterChange("type" ,"rugged")}}  className={
      `van-type simple ${typeFilter === "rugged" ? "selected" : ""}`
  }
     >Rugged</button>
             <button
     onClick={()=>{handleFilterChange("type","luxury")}}  className={
      `van-type simple ${typeFilter === "luxury" ? "selected" : ""}`
  }
     >Luxury</button>
             {typeFilter?  (   <button
     onClick={()=>handleFilterChange("type" ,null)}  className="van-type clear-filters"
     >clear</button>) :null
             }
       </div>

      <div className="van-list">{vanElements}</div>

    </div>
  );
  }












































