import React from 'react';
//import video from '../src/assets/video.mp4';

export default function Hero(){
    return (
      <section id="hero" className="d-flex align-items-center">
      <div className="container position-relative text-center text-lg-left" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <h1>Bienvenido a  <span>Ristorante NCJ</span></h1>
            <h2>Compartiendo delicias desde hace más de 30 años!</h2>
  
            <div className="btns">
              <div className="btn-menu animated fadeInUp scrollto">Nuestro Menu</div>
              <div className="btn-book animated fadeInUp scrollto">Reserve Aquí</div>
            </div>
          </div>

          <div className="col-lg-4 d-flex align-items-center justify-content-center"data-aos-delay="200">
            <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="venobox play-btn" data-vbtype="video" data-autoplay="true"></a>
          </div>
  
        </div>
      </div>
    </section>
    );
    

}