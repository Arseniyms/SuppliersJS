import {createBrowserRouter} from "react-router-dom";
import App from "./App/App";
import Navbar from "../components/Navbar/Navbar";
import MainCollection from "../components/MainCollection/MainCollection";

export const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "/vendors", element: <MainCollection/> },
    { path: "/export", element: <Export/> },
    { path: "/notifications", element: <Notification/> },
    { path: "/search", element: <Search/> },
    { path: "/add", element: <Add/> }
])

function Export() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Export">Export</div>
        </div>
    )
}

function Notification() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Notifications">notifi</div>
        </div>
    )
}

function Search() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Search">Search</div>
        </div>
    )
}

function Add() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Add">Add</div>
        </div>
    )
}