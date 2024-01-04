import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <Fragment> {cartItems.map((item) => {
      return <CartItem key={item.cartID} cartItem={item} />;
    })}</Fragment>
  )
}

export default CartItemsList