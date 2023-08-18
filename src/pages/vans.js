import { Link } from "react-router-dom";

export default function Vans() {
  return (
    <div className="vans-container">
      <h1>Amazing, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/about"> Find Your Vans </Link>
    </div>
  );
}
