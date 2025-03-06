import {createBrowserRouter, createHashRouter, useRouteError} from "react-router-dom";
import App from "./App/App";
import Navbar from "../components/Navbar/Navbar";
import MainCollection from "../pages/MainCollection/MainCollection";
import Export from "../pages/Export/Export";
import AddVendor from "../pages/AddVendor/AddVendor";
import Detail from "../pages/Detail/Detail";

const ErrorBoundary = () => {
    const error = useRouteError();

    return (
        <section>
            <h1>Error Boundary</h1>
            <small>{error?.message}</small>
        </section>
    );
};

export const router = createHashRouter([
    { path: "/", element: <App/>},
    { path: "/vendors", element: <MainCollection/> },
    { path: "/vendors/:extId", element: <Detail/> },
    { path: "/export", element: <Export/> },
    { path: "/notifications", element: <Notification/> },
    { path: "/add", element: <AddVendor/> }
])

function Notification() {
    return (
        <div className="App">
            <Navbar/>
            <div className="Notifications">notifi</div>
        </div>
    )
}

