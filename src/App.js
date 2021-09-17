import { useState } from "react";
import { isDOMComponentElement } from "react-dom/test-utils";
import "./App.css";
import MenuContainer from "./components/MenuContainer";
import fanta from "./img/fanta.png";
import coca from "./img/coca-cola.png";
import bigkenzie from "./img/big-kenzie.png";
import guarana from "./img/guarana.png";
import xsalada from "./img/x-salada.png";
import xburguer from "./img/xburguer.png";
import hamburguer from "./img/hamburguer.png";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 7.99,
      img: hamburguer,
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 8.99,
      img: xburguer,
    },
    {
      id: 3,
      name: "X-Salada",
      category: "Sanduíches",
      price: 10.99,
      img: xsalada,
    },
    {
      id: 4,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 16.99,
      img: bigkenzie,
    },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99, img: guarana },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99, img: coca },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99, img: fanta },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <MenuContainer products={products} setProducts={setProducts} />
      </header>
    </div>
  );
}

export default App;
