import { useState } from "react";
import Product from "../Product";

const MenuContainer = ({ products, setProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  const [total, setTotal] = useState(0);

  const showProducts = () => {
    setFilteredProducts(
      products.filter((item) => {
        return item.name === itemSearch;
      })
    );

    setItemSearch("");
  };

  const addPrice = () => {
    const valorAtual = filteredProducts.reduce((acc, item) => {
      return item.price + acc;
    }, 0);
    setCartTotal([...cartTotal, valorAtual]);

    setTotal(
      cartTotal.reduce((acc, item) => {
        return item + acc;
      }, 0)
    );
  };

  return (
    <>
      <input
        type="text"
        value={itemSearch}
        onChange={(event) => setItemSearch(event.target.value)}
      />
      <button onClick={() => showProducts()}>Search</button>

      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
            <Product key={product.id} product={product} addPrice={addPrice} />
          ))
        : products.map((product) => (
            <Product key={product.id} product={product} addPrice={addPrice} />
          ))}
      <h2> Valor a pagar- {total}</h2>
    </>
  );
};

export default MenuContainer;
