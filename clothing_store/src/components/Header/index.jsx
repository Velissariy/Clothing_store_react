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
          <NavLink to="/"><img src="/img/logo.png" alt="Logo"/></NavLink>
          <button className="navigation__button"><img src="/img/search.svg" alt="Search"/></button>
        </div>
        <div className="navigation__rightSide">
          <div className="navigation__button buttonMenu" onClick={toggleMenu}><img src="/img/menu.png" alt="Menu"/>
          </div>
          <NavLink className="navigation__button buttonProfile" to="registration"><img src="/img/profile.png"
                                                                                       alt="Profile"/></NavLink>
          <NavLink to="cart" className="navigation__button buttonBasket"><img src="/img/basket.png" alt="Basket"/>
            <div className="basketCounter">{totalQuantity}</div>
          </NavLink>
        </div>
        {isMenuOpen && (
          <MainMenu menuRef={menuRef}/>
        )}
      </div>
    </nav>
  );
};

export default Header;