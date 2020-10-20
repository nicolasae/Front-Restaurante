import React from 'react';
import imagen from './../.././assets/img/about.jpg';

export default function Informacion(){
    return (
      <section id="about" class="about">
      <div class="container" >

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" >
            <div class="about-img">
              <img src={imagen} alt=""/>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Información.</h3>
            <p class="font-italic">
              Datos del restaurante.
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> xxxxx.</li>
              <li><i class="icofont-check-circled"></i> xxxxxxx.</li>
              <li><i class="icofont-check-circled"></i> xxxxxxx.</li>
            </ul>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </div>

      </div>
    </section> 

    );


}