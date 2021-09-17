import { useEffect, useState } from "react";
import Product from "../Product";
import "./style.css";

const MenuContainer = ({ products, setProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [itemSearch, setItemSearch] = useState("");

  const showProducts = () => {
    setFilteredProducts(
      products.filter((item) => {
        return item.name === itemSearch;
      })
    );

    setItemSearch("");
  };

  const addtoCart = (product) => {
    setCartTotal([...cartTotal, product]);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={itemSearch}
          onChange={(event) => setItemSearch(event.target.value)}
        />
        <button onClick={() => showProducts()}>Search</button>
      </div>
      <div className="Container">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                addtoCart={addtoCart}
              />
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                product={product}
                addtoCart={addtoCart}
              />
            ))}
      </div>
      <div className="carrinho">
        <h2 className="total">
          Valor a pagar = R$
          {cartTotal
            .reduce((acc, item) => {
              return item.price + acc;
            }, 0)
            .toFixed(2)}
        </h2>
        <button onClick={() => setCartTotal([])}>Esvaziar carrinho</button>
      </div>
    </>
  );
};

export default MenuContainer;
