import { create } from "zustand";

// set: used to update the state
// get: used to read current state
const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (item) => {
    const { cartItems } = get();
    const existingItem = cartItems.find((i) => i.id === item.id);

    if (existingItem) {
      // If item exists → increase quantity
      const updatedCart = cartItems.map((il) =>
        il.id === item.id ? { ...il, quantity: il.quantity + 1 } : il
      );
      set({ cartItems: updatedCart });
    } else {
      // If item doesn't exist → add new with quantity 1
      set({ cartItems: [...cartItems, { ...item, quantity: 1 }] });
    }
  },

  // ✅ Remove from cart
  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },

  // ✅ Get total
  getTotal: () => {
    const { cartItems } = get();
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
