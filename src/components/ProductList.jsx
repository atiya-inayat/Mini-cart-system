import React, { useEffect, useState } from "react";
import useCartStore from "../store/cartStore";

const ProductList = () => {
  const [data, setdata] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const apiUrl = import.meta.env.VITE_DUMMY_DATA_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respose = await fetch(apiUrl);
        if (!respose.ok) {
          throw new Error(`HTTP error! status: ${respose.status}`);
        }

        const result = await respose.json();
        console.log(result);
        setdata(result);
        // addToCart(result);
        // console.log(addToCart);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  }, [addToCart]);

  return (
    <>
      <div>
        <ul>
          {/* question mark is for safe check if data is fetched or not */}
          {data?.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
