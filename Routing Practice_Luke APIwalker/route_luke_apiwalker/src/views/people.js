import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Homeworld from "./homeworlds"

const People = ({ id }) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/people/" + id + "/")
            .then((res) => {
                setPeople(res.data)
            })
            .catch((err) => {
                navigate("/error")
                console.log(err.response);
            });
    }, [id]);

    if (people === null) {
        return "Loading...";
    }

    return (
        <div className="container">
            <ul style={{ listStyleType: "none" }}>
                <li className="h4"> {people.name}</li>
                <Homeworld url={people.homeworld} />
                <li><span className="bold">Height:</span> {people.height}</li>
                <li><span className="bold">Hair Color:</span> {people.hair_color}</li>
                <li><span className="bold">Eye Color:</span> {people.eye_color}</li>
                <li><span className="bold">Skin Color:</span> {people.skin_color}</li>
            </ul>
        </div>
    );
}

export default People;