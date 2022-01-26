import React from 'react'
import "./foter.css"
import { GrFacebook, GrInstagram,  } from "react-icons/gr";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";



const Foter = () => {
    return (
        <footer>
        <div className='container-footer-all'>
        
        
        
                <div className="container-body">
                  <div className="colum1">
                 <h1></h1>
                      <img src="https://mlykfafsfej0.i.optimole.com/wPnHSd0-lUvUefUs/w:auto/h:auto/q:90/http://arepatogo.co/wp-content/uploads/2020/01/delivery_bike-min.png"/>
                
                   
                  </div>
        
        
                  <div className="colum2">
                    <h1>Redes Sociales</h1>

                    <div className="row">
                    <label><GrFacebook  className='Face' />Siguenos en Facebook</label>
                    </div>

                    <div className="row">
                     
                      <label> <GrInstagram className='Face'  />    Siguenos en Instagram</label>
                    </div>

                  </div>
        
        
                  <div className="colum3">
                    <h1>Contacto Domicilios</h1>
                    <div className="row2">

                      <label> <BsWhatsapp className="Face" />  +57 316 5799936</label>
                    </div>
                    <div className="row2">
                      
                      <label className='re'> <FaEnvelope className="Face" /> masquearepas@gmail.com</label>
                    </div>
                  </div>
        
        
                </div>
        
                </div>
        
                <div className="container-footer">
                  <div className='footer'>
                  <hr />
                  <div className="copyright">
                    Copyright © 2022 <b>mas que arepas </b> |  Todos los derechos reservados
                  </div>
                  <div className="information">
                    <a href> Política de privacidad</a>| <a href>Aviso Legal</a>  | <a href> Terminos y condiciones </a>  
                  </div>
                  </div>
                </div>
        
        
              </footer>
    )
}

export default Foter

