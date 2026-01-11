import { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import "./pizza.css";

const Pizza = () => {
  const [pizza, setPizza] = useState({});

  const getData = async (url) => {
    const response = await fetch(url);
    const pizzas = await response.json();
    setPizza(pizzas);
  };

  useEffect(() => {
    getData("http://localhost:5002/api/pizzas/p001");
  }, []);
  return (
    <>
      <Container style={{ padding: "50px" }}>
        <Card className="card m-3">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <Card.Img src={pizza.img} className="img-fluid rounded" alt={`Imagen de Pizza ${pizza.name}`}/>
            </div>
            <div className="col-md-8">
              <Card.Body className="card-body">
                <Card.Title className="card-title text-capitalize" id="pizza_name">
                  {pizza.name}
                </Card.Title>
                <p className="card-text" id="pizza_desc">{pizza.desc}</p>
                <dl id="pizza_ingredients">
                  <dt>
                    <h4>Ingredientes</h4>
                  </dt>
                  {pizza.ingredients?.map((item) => {
                    return (
                      <dd key={item} className="text-capitalize">🍕 {item}</dd>
                    );
                  })}
                </dl>
                <div className="card-text" id="price_button">
                  <h3>Precio: ${pizza.price?.toLocaleString("es-CL")}</h3>
                  <Button className="btn btn-info" id="btn-add">Añadir 🛒</Button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Pizza;
