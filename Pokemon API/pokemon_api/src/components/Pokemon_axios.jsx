import React, { useState } from 'react';
import axios from 'axios';

const Pokemon_axios = (props) => {
    const [pokemon, setPokemon] = useState([]);

    function handleClick() {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then((res) => {
                console.log(res);
                setPokemon(res.data.results);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }


    return (
        <div>
            <button className="btn btn-dark" onClick={handleClick}>Fetch Pokemon</button>
            <ol>
                {pokemon.map((pokemons, i) => (
                    <li key={i}>{pokemons.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default Pokemon_axios;