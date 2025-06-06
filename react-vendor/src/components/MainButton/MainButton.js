import React from "react";
import "./MainButton.css"

const MainButton = (props) => {

    const handleClick = (e) => {
        if (!props.isLoading) {
            props.onClick && props.onClick(e);
        }
    }
    return (<button style={props.style} className="main-button" onClick={handleClick}>
        {props.isLoading ? <span className="main-button-loader"></span> : props.text}
    </button>)
}

export default MainButton;