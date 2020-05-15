import React from "react";

const Param = (props) => {
    if (isNaN(+props.id) === false) {
        return (
            <div className="text-center mt-5">
                <h1>The number is: {props.id}</h1>
            </div>
        )
    }
    if (props.id === "error") {
        return (
            <div className="text-center">
                <img style={{ width: "200px", height: "200px" }} src="obi.jpg" alt="obi wan kenobi" />
                <h3>"These aren't the droids you're looking for"</h3>
            </div>
        )
    }
    else {
        return (
            <div className="text-center mt-5">
                <h1>The word is: {props.id}</h1>
            </div>
        );
    }
}

export default Param;