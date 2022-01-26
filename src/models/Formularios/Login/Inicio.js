import React from 'react'
import "./Inicio.css"
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiTwotoneLock } from "react-icons/ai";
import { BsFillEnvelopeFill, BsFillPersonFill  } from "react-icons/bs";

const Inicio = () => {
    return (
        <div className='body'>
           <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7KCxfIFx6M1sJMfMufqC_zaOHY0JkpWzfA&usqp=CAU" alt="" />
          </div>
        </div>
        <form action="#">
          <div className="form-content">
            <div className="login-form">
              <div className="title">
                LOGIN
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <BsFillPersonFill className="i" />
                  <input type="text" placeholder="Usuario o email" required />
                </div>
                <div className="input-box">
                  <AiTwotoneLock className="i" />
                  <input type="password" placeholder="Contraseña" required />
                </div>
                <div className="input-box">
                  <div className="text"><a> ¿Se te olvido tu contraseña? </a> </div>
                </div>
                <div className="button input-box">
                <NavLink exact to="/" className="Nav"><input type="submit"defaultValue="Ingresar" /></NavLink> 
                </div>
                <div className="text   sign-up-text ">¿No tienes cuenta? <label htmlFor="flip">Regístrate ya</label>
                </div>
              </div>
            </div>
            <div className="signup-form">
              <div className="title">
                REGISTRO
              </div>
              <div className="input-boxes">
                <div className="input-box">
                  <AiOutlineUser className='i' />
                  <input type="text" placeholder="Nombre" required />
                </div>
                <div className="input-box">
                  <BsFillEnvelopeFill className="i" />
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="input-box">
                  < AiTwotoneLock  className="i" />
                  <input type="password" placeholder="Contraseña" required />
                </div>
                <div className="button input-box">
                  <input type="submit" defaultValue="Guardar" />
                </div>
                <div className="text sign-up-text">¿Ya tienes cuenta? <label htmlFor="flip">Inicia seccion</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
        </div>
    )
}

export default Inicio

