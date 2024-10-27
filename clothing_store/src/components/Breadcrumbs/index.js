import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setBrand, setCategory, setDesigner, setType} from "../../redux/catalogFilterSlice";
import {NavLink} from "react-router-dom";

const Breadcrumbs = () => {
    const {
      sizes,
      trendingNow,
      maxPrice,
      minPrice,
      type,
      category,
      brand,
      designer
    } = useSelector((state) => state.catalogFilter);

    const {product} = useSelector((state) => state.product);

    const dispatch = useDispatch();

    const handleSetCategory = (category) => {
      dispatch(setCategory(category));
      dispatch(setBrand(''));
      dispatch(setDesigner(''));
      dispatch(setType(''))
    }

    const handleSetBrand = (brand) => {
      dispatch(setBrand(brand));
      dispatch(setDesigner(''));
      dispatch(setCategory(''));
      dispatch(setType(''))
    }

    const handleSetDesigner = (designer) => {
      dispatch(setDesigner(designer));
      dispatch(setBrand(''));
      dispatch(setCategory(''));
      dispatch(setType(''))
    }

    const handleSetType = (type) => {
      dispatch(setDesigner(''));
      dispatch(setBrand(''));
      dispatch(setCategory(''));
      dispatch(setType(type))
    }

    const breadcrumbs = [];
    breadcrumbs.push({label: 'HOME', onClick: () => handleSetCategory('')});
    if (brand) breadcrumbs.push({label: brand.toUpperCase(), onClick: () => handleSetBrand(brand)});
    if (designer) breadcrumbs.push({label: designer.toUpperCase(), onClick: () => handleSetDesigner(designer)});
    if (type) breadcrumbs.push({label: type.toUpperCase(), onClick: () => handleSetType(type)});
    if (category) breadcrumbs.push({label: category.toUpperCase(), onClick: () => handleSetCategory(category)});
    if (product) breadcrumbs.push({
      label: product.title.toUpperCase(), onClick: () => {
      }
    });

    return (
      <div className="breadсrumbs">
        <div className="container">
          <div className="breadсrumbs__leftSide">
            <p>{breadcrumbs[breadcrumbs.length - 1].label.toLocaleUpperCase()}</p>
          </div>
          <div className="breadсrumbs__rightSide">
            <p>
              {breadcrumbs.slice(0, -1).map((crumb, index) => (
                <NavLink to='/catalog' key={index} onClick={crumb.onClick} style={{cursor: 'pointer'}}>
                  {crumb.label} /&nbsp;
                </NavLink>
              ))}
              {breadcrumbs.length > 1 && (
                <>
                  <span>{breadcrumbs[breadcrumbs.length - 1].label}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    )
      ;
  }
;

export default Breadcrumbs;