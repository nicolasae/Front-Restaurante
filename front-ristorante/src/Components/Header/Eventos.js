import React from 'react';
import Imagen1 from './../.././assets/img/event-birthday.jpg';
import Imagen2 from './../.././assets/img/event-private.jpg';
import Imagen3 from './../.././assets/img/event-custom.jpg';


export default function Footer(){
    return (
        <section id="events" className="events">
      <div className="container">

        <div className="section-title">
          <h2>Eventos</h2>
          <p>Organiza tus eventos en nuestro restaurante </p>
        </div>


          <div className="row event-item">
            <div className="col-lg-6">
              <img src={Imagen1} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Fiestas de Cumpleaños</h3>
              <div className="price">
                <p><span>$189</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          <div className="row event-item">
            <div className="col-lg-6">
              <img src={Imagen2} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Fiestas Privadas</h3>
              <div className="price">
                <p><span>$290</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          <div className="row event-item">
            <div className="col-lg-6">
              <img src={Imagen3} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content">
              <h3>Fiestas Personalizadas</h3>
              <div className="price">
                <p><span>$99</span></p>
              </div>
              <p className="font-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

        </div>

    </section>



    );


}