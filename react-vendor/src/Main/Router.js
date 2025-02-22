import {createBrowserRouter} from "react-router-dom";
import App from "./App/App";
import Navbar from "../components/Navbar/Navbar";
import MainCollection from "../components/MainCollection/MainCollection";
import Export from "../components/Export/Export";

export const router = createBrowserRouter([
    { path: "/", element: <App/> },
    { path: "/vendors", element: <MainCollection/> },
    { path: "/export", element: <Export/> },
    { path: "/notifications", element: <Notification/> },
    { path: "/add", element: <Add/> }
])

function Notification() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Notifications">notifi</div>
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