import React from 'react';
import Imagen1 from './../.././assets/img/gallery/gallery-1.jpg' 
import Imagen2 from './../.././assets/img/gallery/gallery-2.jpg' 
import Imagen3 from './../.././assets/img/gallery/gallery-3.jpg' 
import Imagen4 from './../.././assets/img/gallery/gallery-4.jpg' 
import Imagen5 from './../.././assets/img/gallery/gallery-5.jpg' 
import Imagen6 from './../.././assets/img/gallery/gallery-6.jpg' 
import Imagen7 from './../.././assets/img/gallery/gallery-7.jpg' 
import Imagen8 from './../.././assets/img/gallery/gallery-8.jpg' 

export default function Galeria(){
    return (
        <section id="gallery" className="gallery">

      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>Algunas fotos de nuestro restaurante</p>
        </div>
      </div>

      <div className="container-fluid" >

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen1} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen2} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen3} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen4}alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen5} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen6} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen7} alt="" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <img src={Imagen8} alt="" className="img-fluid"/>
            </div>
          </div>

        </div>

      </div>
    </section>

    );


}