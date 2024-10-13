import React, {useEffect, useRef} from 'react';

import {fetchCategoriesItems} from '../../redux/categoriesSlice';
import {fetchBrandsItems} from '../../redux/brandSlice';
import {fetchDesignersItems} from '../../redux/designersSlice';
import {useDispatch, useSelector} from "react-redux";
import {setBrand, setCategory, setDesigner, setType} from "../../redux/catalogFilterSlice";

const CatalogFilterMenu = ({isFilterMenuOpen, setIsFilterMenuOpen}) => {
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.items);
  const brands = useSelector((state) => state.brands.items);
  const designers = useSelector((state) => state.designers.items);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsFilterMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    dispatch(fetchCategoriesItems('https://lepihov.by/api-fashion-shop/categories'));
    dispatch(fetchBrandsItems(`https://lepihov.by/api-fashion-shop/brands`));
    dispatch(fetchDesignersItems(`https://lepihov.by/api-fashion-shop/designers`));

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isFilterMenuOpen]);

  const handleSetCategory = (category) => {
    dispatch(setCategory(category));
    dispatch(setBrand(''));
    dispatch(setDesigner(''));
    dispatch(setType(''))
    // setIsFilterMenuOpen(false);
  }

  const handleSetBrand = (brand) => {
    dispatch(setBrand(brand));
    dispatch(setDesigner(''));
    dispatch(setCategory(''));
    dispatch(setType(''))
    // setIsFilterMenuOpen(false);
  }

  const handleSetDesigner = (designer) => {
    dispatch(setDesigner(designer));
    dispatch(setBrand(''));
    dispatch(setDesigner(''));
    dispatch(setType(''))
    // setIsFilterMenuOpen(false);
  }

  return (
    <div ref={menuRef} className="catalog__detailsBox catalog__menuFilter">
      <div>
        <span id="filterButton">FILTER</span>
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
            fill="black"/>
        </svg>
      </div>
      <details>
        <summary className="catalog__topLevel">CATEGORY</summary>
        <div className="catalog__detailsBox2">
          {categories.map(category => (
            <a key={category} href="#" onClick={() => handleSetCategory(category)}>{category}</a>
          ))}
        </div>
      </details>
      <details>
        <summary className="catalog__topLevel">BRAND</summary>
        <div className="catalog__detailsBox2">
          {brands.map(brand => (
            <a key={brand} href="#" onClick={() => handleSetBrand(brand)}>{brand}</a>
          ))}
        </div>
      </details>
      <details>
        <summary className="catalog__topLevel">DESIGNER</summary>
        <div className="catalog__detailsBox2">
          {designers.map(designer => (
            <a key={designer} href="#" onClick={() => handleSetDesigner(designer)}>{designer}</a>
          ))}
        </div>
      </details>
    </div>
  );
};

export default CatalogFilterMenu;