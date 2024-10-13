import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleSize, toggleTrendingNow, setMinPrice, setMaxPrice} from "../../redux/catalogFilterSlice";
import CatalogFilterMenu from "../CatalogFilterMenu";

const CatalogFilter = () => {
  const dispatch = useDispatch();
  const {sizes, trendingNow, maxPrice, minPrice} = useSelector((state) => state.catalogFilter);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilterMenu = (e) => {
    e.stopPropagation();
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleSizeChange = (size) => {
    dispatch(toggleSize(size));
  };

  const handleToggleTrending = () => {
    dispatch(toggleTrendingNow());
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      dispatch(setMinPrice(parseFloat(value)));
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.trim() !== '') {
      dispatch(setMaxPrice(parseFloat(value)));
    }
  };

  return (
    <div className="catalog__sectionFilter">
      <div id="catalog__filterLeftSide" className="catalog__sectionFilterLeftSide">
        <div className="summary" onClick={toggleFilterMenu}>FILTER</div>
        {isFilterMenuOpen && <CatalogFilterMenu isFilterMenuOpen={isFilterMenuOpen} setIsFilterMenuOpen={setIsFilterMenuOpen}/>}
      </div>

      <div className="catalog__sectionFilterCenterSide filter">
        <details className="filter__item">
          <summary>TRENDING NOW</summary>
          <div className="filter__detailsBox filter__menuTrending">
            <label>
              <input
                type="checkbox"
                checked={trendingNow}
                onChange={() => handleToggleTrending()}
              />
              &nbsp;Trending
            </label>
          </div>
        </details>
        <details className="filter__item">
          <summary>SIZE</summary>
          <div className="filter__detailsBox filter__menuSize">
            {['XS', 'S', 'M', 'L'].map(size => (
              <label key={size}>
                <input
                  type="checkbox"
                  checked={sizes.includes(size)}
                  onChange={() => handleSizeChange(size)}
                />
                &nbsp;{size}
              </label>
            ))}
          </div>
        </details>
        <details className="filter__item">
          <summary>PRICE</summary>
          <div className="filter__detailsBox filter__menuPrice">
            <label>
              <input
                type="text"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              &nbsp;min
            </label>
            <label>
              <input
                type="text"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
              &nbsp;max
            </label>
          </div>
        </details>
      </div>
      <div className="catalog__sectionFilterRightSide"></div>
    </div>
  );
};

export default CatalogFilter;