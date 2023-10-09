import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { PlantList } from "../components/PlantList";

function Catalogues() {
  return (
    <div className="catalogues">
      <h1 className="plantCategories">Plants List</h1>
      <div className="PlantList">
        {PlantList.map((plant) => (
          <div className="plants" key={plant.id}>
            <img src={plant.url} alt={plant.name} />
            <h2>{plant.name}</h2>
            {/* Create a Link to the plant detail page */}
            <Link to={`/plants/${plant.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogues;

