import React from "react";
import NavbarMenu from "./navbar";


const Header = () => {
    const auth = true;
    return (
        auth ?
            <NavbarMenu/>
            :
            null
    );
};

export default Header;
