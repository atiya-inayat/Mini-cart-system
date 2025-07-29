import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const getTotal = useCartStore((state) => state.getTotal);

  return (
    <>
      <div className="cart-container">
        {cartItems.map((item) => (
          <li className="item" key={item.id}>
            <h2 className="item-title">{item.title}</h2>
            <p className="price">${item.price}</p>
            <div className="quantity-remove-container">
              <p className="quantity">Quantity: {item.quantity}</p>
              <button
                className="removeBtn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
        <div className="total-container">
          <p className="total">💰 Total: </p>
          <p className="total-price">${getTotal()}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
