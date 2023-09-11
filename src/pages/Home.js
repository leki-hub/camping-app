import { Link } from "react-router-dom";

const containerStyle = {
  backgroundImage: "url('../assets/images/aboutpage.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  color: "#fff", 
};






export default function Home() {
  return (
    <div className="home-container" style={containerStyle} >
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #Lesmo movement.Choose your destination ,we make your perfect road trip.
      </p>
      <Link to="/vans"> Find Your destination </Link>
    </div>
  );
}
