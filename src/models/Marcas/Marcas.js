import React from "react";
import "./arepas.css";
import Foter from './../../Home/Foother/Foter';
import Navbaraapp from "./../../Home/Navbar/Navbaraapp"
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Marcas = () => {
    let navigate = useNavigate();
  return (
    <div>
        <Navbaraapp/>
      {/**Card */}
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2021/05/Antioquena-Rellena-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Arepa Antioqueña
            </Card.Title>
            <Card.Text>
            Lo mejor de nuestro sabor y tradición ahora convertida en una deliciosa arepa rellena de fríjol, plátano maduro, chicharrón, aguacate y queso mozarella.

$17,400
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"    type="submit" onClick={() => {
            navigate("/");
          }}              >
               Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2018/12/arepa-rellena-de-carne-desmechada-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Arepa con Carne Desmechada
            </Card.Title>
            <Card.Text>
            Deliciosa y tradicional combinación de carne desmechada en su versión de arepa rellena con queso mozzarella

$17,400
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"  type="submit" onClick={() => {
            navigate("/");
          }}   >
               Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2021/05/Arepa-rellena-de-pollo-tocineta-y-pina-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Arepa Rellena Pollo, Tocineta y Piña </Card.Title>
            <Card.Text>
            Receta clásica con tus ingredientes favoritos: pollo, tocineta y piña en una deliciosa arepa rellena de J&C.

$18,500
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
               Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2021/05/Arepa-rellena-canon-con-hogao-1-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Cañon con Hogao
            </Card.Title>
            <Card.Text>
            Una de nuestra arepas más conocidas ahora en su versión de arepa rellena. ¡Cañón con hogao!

$16,900
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}    >
              Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/**Card */}
      <div className="card-container">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2018/02/pollo-tocineta-y-queso-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Pollo, Tocineta y Queso
            </Card.Title>
            <Card.Text>
            Otra de nuestras recetas clásicas en su versión de arepa rellena con su exquisita combinación de pollo con queso y tocineta al puro estilo J&C

$17,400
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"     type="submit" onClick={() => {
            navigate("/");
          }}   >
             
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2021/05/arepa-antioquena-1-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Arepa Antioqueña
            </Card.Title>
            <Card.Text>
            Guacamole, fríjoles, chicharrón y chorizo

Desde $22,400
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"    type="submit" onClick={() => {
            navigate("/");
          }}   >
               Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2017/08/mafalda-1-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>Arepa Mafalda </Card.Title>
            <Card.Text>
            Quesito, pollo con salsa, jamón y piña

Desde $20,800
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
              Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.jycdelicias.co/wp-content/uploads/2016/07/Pepita-322x342.jpg"
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
            Arepa Pepita
            </Card.Title>
            <Card.Text>
            Mozzarella, guacamole, chorizo y maíz tierno

Desde $19,500
            </Card.Text>
            <div className="cont-btn">
              <Button className="boton" variant="primary"   type="submit" onClick={() => {
            navigate("/");
          }}   >
             Comprar
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <Foter/>
    </div>
  );
};

export default Marcas;