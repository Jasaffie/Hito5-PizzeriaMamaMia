import { pizzaCart } from "../components/pizzas.js";
import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

const Cart = () => {
  const [data, setData] = useState(pizzaCart);
  const filtrarPizzas = data.filter((e) => e.count > 0);
  const suma = (id) => {
    const sumaPizza = filtrarPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setData(sumaPizza);
  };

  const resta = (id) => {
    const restaPizza = filtrarPizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count - 1 };
      }
      return pizza;
    });
    setData(restaPizza);
  };
  const totalPizzas = filtrarPizzas.reduce(
    (total, pizza) => total + pizza.price * pizza.count,
    0
  );
  return (
    <>
      <h1 id="cart">Detalles del pedido:</h1>
      <Container className="pt-1 pb-2 d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <div className="m-3 border p-4" style={{ width: "60vw" }}>
            {filtrarPizzas.map((filtroPizza) => (
              <div key={filtroPizza.id}>
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex gap-2 justify-content-center align-items-center">
                    <img src={filtroPizza.img} alt="" style={{ width: "180px", cursor: "pointer", paddingLeft: "20px" }}/>
                    <h3 className="m-0 text-capitalize">{filtroPizza.name}</h3>
                  </div>
                  <Col md={6} className="d-flex justify-content-end align-items-center">
                    <div className="text-end">
                      <Row>
                        <Col>
                          <h4 className="text-dark">${(filtroPizza.price * filtroPizza.count).toLocaleString("es-CL")}</h4>
                        </Col>
                        <Col>
                          <section style={{ paddingRight: "20px" }} className="d-flex align-items-center justify-content-end">
                            <Button variant="outline-danger" onClick={() => resta(filtroPizza.id)}>-</Button>
                            <span className="mx-2">
                              <h5>{filtroPizza.count}</h5>
                            </span>
                            <Button variant="outline-primary" onClick={() => suma(filtroPizza.id)}>+</Button>
                          </section>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </div>
                <hr />
              </div>
            ))}
            <h2>Total: ${totalPizzas.toLocaleString("es-CL")}</h2>
            <Button variant="dark" size="lg">Pagar</Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;