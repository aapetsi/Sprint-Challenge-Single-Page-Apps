import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

const LocationsList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get("https:///rickandmortyapi.com/api/location")
      .then(res => {
        let retrievedLocations = res.data.results;
        setLocations([...retrievedLocations]);
        console.log(retrievedLocations);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <p>location component</p>
      {locations.map(location => (
        <LocationCard
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents}
        />
      ))}
    </div>
  );
};

export default LocationsList;
