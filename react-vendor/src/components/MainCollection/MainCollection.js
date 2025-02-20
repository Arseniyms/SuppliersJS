import React, {useState} from "react";
import "./MainCollection.css"
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import Table from "../Table/Table";

const Text = {
    TITLE: "Управление поставщиками"
}

const MainCollection = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (text) => {
        setSearchValue(text);
        console.log(text);
        setColumnFilters(text)
    }
    const [columnFilters, setColumnFilters] = useState("")

    return (
        <div>
            <Navbar />
            <div className="mainCollection">
                <h1>{Text.TITLE}</h1>
                <SearchBar onSearch={handleSearch} />
            </div>
            <Table columnFilters={columnFilters} />
        </div>
    )
}



export default MainCollection;
