import React from 'react';
import styles from './Box.module.css';

const Box = props => {
    const style = {
        backgroundColor: props.color,
        height: "150px",
        width: "150px"
    };

    return (
        <div className={styles.myContainerDiv}>
            <div style={style}></div>
        </div>
    )
}
export default Box;