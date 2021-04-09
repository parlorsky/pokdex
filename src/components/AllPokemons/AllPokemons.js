import React, {useEffect, useState} from "react";
import {GetPokemonList} from "../../API/API";
import s from "./AllPokemons.module.scss"


const AllPokemons = ({pokemons}) => {


    return (
        <div>
            <div className={s.pokemon1}>
                {pokemons.sort(function (a, b) {
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).map(pokemon => (


                    <ul className={(pokemons.indexOf(pokemon) + 1) % 2 ? s.unCountable : s.countable}>
                        <li>
                            <div className={s.name}>{pokemon.name}</div>
                            <div className={s.types}>{pokemon.types.length > 1 ?
                                <div>{pokemon.types[0]} & {pokemon.types[1]}</div> :
                                <div>{pokemon.types[0]}</div>}</div>
                            <div className={s.abilities}>{pokemon.abilities.map(ability => (<ul><li>{ability}</li></ul>))}</div>
                        </li>
                    </ul>


                ))}
            </div>
        </div>
    )

}


export default AllPokemons


