import React from 'react'
import Navbar  from './Navbar/Navbaraapp'
import Foter from './Foother/Foter'
import Sli from './Hero/Sli'
import Cardes from './Body/Cardes'
import Texto from "./Body/texto"


const Casa = () => {
    return (
        <div>
            <Navbar/>
            <Sli/>
           

            <Cardes/>
            <Texto/>
            <Foter/>
           
           
        </div>
    )
}

export default Casa
