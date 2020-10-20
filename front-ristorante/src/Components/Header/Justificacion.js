import React from 'react';
//import video from '../src/assets/video.mp4';

export default function Justificacion(){
    return (
      <section id="porque-nosotros" class="porque-nosotros">
      <div class="container">

        <div class="section-title">
          <h2>¿Por qué nosotros?</h2>
          <p>¿Por qué elegir nuestro Restaurante</p>
        </div>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" >
              <span>01</span>
              <h4>Calidad</h4>
              <p>Las mejores comidas</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" >
              <span>02</span>
              <h4>Precio</h4>
              <p>Los mejores precios</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" >
              <span>03</span>
              <h4> Locación</h4>
              <p>Un espacio rodeado de naturaleza con vistas espectaculares</p>
            </div>
          </div>

        </div>

      </div>
    </section>
      );
    

}