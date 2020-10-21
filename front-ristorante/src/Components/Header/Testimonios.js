import React from 'react';
import Testimonio1 from './../.././assets/img/testimonials/testimonials-1.jpg';
import Testimonio2 from './../.././assets/img/testimonials/testimonials-2.jpg';
import Testimonio3 from './../.././assets/img/testimonials/testimonials-3.jpg';


export default function Testimonio(){
    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Testimonios</h2>
                    <p>¿Qué dicen sobre nosotros?</p>
                </div>
                
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Excelente servicio, este deberia ser el ejemplo a seguir por cualquier restaurante en Pereira
                            De los alimentos que le puedo decir, es un claro ejemplo de la alta cocina colombiana.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Testimonio1} className="testimonial-img" alt=""/>
                        <h3>Juan Gómez</h3>
                        <h4>Abogado</h4>
                    </div>

                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Excelente lugar muy recomendable. La comida está excelente gran variedad de platillos.
                            Muy buen ambiente y servicio.                        
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Testimonio2} className="testimonial-img" alt=""/>
                        <h3>Sara Ospina</h3>
                        <h4>Diseñadora</h4>
                    </div>

                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Este restaurant es muy bueno siempre con una cocina con platillos muy bien preparados y de alto nivel por el chef
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Testimonio3} className="testimonial-img" alt=""/>
                        <h3>Laura Noya</h3>
                        <h4>Ingeniera</h4>
                    </div>
                </div>           
        </section>

    );


}