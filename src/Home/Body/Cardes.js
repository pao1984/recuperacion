import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Estilos.css";

const Cardes = () => {
  return (
    <div>
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/photos/freshly-cooked-arepa-with-roasted-meat-picture-id924467650?k=20&m=924467650&s=612x612&w=0&h=_M_ZVQ2DXvo-3AFrZSk5deVuKb2EZBqSUtF3hMrbSCQ="
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Arepa con carne desmechada 
            </Card.Title>
            <Card.Text>
             Deliciosa y tradicional combinación de carne desmechada en su versión de arepa rellena 
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
              comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="cards" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-N2zADZrrU8H04icdE4x8QsVq9gg9sQaKg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Arepa con pollo desmechado
            </Card.Title>
            <Card.Text>
              Deliciosa y tradicional combinación de pollo desmechado desmechada en su versión de arepa rellena
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
              comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIHYVwbQnoyZ7f4pORu9x_nuEAyZ6zjup8Q&usqp=CAU"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
               arepa con queso 
            </Card.Title>
            <Card.Text>
             Deliciosa y tradicional  combinacion de arepa con queso campesino y doble crema 
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary">
               comprar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cardes;
