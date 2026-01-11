import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";
import { useState, useEffect } from "react";
import { pizzas } from "../components/pizzas.js";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async (url) => {
      const response = await fetch(url);
      const pizzas = await response.json();
      setData(pizzas)
    }
    
    useEffect(() => {
      getData("http://localhost:5002/api/pizzas");
  
    },[]);
  const filtro = data.filter((pizza) => {
    return (
      pizza.desc.toLowerCase() ||
      pizza.img.toLowerCase() ||
      pizza.ingredients.toLowerCase() ||
      pizza.name.toLowerCase() ||
      pizza.price.toLowerCase()
    );
  });

  return (
    <>
      <Header></Header>
      <div className="products container-fluid">
        <CardPizza pizzas = {filtro}/>
      </div>
    </>
  );
};

export default Home;