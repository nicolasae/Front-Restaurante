import React, {Fragment} from 'react';
import Header from './Header/Header';
import Hero from './Header/Hero';
import Informacion from './Header/Informacion';
import Justificacion from './Header/Justificacion';
import Menu from './Header/Menu';
import Navegacion from './Header/Navegacion';


export default function HomePage(){

    return (

        <div>
            <Header/>

            <Hero/>
            
            <Informacion/>


            <Justificacion/>

            <Menu/>
                  
        </div>
    );


}