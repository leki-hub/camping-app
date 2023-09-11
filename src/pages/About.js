import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img
        src="../assets/images/aboutpage.png"
        className="about-hero-image"
        alt=""
      />
      <div className="about-page-content">
        <h1>Travel with us and explore the magical Kenya</h1>
        <p>
          Tourism in Kenya is a significant contributor to the country's economy
          and a major driver of employment. Known for its rich biodiversity,
          stunning landscapes, and vibrant culture, Kenya is a sought-after
          destination for travelers from around the world.
        </p>
        <p>
          Historically, Kenya is the cradle of mankind, Home Lesmo Safaris 
          is passionate to help you have an lifelong experience.  
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore our destinations
        </Link>
      </div>
    </div>
  );
}
