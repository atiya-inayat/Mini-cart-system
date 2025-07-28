import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getTotal = useCartStore((state) => state.getTotal);

  return (
    <>
      <div>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
        <p>💰 Total: {getTotal()}</p>
      </div>
    </>
  );
};

export default Cart;
