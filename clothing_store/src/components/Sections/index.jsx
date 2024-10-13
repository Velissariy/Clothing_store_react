import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setType} from "../../redux/catalogFilterSlice";
import {setCurrentPage} from "../../redux/catalogSlice";

const Sections = () => {
  const dispatch = useDispatch();

  const handleSetType = (type) => {
    dispatch(setType(type));
  };



  return (
    <nav className="storeSections container">
      <div className="storeSections__item storeItem storeSections__item_forWoman">
        <NavLink to="catalog" onClick={() => handleSetType("women")}>
          <div className="storeItem__fill">
            <span className="storeItem__text1">30% OFF</span><span className="storeItem__text2">FOR WOMEN</span>
          </div>
        </NavLink>
      </div>
      <div className="storeSections__item storeItem storeSections__item_forMen">
        <NavLink to="catalog" onClick={() => handleSetType("men")}>
          <div className="storeItem__fill">
            <span className="storeItem__text1">HOT DEAL</span><span className="storeItem__text2">FOR MEN</span>
          </div>
        </NavLink>
      </div>
      <div className="storeSections_item storeItem storeSections__item_forKids">
        <NavLink to="catalog" onClick={() => handleSetType("kids")}>
          <div className="storeItem__fill">
            <span className="storeItem__text1">NEW ARRIVALS</span><span className="storeItem__text2">FOR KIDS</span>
          </div>
        </NavLink>
      </div>
      <div className="storeSections__item storeItem storeSections__item_accesories">
        <NavLink to="catalog" onClick={() => handleSetType("accesories")}>
          <div className="storeItem__fill">
            <span className="storeItem__text1">LUXIROUS & TRENDY</span><span
            className="storeItem__text2">ACCESORIES</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sections;