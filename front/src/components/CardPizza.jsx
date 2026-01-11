import Button from "react-bootstrap/Button";

const CardPizza = ({ pizzas }) => {
  return (
    <>
      {pizzas.map((pizza) => {
        return (
          <div className="card" key={pizza.id}>
            <div className="card-header">
              <img src={pizza.img} />
              <h3>Pizza {pizza.name}</h3>
            </div>
            <div className="card-body">
              <h4>🍕 Ingredientes:</h4>
              <ul>
                {pizza.ingredients.map((i) => {
                  return (
                    <li key={i}>{/* 🍕{" "} */}{i}</li>
                  );
                })}
              </ul>
              <div className="card-footer">
                <p>Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                <div className="btn_cf">
                  <Button className="card_btn" variant="light btn-outline-dark" size="lg">Ver Más 👀</Button>
                  <Button className="card_btn" variant="dark" size="lg">Añadir 🛒</Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardPizza;