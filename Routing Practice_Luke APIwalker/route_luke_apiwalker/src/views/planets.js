import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ id }) => {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/planets/" + id + "/")
            .then((res) => {
                setPlanet(res.data)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]);

    if (planet === null) {
        return "Loading...";
    }

    return (
        <div className="container">
            <ul style={{ listStyleType: "none" }}>
                <li className="h4"> {planet.name}</li>
                <li><span className="bold">Climate:</span> {planet.climate}</li>
                <li><span className="bold">Terrain:</span> {planet.terrain}</li>
                <li><span className="bold">Surface Water:</span> {planet.surface_water}</li>
                <li><span className="bold">Population:</span> {planet.population}</li>
            </ul>
        </div>
    );
}

export default Home;