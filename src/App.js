import React from 'react';
import {PokeFinder} from "./components/PokeFinder";
import {Navbar} from "./components/Navbar";
import {ApolloProvider, ApolloClient} from '@apollo/client';

const App: React.FC = () => {


    const client = new ApolloClient({
        uri: "https://pokeapi.co/api/v2/pokemon/"
    });

  return (

      <ApolloProvider client={client}>
      <Navbar/>
      <PokeFinder />
      </ApolloProvider>,
  );
}

export default App;
