import React from "react";
import "./MainButton.css"

const MainButton = (props) => {
    return (<button className="main-button" onClick={props.onClick}>
        {props.text}
    </button>)
}

export default MainButton;