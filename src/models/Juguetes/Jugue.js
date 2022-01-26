import React from 'react'
import { NavLink } from "react-router-dom";
import Foother from './../../Home/Foother/Foter'
import Navbaraapp from "./../../Home/Navbar/Navbaraapp"

import "./Jugu.css"

const Jugue = () => {
    return (
<div>
        <Navbaraapp/>        
      
        <div className="pastel">
          <h2 className="subtitulo">BLOG DE RECETAS </h2>
         </div>
         <div className="yuca">
      <div>
        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">Arepas santandereanas</h3>

            <p>
            Muela el maíz pelado y cocido, los chicharrones y la yuca.La masa obtenida póngala en una tabla o mesa plana y agregue sal y agua tibia para amasar hasta obtener una pasta suave y manejable.
            Forme las arepas hasta el grosor y el tamaño que desee. Si desea puede ponerlas sobre un plástico para que no se peguen.
            Llévelas sobre una parrilla o lata previamente engrasada y precalentada a fuego lento. Deje que doren por ambos lados. Sirva y disfrute. 
            </p>
          </div>
          <div className="cont-img">
          <NavLink exact to="/" > <img
               className="img"
       src="https://cdn.colombia.com/gastronomia/2012/08/27/arepas-santandereanas-1737.webp"
           
           />  </NavLink>
          </div>
        </div>

        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">Arepas rellenas de pollo, aguacate y plátano maduro</h3>

            <p>
            En un tazón mezclar la harina de maíz con agua y leche tibia.Poco a poco, adicionar la mantequilla derretida y los otros ingredientes. Primero mezclar con una cuchara y luego amasar con las manos para dar textura de moldeado; sabemos que la masa está en su punto cuando no se pega a las manos.
            Hacer arepas medianas de 1,5 cm de grosor (un dedo aprox.) por unos 8 cm de diámetro y asarlas por las dos caras.
            Cortar el plátano maduro en cubos pequeños y freír en aceite caliente, retirar y dejar escurrir en una toalla de papel.
            Pelar el aguacate y cortarlo en cubos pequeños.Saltee los ajos y la cebolla en un poco de aceite, adicione el pollo, sal, pimienta y deje dorar.
            Adicione un poco de agua o caldo de pollo, que cubra hasta la mitad los cortes de carne, deje cocinar. La carne debe quedar jugosa
            Retire el pollo del caldo y deje enfriar.Retire la piel del pollo y desméchelo en finas tiras en un recipiente
            Adicione la mayonesa y el cilantro, mezcle, agregue el aguacate con cuidado y el plátano frito, si cree necesario añada sal. 
            Realice un corte profundo en cada arepa caliente y rellene con la mezcla anterior.
            </p>
          </div>

          <div className="cont-img">
            <img
              className="img"
              src="https://cdn.colombia.com/gastronomia/2014/05/26/arepas-rellenas-de-pollo-aguacate-y-platano-maduro-1727.webp"
            />
          </div>
        </div>

        <div className="modificar">
          <div className="cont-text">
            <h3 className="section-h1">Arepas rellena con salchicha y maiz tierno</h3>

            <p>
            Vierte la mezcla de maíz con la leche en un recipiente y añade la mantequilla. Calienta a fuego medio hasta que la leche empiece a hervir.
Retira del fuego y deja enfriar durante 2 minutos.
            </p>
          </div>
          <div className="cont-img">
            <img
              className="img"
              src=" https://www.rica.com.co/wp-content/uploads/2017/11/arepa-rellena"
            />
          </div>
        </div>
      </div>
</div>
      <Foother/>
        </div>
    )
}

export default Jugue
