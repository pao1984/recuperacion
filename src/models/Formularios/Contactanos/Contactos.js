import React from 'react'
import { useNavigate } from "react-router-dom";
import "animate.css"
import "./Contac.css"
import { FaEnvelope } from "react-icons/fa";
import { GoLocation} from "react-icons/go";
import { ImPhone} from "react-icons/im";

const Contactos = () => {
    let navigate = useNavigate();
    return (
   <div className="body">
  <div className="content">
          <h1 className="logo">MAS QUE AREPAS </h1>
          <div className="contact-wrapper">
            <div className="contact-from">
              <h3>Contáctanos</h3>
              <form action>
                <p>
                  <label>Nombre</label>
                  <input type="text" name="nombre" />
                </p>
                <p>
                  <label>Email </label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label>Telefono</label>
                  <input type="tel" name="phone" />
                </p>
                <p>
                  <label>Asunto</label>
                  <input type="text" name="asunto" />
                </p>
                <p className="block">
                  <label>Mensaje</label>
                  <textarea name="message" rows={3} defaultValue={""} />
                </p>
                <p className="block">
                  <button type="submit" onClick={() => {
            navigate("/");
          }}   >Enviar</button>
                </p>
              </form>
            </div>
            <div className="contact-info">
              <h4>Más Información</h4>
              <ul>
                <li> <i> <GoLocation/>   Colombia</i></li>
                <li> <i><ImPhone/>+3217002155</i></li>
                
              </ul>
              <p>Nos pueden encontrar en la carrera 36 #30-45 /Barrio victoria en (tulua valle) mas de 
                25 años en el mercado
                Porque queremos mejorar día a día y dejar una huella positiva en el mundo </p>
            </div>
  

          </div>
        </div>
  
        </div>
  
  
    );
  };

export default Contactos
