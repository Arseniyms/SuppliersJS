import {createHashRouter, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MainCollection from "../pages/MainCollection/MainCollection";
import Export from "../pages/Export/Export";
import AddVendor from "../pages/AddVendor/AddVendor";
import Detail from "../pages/Detail/Detail";

export const router = createHashRouter([
    {
        path: "/",
        element: <NavbarWrapper/>,
        children: [
            { path: "/", element: <MainCollection/> },
            { path: "/:extId", element: <Detail/> },
            { path: "/export", element: <Export/> },
            { path: "/add", element: <AddVendor/> }
        ]
    }
])

function NavbarWrapper() {
    return <div>
        <Navbar/>
        <Outlet/>
    </div>
}
