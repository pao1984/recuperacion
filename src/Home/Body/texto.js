import React from "react";
import "./styled.css";

const texto = () => {
  return (
    <div className="yuca">
      <div>
        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">NUESTROS COMPROMISOS SON</h3>

            <p>
            Con el cliente Darle atención y servicio de calidad  Brindar un trato Honesto  Ofrecer excelente calidad de nuestros productos.
 Con el Personal Capacitar y fomentar la Honestidad, Armonía, Eficiencia y Calidad de su desempeño con respeto y buena comunicación
            </p>
          </div>
          <div className="cont-img">
            <img
              className="img"
              src="https://media.gettyimages.com/photos/woman-holding-a-plate-with-arepas-picture-id1333572361?k=20&m=1333572361&s=612x612&w=0&h=Skp1uITzKJDq4HMUmDKqpTAF5h7Ni92_DGPdPWGQL4I="
            />
          </div>
        </div>

        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">MISION</h3>

            <p>
            Ofrecer productos de calidad que satisfagan las necesidades de cada uno de los consumidores garantizando de este modo la permanencia en el mercado y consolidación de nuestra micro empresa  
            </p>
          </div>

          <div className="cont-img">
            <img
              className="img"
              src="https://victoria.com.co/wp-content/uploads/Victoria-marzo-130536-1200x800.jpg"
            />
          </div>
        </div>

        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">VISION</h3>

            <p>
            Para el año 2025 Más que arepas buscar ser una empresa líder en el mercado a nivel municipal y departamental con los productos únicos tanto de sabor y calidad en arepas de maíz 
            </p>
          </div>
          <div className="cont-img">
            <img
              className="img"
              src=" https://media.gettyimages.com/photos/arepa-with-avocado-and-plantains-picture-id1160617279?k=20&m=1160617279&s=612x612&w=0&h=X71cBSWXtGnf87BjHEUirCnn8fGkLYa-N4K6IfUuo5M="
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default texto;
