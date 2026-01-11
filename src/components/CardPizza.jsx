import Button from 'react-bootstrap/Button';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <img src={img}/>
          <h3>Pizza {name}</h3>
        </div>
        <div className='card-body'>
          <h4>Ingredientes:</h4>
          <p>🍕 {ingredients}</p>
          <div className='card-footer'>
            <p>Precio: ${price.toLocaleString('es-CL')}</p>
            <div className='btn_cf'>
                <Button className="card_btn" variant="light btn-outline-dark" size="lg">Ver Más 👀</Button>
                <Button className="card_btn" variant="dark" size="lg">Añadir 🛒</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
