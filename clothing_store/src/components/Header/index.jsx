import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import MainMenu from "../MainMenu";
import {useSelector} from "react-redux";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cartItems.totalQuantity);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__leftSide">
          <NavLink
            to={`/`}> < img src={`${process.env.PUBLIC_URL}/img/logo.png`}
                                                    alt="Logo"/></NavLink>
          <button className="navigation__button"><img src={`${process.env.PUBLIC_URL}/img/search.svg`}
                                                      alt="Search"/></button>
        </div>
        <div className="navigation__rightSide">
          <div className="navigation__button buttonMenu" onClick={toggleMenu}><img
            src={`${process.env.PUBLIC_URL}/img/menu.png`} alt="Menu"/>
          </div>
          <NavLink className="navigation__button buttonProfile" to={`/registration`}><img
            src={`${process.env.PUBLIC_URL}/img/profile.png`}
            alt="Profile"/></NavLink>
          <NavLink to={`/cart`} className="navigation__button buttonBasket"><img
            src={`${process.env.PUBLIC_URL}/img/basket.png`} alt="Basket"/>
            <div className="basketCounter">{totalQuantity}</div>
          </NavLink>
        </div>
        {isMenuOpen && (
          <MainMenu menuRef={menuRef} setIsMenuOpen={setIsMenuOpen}/>
        )}
      </div>
    </nav>
  )
    ;
};

export default Header;