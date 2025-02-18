import React, {useState} from "react";
import "./MainCollection.css"
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

const Text = {
    TITLE: "Управление поставщиками"
}

const MainCollection = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (text) => {
        setSearchValue(text);
        console.log(text);
    }

    return (
        <div>
            <Navbar />
            <div className="mainCollection">
                <h1>{Text.TITLE}</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            <h1> {searchValue} </h1>
        </div>
    )
}



export default MainCollection;
