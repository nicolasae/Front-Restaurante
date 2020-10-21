import React from 'react';
import Chef1 from './../.././assets/img/chefs/chefs-1.jpg' 
import Chef2 from './../.././assets/img/chefs/chefs-2.jpg' 
import Chef3 from './../.././assets/img/chefs/chefs-3.jpg' 

export default function Chefs(){
    return (
        <section id="chefs" class="chefs">
      <div class="container">

        <div class="section-title">
          <h2>Chefs</h2>
          <p>Nuestros Chefs Profesionales</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <img src={Chef1} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                </div>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <img src={Chef2} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Sarah Jhonson</h4>
                  <span>Repostera</span>
                </div>
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="member">
              <img src={Chef3} class="img-fluid" alt=""/>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>William Anderson</h4>
                  <span>Cocinero</span>
                </div>
                <div class="social">
                  <a class="icofont-twitter"></a>
                  <a class="icofont-facebook"></a>
                  <a class="icofont-instagram"></a>
                  <a class="icofont-linkedin"></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    );


}