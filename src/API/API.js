import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',

});

export const GetPokemonById = (name) => {
   return  instance.get(`pokemon/${name}`).then(response => { return response.data})
}

export const GetPokemonList = () => {
    return instance.get('pokemon/?limit=898&offset=0').then(response => {return response.data})
}