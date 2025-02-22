import React from "react";
import './AddInput.css'

const AddInput = ({text}) => {
    return (
        <div className="add-input">
            <span>{text}</span>
            <input
                type="text"
                placeholder={Text.PLACEHOLDER}
            />
        </div>
    )
}

export default AddInput;