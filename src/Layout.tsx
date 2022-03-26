import { Outlet, Link } from "react-router-dom";
// @ts-ignore
import NavBar from "./NavigationBar/NavigationBar.tsx";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    )
}

export default Layout;