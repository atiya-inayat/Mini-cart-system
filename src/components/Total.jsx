import React from "react";
import useCartStore from "../store/cartStore";

const Total = () => {
  const getTotal = useCartStore((state) => state.getTotal);

  return (
    <>
      <button onClick={() => getTotal()}>Total</button>
    </>
  );
};

export default Total;
