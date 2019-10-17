import React from "react";

export default function CharacterCard({
  image,
  name,
  species,
  status,
  location,
  origin,
  episode
}) {
  return (
    <div>
      <img src={image} />
      <h1>{name}</h1>
      <div>
        <span>
          {species}: {status}
        </span>
      </div>
      <div>
        <span>Location: {location.name}</span>
      </div>
      <div>
        <span>Origin: {origin.name}</span>
      </div>
    </div>
  );
}
