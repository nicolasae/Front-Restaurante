import React, {Fragment} from 'react';
import Header from './Header/Header';
import TopBar from './Header/TopBar';
import Hero from './Header/Hero';
import Informacion from './Header/Informacion';
import Justificacion from './Header/Justificacion';
import Menu from './Header/Menu';
import Navegacion from './Header/Navegacion';
import Reservacion from './Header/Reservacion';
import Testimonios from './Header/Testimonios';
import Galeria from './Header/Galeria';
import Footer from './Header/Footer';
import Testimonio from './Header/Testimonios';






export default function HomePage(){

    return (

        <div>

            <TopBar/>

            <Header/>

            <Hero/>
            
            <Informacion/>


            <Justificacion/>

            <Menu/>

            <Reservacion/>

            <Testimonio/>
                  
        </div>
    );


}