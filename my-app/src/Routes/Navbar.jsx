import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/Images/RCT_Proj_Logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Button } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContextProvider"


const Navbar = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext);

    const links = [
        { to: "/", text: "Home" },
        { to: "home-about-sec", text: "About" },
        { to: "home-news-sec", text: "News" },
        { to: "/Products", text: "Products" },
        { to: "/ShoppingCart", text: "ShoppingCart" },
      ];


      const scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      const handleLogout = () => {
        setIsAuth(false); // Update the authentication state to false on logout
      };
    
      return (
        <div className="navbar">
          <div>
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60%",
              }}
            >
              {links.map((link, index) => {
                if (link.to === "home-about-sec") {
                  return (
                    <ScrollLink
                      key={index}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="navbar-link"
                    >
                      {link.text}
                    </ScrollLink>
                  );
                } else if (link.to === "home-news-sec") {
                  return (
                    <ScrollLink
                      key={index}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="navbar-link"
                      onClick={scrollToTop}
                    >
                      {link.text}
                    </ScrollLink>
                  );
                } else {
                  return (
                    <Link key={index} to={link.to} className="navbar-link">
                      {link.text}
                    </Link>
                  );
                }
              })}
              {isAuth ? (
                <Button colorScheme="telegram" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Link to="/login" className="navbar-link">
                    Login
                  </Link>
                  <Link to="/signup" className="navbar-link">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      );

}

export default Navbar;