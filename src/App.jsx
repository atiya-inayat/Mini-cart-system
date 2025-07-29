import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="heading-container">
          <h1 className="main-heading">Mini Cart System</h1>
          <p className="main-para">
            {" "}
            Add product to your cart and manage quantities
          </p>
        </div>
        <div className="product-container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
