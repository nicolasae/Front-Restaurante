import React from 'react';
import imagen from './../.././assets/img/about.jpg';

export default function Informacion(){
    return (
        <section id="informacion" className="informacion">
        <div className="container" data-aos="fade-up">
            <div className="row">
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img src= {imagen} alt=""/>
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>Reconocimiento</h3>
              <p className="font-italic">
              Durante cuatro años consecutivos Pastelería Lucerna reúne 4 galardones en la categoría Mejor Propuesta de Pastelería 
              en la Región Eje Cafetero.Los Premios La Barra son los galardones más importante para el sector gastronómico en Colombia
              y durante 14 versiones han reconocido a los mejores Establecimientos y Personalidades, quienes por su gestión, desempeño y 
              servicio se destacan en su región de origen.
              </p>
            </div>
          </div>
  
        </div>
      </section> 

    );


}