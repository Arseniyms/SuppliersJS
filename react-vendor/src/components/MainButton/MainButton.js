import React from "react";
import "./MainButton.css"

const MainButton = (props) => {

    const handleClick = (e) => {
        if (!props.isLoading) {
            props.onClick(e);
        }
    }
    return (<button className="main-button" onClick={handleClick}>
        {props.isLoading ? <span className="main-button-loader"></span> : props.text}
    </button>)
}

export default MainButton;