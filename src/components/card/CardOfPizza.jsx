import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AppContext } from '../../context/Context';
import { Button } from "react-bootstrap";
import './card.css'

function CardOfPizza() {
  const { data, total, setTotal, pedido, setPedido } = useContext(AppContext);
  const navigate = useNavigate();
  const handleAdd = (event) => {
    const añadirPizza = data.find((i) => event.target.id === i.id);
    setTotal(Number(total) + Number(añadirPizza.price));

    if (pedido.length > 0) {
      const existe = pedido.some(x => x.id === event.target.id);
      if (existe) {
        const actualizarPedido = pedido.map(v => {
          if (v.id === event.target.id) {
            return {
              ...v,
              cantidadItem: Number(v.cantidadItem) + 1,
              totalItem: Number(v.totalItem) + Number(añadirPizza.price)
            }
          }
          return v
        });
        setPedido(actualizarPedido);
      }
      else {
        let actualizarPedido = [...pedido];
        const agregarNuevoItem = {
          id: añadirPizza.id,
          img: añadirPizza.img,
          name: añadirPizza.name,
          price: añadirPizza.price,
          totalItem: añadirPizza.price,
          cantidadItem: 1
        }
        actualizarPedido.push(agregarNuevoItem)
        setPedido(actualizarPedido)
      }
    }
    else {
      let actualizarPedido = [...pedido];
      const agregarNuevoItem = {
        id: añadirPizza.id,
        img: añadirPizza.img,
        name: añadirPizza.name,
        price: añadirPizza.price,
        totalItem: añadirPizza.price,
        cantidadItem: 1
      }
      actualizarPedido.push(agregarNuevoItem)
      setPedido(actualizarPedido)
    }
  }
  return (
    <>
      <div className=" cop justify-content-md-center d-flex flex-wrap">
        {data.length !== 0 ? (
          data.map(value => (
            <Card key={value.id} className='cardPizza' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={value.img} />
              <Card.Body>
                <Card.Title className='title'><strong><big>{value.name}</big></strong></Card.Title>
                <hr />
                <Card.Text className='ingredientes'>Ingredientes:
                  <ul>
                    {value.ingredients.map(ingredient => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/pizza/:${value.id}`)} className="me-5">
                  Ver Mas...
                </Button>
                <Button id={value.id} variant="primary" onClick={(event) => handleAdd(event)}>
                  Añadir +</Button>
              </Card.Body>
              <hr />
              <p className='precio'>{value.price} $</p>
            </Card>
          ))
        ) : (<div>Loading</div>)}

      </div>
    </>
  );
}
export default CardOfPizza;