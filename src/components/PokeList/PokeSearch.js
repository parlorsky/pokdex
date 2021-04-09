/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GetPokemonById, GetPokemonList } from "../../API/API";
import { Field, Form, Formik } from "formik";
import s from "../PokeFinder/PokeFinder.module.css";

const PokeSearch = () => {
  let [pokeList, setList] = useState([]);
  let [currentInputValue, setValue] = useState("");
  let [searchItems, setSearchItem] = useState(pokeList);

  useEffect(() => {
    GetPokemonList()
      .then((response) => {
        return response.results;
      })
      .then((pokes) => {
        let poks = pokes.map((pok) => pok.name);
        console.log(poks);
        setList(poks);
      });
  }, []);

  useEffect(() => {
    setSearchItem(
      pokeList.filter((pokemons) => pokemons.includes(currentInputValue))
    );
  }, [currentInputValue]);

  function handleOnChange(text) {
    setValue(text.target.value);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={currentInputValue}
          onChange={handleOnChange}
        />
      </div>
      <div>
        {searchItems.map((pokemon) => (
          <div>{pokemon}</div>
        ))}
      </div>
    </div>
  );
};

export default PokeSearch;
