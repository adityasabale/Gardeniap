import React from "react";
import { useParams } from "react-router-dom";
import "../styles/PlantDetail.css"; 

function PlantDetail() {
  const { id } = useParams();

  
  const plantDetails = {
    1: {
      name: "Aloevera",
      sunExposure: "Full sun to partial shade",
      soilType: "Well-drained soil",
      bloomTime: "Spring to early summer",
      flowerColor: "Yellow",
    },
    2: {
      name: "Bamboo",
      sunExposure: "Full sun to part shade",
      soilType: "Moist, well-drained soil",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",
    },
    3: {
      name: "Christmas Cactus",
      sunExposure: "Indirect light or filtered sun",
      soilType: "Well-drained, slightly acidic soil",
      bloomTime: "Late fall to winter",
      flowerColor: "Various colors (e.g., red, pink, white)",
    },
    4: {
      name: "Cycas",
      sunExposure: "Full sun to partial shade",
      soilType: "Well-drained sandy soil",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
    },
    5: {
      name: "Areca Palms",
      sunExposure: "Bright indirect light to low light",
      soilType: "Well-drained, slightly acidic soil",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",

    },
    6: {
      name: "Golden Pothos",
      sunExposure: "Indirect light to low light",
      soilType: "Well-draining potting mix",
      bloomTime: "Does not typically bloom",
      flowerColor: "N/A",
    },
    7: {
      name: "Prayer Plant",
      sunExposure: "Indirect light to low light",
      soilType: "Well-draining potting mix",
      bloomTime: "Spring to early summer",
      flowerColor: "White with green stripes",
    },
    8: {
      name: "Snake Plant",
      sunExposure: "Low to bright indirect light",
      soilType: "Well-drained potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
    },
    9: {
      name: "Spider Plant",
      sunExposure: "Indirect light to bright, indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Summer",
      flowerColor: "White with green stripes",
    },
    10: {
      name: "Tropical Monstera Plant",
      sunExposure: "Indirect light to bright, indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
    },
    11: {
      name: "ZZ Plant",
      sunExposure: "Low to bright indirect light",
      soilType: "Well-draining potting mix",
      bloomTime: "Rarely blooms",
      flowerColor: "N/A",
    },
  };

  const selectedPlant = plantDetails[id];

  if (!selectedPlant) {
    return <div>Plant not found</div>;
  }

  return (
    <div className="plant-detail">
      <h2>{selectedPlant.name}</h2>
      <div className="plant-info">
        <h3>Sun Exposure:</h3>
        <p>{selectedPlant.sunExposure}</p>
        <h3>Soil Type:</h3>
        <p>{selectedPlant.soilType}</p>
        <h3>Bloom Time:</h3>
        <p>{selectedPlant.bloomTime}</p>
        <h3>Flower Color:</h3>
        <p>{selectedPlant.flowerColor}</p>
      </div>
    </div>
  );
}

export default PlantDetail;

