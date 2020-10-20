import React, {Fragment} from 'react';
//Entradas
import Entradas1 from './../.././assets/img/menu/Entrada_Albondigas.png'
import Entradas2 from './../.././assets/img/menu/Entrada_Camarones.png'
import Entradas3 from './../.././assets/img/menu/Entrada_Champiñones.png'
//Sopas
import Sopas1 from './../.././assets/img/menu/Sopa_Brocoli.png'
import Sopas2 from './../.././assets/img/menu/Sopa_Tomate.png'
import Sopas3 from './../.././assets/img/menu/Sopa_Pollo.png'
//Ensaladas
import Ensaladas1 from './../.././assets/img/menu/Ensalada_Cesar.png'
import Ensaladas2 from './../.././assets/img/menu/Ensalada_Rusa.png'
import Ensaladas3 from './../.././assets/img/menu/Ensalada_Verde.png'
//Carnes
import Carnes1 from './../.././assets/img/menu/Carne_ReyFaruk.png'
import Carnes2 from './../.././assets/img/menu/Carne_Rollo.png'
import Carnes3 from './../.././assets/img/menu/Carne_Solomito.png'
//Pollo
import Pollos1 from './../.././assets/img/menu/Pollo_Francesa.png'
import Pollos2 from './../.././assets/img/menu/Pollo_Parmesano.png'
import Pollos3 from './../.././assets/img/menu/Pollo_Teriyaki.png'
//Pescado
import Pescados1 from './../.././assets/img/menu/Pescado_Cazuela.png'
import Pescados2 from './../.././assets/img/menu/Pescado_FileteGratinado.png'
import Pescados3 from './../.././assets/img/menu/Pescado_Langostinos.png'






export default function HomePage(){

    return (

        <section id="menu" className="menu section-bg">
        <div className="container" >
  
          <div className="section-title">
            <h2>Menu</h2>
            <p>Revisa nuestro delicioso Menu</p>
        </div>
  
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                    <li>Todo</li>
                    <li >Entradas</li>
                    <li >Carnes</li>
                    <li >Pollos</li>
                    <li >Pescados</li>
                    <li >Sopas</li>
                    <li >Ensaladas</li>
                    <li >Bebidas</li>
                    <li >Postres</li>

                </ul>
                </div>
            </div>
  
            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Entradas1} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Albondigas</a><span>$10.000</span>
                    </div>
                <div className="menu-ingredients">
                    Pequeñas bolas de carne molida acompañadas de una
                    salsa blanca hecha a base de cebollin.
                </div>
                </div>
            </div>

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Entradas2} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Champiñones Gratinados</a><span>$14.000</span>
                </div>
                <div className="menu-ingredients">
                    Champiñones rellenos horneados con jamón, queso y salsa bechamel.

                </div>
                </div>
            </div>

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Entradas3} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Camarones al Ajillo</a><span>$22.000</span>
                </div>
                <div className="menu-ingredients">
                    Camarones dorados y bañados en ajo y limón con salsa al gusto.
                </div>
                </div>
            </div>       
        
            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Sopas1} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Crema de Tomate</a><span>$20.000</span>
                </div>
                <div className="menu-ingredients">
                    Una crema de tomate elaborada con tomates frescos,
                    perfecta para tomar fría o caliente.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Sopas2} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Sopa de Pollo</a><span>$10.000</span>
                </div>
                <div className="menu-ingredients">
                Delicioso caldo hecho de pollo y fideos para acompañar un plato
                fuerte, además trae limón si le desea adicionar.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Sopas3} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Crema de Brócoli</a><span>$10.000</span>
                </div>
                <div className="menu-ingredients">
                    Crema verde hecha a base de brócoli y espinaca, baja en
                    calorías, para cuidar tu salud.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Ensaladas1} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Ensalada César</a><span>$20.000</span>
                </div>
                <div className="menu-ingredients">
                    Ensalada hecha con trocitos de pollo, acompañada de crutones
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Ensaladas2} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Ensalada Rusa</a><span>$18.000</span>
                </div>
                <div className="menu-ingredients">
                    Ensalada de papa con aceitunas y guisantes.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Ensaladas3} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Ensalada Verde</a><span>$20.000</span>
                </div>
                <div className="menu-ingredients">
                    Ensalada de aguacate con cebolla y tomate verde
                </div>
                </div>
            </div> 
            
            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Carnes1} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Solomito Bourguignon</a><span>$32.000</span>
                </div>
                <div className="menu-ingredients">
                    Medallones de lomito de res, demiglace, vino tinto, tocineta y champiñones.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Carnes2} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Rollo de carne al horno</a><span>$23.000</span>
                </div>
                <div className="menu-ingredients">
                    Carne de res magra con hierbas y especias en salsa de champiñones.
                </div>
                </div>
            </div> 

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Carnes3} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Rey Faruk</a><span>$38.000</span>
                </div>
                <div className="menu-ingredients">
                    Tournedos de res, demiglace, vino tinto, mariscos y crema de leche.
                </div>
                </div>
            </div> 
            
            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Pollos1} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Pollo Teriyaki</a><span>$28.000</span>
                </div>
                <div className="menu-ingredients">
                    Trozos de pollo al wok con brócoli y salsa oriental
                </div>
                </div>
            </div>

            <div className="row menu-container" >
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Pollos2} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>Pollo Parmesano</a><span>$28.000</span>
                </div>
                <div className="menu-ingredients">
                    Apanado, salsa italiana, mozzarella, parmesano, al gratín.
                </div>
                </div>
            </div> 

            <div className="row menu-container" data-aos-delay="200">
                <div className="col-lg-6 menu-item filter-starters">
                    <img src={Pollos3} className="menu-img" alt=""/>
                    <div className="menu-content">
                    <a>FIlete de Pollo a la Francesa</a><span>$28.000</span>
                </div>
                <div className="menu-ingredients">
                    Salsa bechamel, vino blanco, mantequilla, hierbas y limón.Salsa bechamel,
                    vino blanco, mantequilla, hierbas y limón.
                <div>
                </div>
            </div> 






        </div>
        </div>
        </div>
      </section> 
    );

}