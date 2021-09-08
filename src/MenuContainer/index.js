const MenuConatiner = ({ products, setProducts }) => {
  return (
    <>
      {products.map((item) => (
        <p>{item.name}</p>
      ))}
    </>
  );
};

export default MenuConatiner;
