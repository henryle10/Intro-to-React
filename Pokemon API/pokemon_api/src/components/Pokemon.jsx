import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    function handleClick() {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button className="btn btn-dark" onClick={handleClick}>Fetch Pokemon</button>
            <ol>
                {pokemon.map((pokemon, i) => (
                    <li key={i}>{pokemon.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default Pokemon;