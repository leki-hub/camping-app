import React from "react";
import { useOutletContext } from "react-router-dom";

export default function VanInfo() {
    const{currentVan} = useOutletContext()
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{currentVan.name}</span></h4>
            <h4>Category:<span>{currentVan.type}</span></h4>
            <h4><strong>Description:</strong>{currentVan.description}</h4>
            <h4>Visibility:<strong>Public</strong></h4>
            
        
        </section>
    )
}