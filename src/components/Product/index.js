import { useState } from "react";
const Product = ({ product: { name, category, price }, addPrice }) => {
  const [currentSale, setCurrentSale] = useState([]);

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button
        onClick={() => {
          addPrice();
        }}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Product;
