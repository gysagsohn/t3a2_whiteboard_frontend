import { NavLink } from "react-router-dom"

export default function NavBar(){

    return(
        <header>
            {/* Insert logo image once made */}
            <div id="logo"> 
                WhiteBoard Schedular 
            </div>
            <nav id="navbar">
                <NavLink to={"/"} > Dashboard </NavLink>
                <NavLink to={"/operator"} > Operator </NavLink>
                <NavLink to={"/asset"} > Asset </NavLink>
                <NavLink to={"/client"} > Client </NavLink>
                <NavLink to={"/allocation"} > Allocation </NavLink>
                <NavLink to={"/user"} > User </NavLink>
                {/* To change to user icon later */}
                <NavLink to={"/login"} > Login </NavLink>
                {/* Work out logic so if there is token it takes to login page */}
            </nav>
        </header>
    )
}