import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCategory, setType} from "../../redux/catalogFilterSlice";

const MainMenuSecondItem = ({type, category}) => {
  const dispatch = useDispatch();

  const handleSetCategory = (category) => {
    dispatch(setType(type));
    dispatch(setCategory(category));
  }

  return (
    <li><NavLink to="/catalog/"
                 onClick={() => handleSetCategory(category)}>{category}</NavLink></li>
  );
};

export default MainMenuSecondItem;