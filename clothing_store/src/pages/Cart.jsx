import React from 'react';
import {NavLink} from "react-router-dom";
import CartItem from "../components/CartItem";
import {clearCart} from "../redux/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector((state) => state.cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <section className="shoppingCart container">
      <div className="shoppingCart__leftSide">
        {items.map((item) => (
          <CartItem key={item.id} item={item}/>
        ))}
        <div className="shoppingCart__buttons">
          <button onClick={() => handleClearCart()} className="shoppingCart__button shoppingCart__button_leftSife">CLEAR SHOPPING
            CART
          </button>
          <NavLink to="/catalog">
            <button className="shoppingCart__button shoppingCart__button_leftSife">CONTINUE SHOPPING</button>
          </NavLink>
        </div>
      </div>
      <div className="shoppingCart__rightSide">
        <div className="shoppingCart__shippingAdress">
          <form name="shippingAddress" method="post" action="#">
            <h1>SHIPPING ADDRESS</h1>
            <label>
              <input type="text" placeholder="Country" value="Bangladesh"/>
            </label>
            <label>
              <input type="text" placeholder="State"/>
            </label>
            <label>
              <input type="text" placeholder="Postcode / Zip"/>
            </label>
            <button type="submit" className="shoppingCart__button shoppingCart__button_address">GET A QUOTE</button>
          </form>
        </div>
        <div className="line"></div>
        <div className="shoppingCart__total total">
          <p className="total__subtotal">SUB TOTAL: <span className="total__subPrice">{totalPrice.toFixed(2)}</span></p>
          <p className="total__grandtotal">GRAND TOTAL: <span className="total__grandPrice">{totalPrice.toFixed(2)}</span></p>
          <div className="total__line"></div>
          <button className="shoppingCart__button total__button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;