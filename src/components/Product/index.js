import { useState } from "react";
import "./style.css";
const Product = ({ product, addtoCart }) => {
  const [currentSale, setCurrentSale] = useState([]);

  return (
    <div className="Card">
      <img src={product.img} alt="" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addtoCart(product)}>Adicionar</button>
    </div>
  );
};

export default Product;
