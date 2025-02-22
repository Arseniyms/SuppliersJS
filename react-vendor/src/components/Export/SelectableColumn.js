import removeImage from "../Resources/remove.svg";
import addImage from "../Resources/add.svg";
import React from "react";
import "./SelectableColumn.css"

const SelectableColumn = ({column, onClick, isSelected}) => {
    const buttonClicked = (e) => {
        onClick(column)
    }
    return (
        <div className="selectable-column">
            <button onClick={buttonClicked}>
                {
                    isSelected ?
                        <img src={removeImage} alt="" /> :
                        <img src={addImage} alt="" />
                }
            </button>
            <span className="selectable-column-text">
                {column.header}
            </span>
        </div>
    )
}

export default SelectableColumn;