import React from "react";
import "./Estilos.css";
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from "react-router-dom";

const Sli = () => {
  return (
    <div className="contenedor">
      <section className="banner">
        <div className="banner-content">
          <h1>MAS QUE AREPAS </h1>
          <p>
           Ofrecemos arepas de execelente calidad arepas rellenas y crocantes para todos los gustos con los mejores ingredientes. 
           visítanos en tulua para tener el gusto de atenderlos 
          
          </p>
          <div className="btnBox">
            <div className="btn">
              <NavLink exact to="/Contactenos" className="readMore">
               
                Contáctanos
              </NavLink>
            </div>
          </div>
        </div>

        <div className="rosel">
          <Carousel className="Carousel">
            <Carousel.Item className="Item">
              <img
                
                src="https://media.gettyimages.com/photos/typical-venezula-snack-stuffed-arepa-with-mushrooms-smoked-chicken-picture-id1207746935?k=20&m=1207746935&s=612x612&w=0&h=G-phtq5JcT6gnHPRWSwCiMcagj0Nr1Qmmlo1n2HwrW8="
                
              />
              
            </Carousel.Item >
            <Carousel.Item  className="Item">
              <img
                
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREwu_TLxnCdyWQ9L0QMQlDvpsFzx0mL2oK5g&usqp=CAU"
                
              />

            </Carousel.Item>
            <Carousel.Item className="Item" >
              <img
                
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_g4rkF6rkaIA7yJJpNRxdDS4I_TPL3JxM-5rU93x0RzTognbXWjalN8ChfFgr_uA-WDk&usqp=CAU"
                
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Sli ;
