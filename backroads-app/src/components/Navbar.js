import React, { useState } from "react";
import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          {/*<button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>*/}
          <div className="gpt3__navbar-menu">
            {toggleMenu ? (
              <AiOutlineClose
                color="#2CAEBA"
                size={24}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <AiOutlineMenu
                color="#2CAEBA"
                size={24}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                  <ul>
                    <a href="#home" className="nav-link">
                      home
                    </a>
                    <a href="#about" className="nav-link">
                      about
                    </a>
                    <a href="#services" className="nav-link">
                      services
                    </a>
                    <a href="#tours" className="nav-link">
                      tours
                    </a>
                  </ul>

                  <ul className="nav-icons">
                    {socialLinks.map((link) => {
                      return (
                        <SocialLink
                          {...link}
                          key={link.id}
                          itemClass="nav-icon"
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <!-- left this comment on purpose --> */}

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
