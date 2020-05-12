// import React, { useState } from 'react';
// import Box from './Box';

// const BoxForm = (props) => {
//     const [boxColor, setColor] = useState("");
//     const [boxSize, setSize] = useState("");
//     const [box, setBox] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setBox([...box, handleSubmit])
//     };
//     return (
//         <div>
//             <div>
//                 <h1>Hello</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label>Color:</label>
//                     <input type="text" onChange={(e) => setColor(e.target.value)} value={boxColor} />
//                     <input type="text" onChange={(e) => setSize(e.target.value)} value={boxSize} />
//                     <input type="submit" value="Add" />
//                 </form>
//             </div>
//             <div>
//                 <Box />
//                 {/* <h1 style={{ backgroundColor: boxColor, width: boxSize, height: boxSize }}>{boxColor}{boxSize}</h1> */}
//             </div>
//         </div >
//     );
// };

// export default BoxForm;
import React from 'react';
import styles from './Generator.module.css';

const Generator = ({ generator, onColorHandler, onSubmitHandler }) => {
    return (
        <div className={styles.myContainerDiv}>
            <form onSubmit={onSubmitHandler}>
                <label>Color</label>
                <input type="text" name="color" value={generator.color} onChange={onColorHandler}></input>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Generator;