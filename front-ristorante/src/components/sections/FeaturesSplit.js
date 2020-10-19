import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
//Para el carousel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
//Imágenes del carousel
import entrada1 from './../../assets/images/Menu/Entrada_1.png'
import entrada2 from './../../assets/images/Menu/Entrada_2.png'
import entrada3 from './../../assets/images/Menu/Entrada_3.png'

import adicional1 from './../../assets/images/Menu/Adicional_1.png'
import adicional2 from './../../assets/images/Menu/Adicional_2.png'
import adicional3 from './../../assets/images/Menu/Adicional_3.png'

import bebidacaliente1 from './../../assets/images/Menu/Bebida_Caliente_1.png'
import bebidacaliente2 from './../../assets/images/Menu/Bebida_Caliente_2.png'
import bebidacaliente3 from './../../assets/images/Menu/Bebida_Caliente_3.png'

import bebidafria1 from './../../assets/images/Menu/Bebida_Fria_1.png'
import bebidafria2 from './../../assets/images/Menu/Bebida_Fria_2.png'
import bebidafria3 from './../../assets/images/Menu/Bebida_Fria_3.png'

import carne1 from './../../assets/images/Menu/Carne_1.png'
import carne2 from './../../assets/images/Menu/Carne_2.png'
import carne3 from './../../assets/images/Menu/Carne_3.png'

import ensalada1 from './../../assets/images/Menu/Ensalada_1.png'
import ensalda2 from './../../assets/images/Menu/Ensalada_2.png'
import ensalada3 from './../../assets/images/Menu/Ensalada_3.png'

import pescado1 from './../../assets/images/Menu/Pescado_1.png'
import pescado2 from './../../assets/images/Menu/Pescado_2.png'
import pescado3 from './../../assets/images/Menu/Pescado_3.png'

import pollo1 from './../../assets/images/Menu/Pollo_1.png'
import pollo2 from './../../assets/images/Menu/Pollo_2.png'
import pollo3 from './../../assets/images/Menu/Pollo_3.png'

import postre1 from './../../assets/images/Menu/Postre_1.png'
import postre2 from './../../assets/images/Menu/Postre_2.png'
import postre3 from './../../assets/images/Menu/Postre_3.png'

import sopa1 from './../../assets/images/Menu/Sopa_1.png'
import sopa2 from './../../assets/images/Menu/Sopa_2.png'
import sopa3 from './../../assets/images/Menu/Sopa_3.png'


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Menú',
    paragraph: 'Tenemos una gran diversidad de platos que puedes disfrutar en nuestro establecimiento o disfrutar de ellos sin moverte de donde estás.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Entradas:
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Albondigas</li>
                    <li>Champiñones Gratinados</li>
                    <li>Camarones al Ajillo</li>
                  </ol>
                </p>
              </div>
              <div className="App">
                <AliceCarousel
                  autoPlay = {true}
                  onResized = {true}
                  playButtonEnabled={true}
                  //itemsInSlide= {3}
                  autoPlayInterval={1500}
                  >

                  <img src={entrada1} className="sliderimg" alt="Entradas 1"  width="528" height="396" />
                  <img src={entrada2} className="sliderimg" alt="Entradas 2" width="528" height="396" />
                  <img src={entrada3} className="sliderimg" alt="Entradas 3" width="528" height="396" />

                </AliceCarousel>
                </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Carnes 
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Solomito Bourguignon</li>
                    <li>Rollo de carne al horno</li>
                    <li>Rey Faruk</li>
                  </ol>                
                </p>
              </div>
              <div className="App">
                <AliceCarousel
                  autoPlay = {true}
                  onResized = {true}
                  playButtonEnabled={true}
                  //itemsInSlide= {3}
                  autoPlayInterval={1500}
                  buttonsDisabled={true} 
                  mouseDragEnabled={true}
                  >

                  <img src={carne1} className="sliderimg" alt="Carne 1"  width="528" height="396" />
                  <img src={carne2} className="sliderimg" alt="Carne 2" width="528" height="396" />
                  <img src={carne3} className="sliderimg" alt="Carne 3" width="528" height="396" />
                </AliceCarousel>
                </div>
            </div>
            
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Pollo
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Pollo Teriyaki</li>
                    <li>Pollo Parmesano</li>
                    <li>Filete de Pollo a la Francesa</li>
                  </ol>                 
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Pescados y Mariscos 
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Cazuela de Mariscos</li>
                    <li>Filete Gratinado</li>
                    <li>Langostinos al gusto</li>
                  </ol>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Sopas
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Crema de Tomate</li>
                    <li>Sopa de Pollo</li>
                    <li>Crema de Brócoli</li>
                  </ol>  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Ensaladas 
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Ensalada César</li>
                    <li>Ensalada Rusa</li>
                    <li>Ensalada Verde</li>
                  </ol>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Bebidas Calientes
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Aguapanela con queso</li>
                    <li>Té</li>
                    <li>Café</li>
                  </ol>                  
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Bebidas Frías
                  </h3>
                <p className="m-0">
                  <ol>
                    <li>Jugos Naturales</li>
                    <li>Cerveza</li>
                    <li>Sangría</li>
                  </ol>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Postres
                  </h3>
                <p className="m-0">
                <ol>
                    <li>Flan de Café</li>
                    <li>Tiramisú</li>
                    <li>Panacota</li>

                  </ol>                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Adicionales
                  </h3>
                <p className="m-0">
                <ol>
                    <li>Cascos de Papa</li>
                    <li>Aros de Cebolla</li>
                    <li>Coctél de Camarones</li>

                  </ol>                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;