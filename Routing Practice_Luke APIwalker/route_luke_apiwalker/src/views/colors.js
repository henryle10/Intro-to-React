import React from "react";

const Colors = (props) => {
    const color = props.color
    const bg = props.bg
    return (
        <div className="text-center mt-5" style={{ color: color, backgroundColor: bg, }}>
            <h1>The word is: hello</h1>
        </div>
    );
}

export default Colors;