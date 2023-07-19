import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider";


const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const links = [
        { to: "/", text: "Home" },
        { to: "home-about-sec", text: "About" },
        { to: "home-news-sec", text: "News" },
        { to: "/Products", text: "Products" },
        { to: "/ShoppingCart", text: "ShoppingCart" },
        { to: "/Login", text: "Login" },
        { to: "/SignUp", text: "SignUp" },
      ];

}

export default Navbar;