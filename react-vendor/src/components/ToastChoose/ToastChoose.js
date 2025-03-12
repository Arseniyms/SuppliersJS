import toast from "react-hot-toast";
import React from "react";
import "./ToastChoose.css"
import MainButton from "../MainButton/MainButton";

const ToastChoose = (props) => {
    return (
        <div className="toast-choose">
            <div className="heading">{props.title}</div>

            <div className="toast-choose-buttons">
                <MainButton style={props.firstStyle} text = {props.firstText} onClick={props.onFirstButton}/>
                <MainButton style={props.secondStyle} text = {props.secondText} onClick={props.onSecondButton}/>
            </div>
        </div>
    )
}

export default ToastChoose;