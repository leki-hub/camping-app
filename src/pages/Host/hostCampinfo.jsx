import React from "react";
import { useOutletContext } from "react-router-dom";

export default function CampInfo() {
    const{currentCamp} = useOutletContext()
    return (
        <section className="host-camp-detail-info">
            <h4>Name: <span>{currentCamp.name}</span></h4>
            <h4>Category:<span>{currentCamp.type}</span></h4>
            <h4><strong>Description:</strong>{currentCamp.description}</h4>
            <h4>Visibility:<strong>Public</strong></h4>
            
        
        </section>
    )
}