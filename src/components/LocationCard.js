import React from "react";

const LocationCard = ({ name, type, dimension, residents }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        {type} - {dimension}
      </div>
      <p>{residents.length}</p>
    </div>
  );
};

export default LocationCard;
