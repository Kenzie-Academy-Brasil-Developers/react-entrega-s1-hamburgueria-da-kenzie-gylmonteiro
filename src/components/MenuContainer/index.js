import { useState } from "react";
import Product from "../Product";

const MenuContainer = ({ products, setProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemSearch, setItemSearch] = useState("");

  const showProducts = () => {
    setFilteredProducts(
      products.filter((item) => {
        return item.name === itemSearch;
      })
    );

    setItemSearch("");
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
        ? filteredProducts.map((product) => <div>{product.name}</div>)
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </>
  );
};

export default MenuContainer;
