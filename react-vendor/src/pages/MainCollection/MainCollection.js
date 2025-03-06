import React, {useState} from "react";
import "./MainCollection.css"
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import Table from "../../components/Table/Table";

const Text = {
    TITLE: "Управление поставщиками"
}

const MainCollection = () => {
    const handleSearch = (text) => {
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
