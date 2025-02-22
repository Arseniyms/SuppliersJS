import React, {useState} from "react";
import "./SearchBar.css"
import searchImage from "../Resources/search.svg"

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (e) => {
        props.onSearch(inputValue)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleButtonClick()
        }
    }

    return (
        <div className="searchBar">
            <input
                type="text"
                id="header-search"
                placeholder="Поиск"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="searchButton" onClick={handleButtonClick}>
                <img src={searchImage} alt="" className="searchButtonIcon"/>
            </button>
        </div>
    );
}

export default SearchBar;