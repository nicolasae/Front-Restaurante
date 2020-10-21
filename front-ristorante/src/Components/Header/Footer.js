import React from 'react';

export default function Footer(){
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>Ristorante NCJ</h3>
                                <p>
                                Pinares <br/>
                                Pereira,Colombia<br></br>
                                <strong>Telefono:</strong> 333 5567 321 <br/>
                                <strong>Correo:</strong> info@ejemplo.com<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a className="bx bxl-twitter"></a>
                                    <a className="bx bxl-facebook"></a>
                                    <a className="bx bxl-instagram"></a>
                                    <a className="bx bxl-skype"></a>
                                    <a className="bx bxl-linkedin"></a>
                                </div>
                            </div>
                        </div>
        

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Ristorante NCJ</span></strong>.Todos los derechos reservados
                </div>
                <div className="credits">
                </div>
            </div>


        </footer>



    );


}