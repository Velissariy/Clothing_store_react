import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import MainMenuSecondItem from "../MainMenuSecondItem";
import {setCategory, setType} from "../../redux/catalogFilterSlice";
import {NavLink} from "react-router-dom";
import {fetchCategoriesByTypesItems} from "../../redux/categoriesByTypesSlice";
import {fetchTypesItems} from "../../redux/typesSlice";

const MainMenu = ({menuRef}) => {
  const dispatch = useDispatch();

  const categoriesByTypes = useSelector((state) => state.categoriesByTypes.items);
  const types = useSelector((state) => state.types.items);

  useEffect(() => {
    dispatch(fetchTypesItems('https://lepihov.by/api-fashion-shop/types'));
    dispatch(fetchCategoriesByTypesItems('https://lepihov.by/api-fashion-shop/categories_by_types'));
  }, []);

  const handleSetType = (type) => {
    dispatch(setType(type));
    dispatch(setCategory(''));
  }

  return (
    <div className="mainMenu" ref={menuRef}>
      <h3>MENU</h3>
      <ul className="mainMenu__firstLevel">
        {types.map(type => (
          <li key={type}>
            <p><NavLink to="/catalog/"
                        onClick={() => handleSetType(type)}>{type.toLocaleUpperCase()}</NavLink></p>
            <ul className="mainMenu__secondLevel">
              {categoriesByTypes[type]?.map(category => (
                <MainMenuSecondItem key={`${type}-${category}`} type={type} category={category}/>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainMenu;