import React, { useState } from "react";
import NavBar from "../Navbar";
import NavBarOpen from "../NavBarOpen";
import { IconImg, IconMenu } from "./styles";
import MenuIcon from "../../assets/menu-hamburger.png";

export default function MenuHamburger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <IconMenu onClick={() => setIsOpen(!isOpen)}>
                <IconImg src={MenuIcon} alt="Icone de menu hamburguer" />
            </IconMenu>
            <div>
                {isOpen ? <NavBarOpen /> : <NavBar />}
            </div>
        </>

    );

}