import React from 'react';
import {addProduct, delProduct} from "../../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const CatalogItem = ({item}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.items);

  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  const toggleCartItem = (item) => {
    if (isInCart) {
      dispatch(delProduct(item));
    } else {
      dispatch(addProduct(item));
    }
  }

  return (
    <div className="catalogItems__item catalogItem" data-id={item.id}>
      <div className="catalogItem__photo">
        {item.photos.length > 0 ? (
          <img src={item.photos[0]} alt="Featured item"/>
        ) : (
          <img src={`${process.env.PUBLIC_URL}/img/defaultCatalogImage.png`} alt="No available"/>
        )}
        <div className="catalogItem__fill">
          <div onClick={() => toggleCartItem(item)} className="catalogItem__button">
            <img src={`${process.env.PUBLIC_URL}/img/basket.svg`} alt="Add to cart"/>
            <p>{isInCart ? "Remove" : "Add to Cart"}</p>
          </div>
        </div>
      </div>
      <NavLink to={`/catalog/${item.id}`}>
        <div className="catalogItem__text">
          <h3 className="catalogItem__title">{item.title}</h3>
          <p className="catalogItem__description">{item.description}</p>
          <p className="catalogItem__price">{item.price.toFixed(2)}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default CatalogItem;