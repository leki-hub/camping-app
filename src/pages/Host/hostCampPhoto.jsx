import { useOutletContext } from "react-router-dom";


export default function CampPhotos() {
    const{currentCamp}= useOutletContext()
    return (
        <>
        
        <img src={currentCamp.imageUrl} className="host-camp-detail-image" alt="" />
        <img src={currentCamp.image2} className="host-camp-detail-image" alt="" />
        <img src={currentCamp.image3} className="host-camp-detail-image" alt="" />
        <img src={currentCamp.image4} className="host-camp-detail-image" alt="" />
        
        </>
    )
}