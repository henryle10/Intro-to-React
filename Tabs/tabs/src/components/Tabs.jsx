import React, { useEffect, useState } from "react";
import styles from './Tabs.module.css';

const Tab = ({ header, content }) => {
    const tabs = [
        {
            header: "Tab 1",
            content: "Tab 1 content is showing here."
        },
        {
            header: "Tab 2",
            content: "Tab 2 content is showing here."
        },
        {
            header: "Tab 3",
            content: "Tab 3 content is showing here."
        }
    ]
    const [state, setState] = useState({
        content: "",
    })
    const onClickHandler = (e, index) => {
        setState({
            content: tabs[index].content,
            id: index
        })
        index = index + 1;
        alert("You clicked on the " + index + " tab");
    }
    return (
        <div>
            <div className={styles.tabSpace}>
                {tabs.map((tab, i) =>
                    <button onClick={(e) => onClickHandler(e, i)} key={i} {...tab}>
                        {tab.header}
                    </button>
                )}
            </div>
            <div>
                <p className={styles.tabBox}>{state.content}</p>
            </div>
        </div>
    )
}
export default Tab;