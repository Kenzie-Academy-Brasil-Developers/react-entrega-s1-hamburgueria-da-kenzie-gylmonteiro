import { useState } from "react";
const Product = ({ product: { name, category, price } }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const add = () => {
    setCurrentSale([...currentSale, price]);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => add()}>Adicionar</button>
    </div>
  );
};

export default Product;
