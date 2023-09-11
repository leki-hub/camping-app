import React from "react";
import { useOutletContext } from "react-router-dom";

export default function CampPrices() {
    const{currentCamp} = useOutletContext()
    return (
        <>
         <h3 className="host-camp-price">${currentCamp.price}<span>/day</span></h3>
        </>
    )
}