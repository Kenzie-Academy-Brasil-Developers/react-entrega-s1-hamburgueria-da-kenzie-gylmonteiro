const Product = ({ product: { name, category, price } }) => {
  return (
    <>
      <p>{name}</p>
      <p>{category}</p>
      <p>{price}</p>
      <button>Adicionar</button>
    </>
  );
};

export default Product;
