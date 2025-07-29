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
      <div className="">
        <h1 className="product-heading">Products</h1>
        <div className="items-container">
          {data?.map((item) => (
            <div className="item" key={item.id}>
              <h3 className="title">{item.title}</h3>
              <h2 className="price">${item.price}</h2>
              <button className="addTCartBtn" onClick={() => addToCart(item)}>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
{
  /* question mark is for safe check if data is fetched or not */
}

export default ProductList;
