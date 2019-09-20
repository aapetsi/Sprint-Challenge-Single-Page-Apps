import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";

const SearchForm = () => {
  const [character, setCharacter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorState, setErrorState] = useState("");

  const handleInputChange = e => {
    let text = e.target.value;
    setSearchText(text);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setErrorState("");
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${searchText}`)
      .then(res => {
        setCharacter([...res.data.results]);
      })
      .catch(err => {
        let errorMessage = err.message;
        setErrorState("Character not found");
        console.log(errorMessage);
      });
  };

  const userToReturn =
    character.length === 0 ? (
      <p>Enter a user to begin search</p>
    ) : (
      character.map(character => (
        <CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          location={character.location}
          origin={character.location}
          episode={character.episode}
        />
      ))
    );

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          autoFocus={true}
          name="searchField"
          type="text"
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {errorState ? errorState : userToReturn}
    </div>
  );
};

export default SearchForm;
