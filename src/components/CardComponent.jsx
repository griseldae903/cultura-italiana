import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/esm/Carousel';
import Card from 'react-bootstrap/esm/Card';
import italyImage from "./italy-4090933_1280.jpg";
import gondolaImage from "./gondola-1035684_1280.jpg";
import portofinoImage from "./portofino.jpg";
import './CardComponent.css';
import Casita from './Casita.jpg';
import venice from './venice 01.jpg';
import orange from './ORANGE.jpg';
import bandera from './bandera.jpg';




function DarkVariantExample() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);

  return (


    <div style={{ marginTop: '200px', textAlign: 'center' }}>
     <h4 id="cancel">"Cruces culturales entre Italia y Argentina"</h4>
      
      {/* Carousel Component */}
      <Carousel data-bs-theme="dark" className="custom-carousel hide-carousel-lines" style={{ maxWidth: '50%', margin: 'auto'}} controls={false} indicators={false}>
        <Carousel.Item className="custom-carousel-item">
          <img
            style={{ maxWidth: '100%' }}
            className="d-block w-100 custom-image"
            src={italyImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="custom-carousel-item" >
          <img
            style={{ maxWidth: '100%' }}
            className="d-block w-100 custom-image"
            src={gondolaImage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="custom-carousel-item" >
          <img
            style={{ maxWidth: '100%' }}
            className="d-block w-100 custom-image"
            src={portofinoImage}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>

      <div className='argentina'><h4 >"Viva l'orgoglio italiani. Davvero non abbiamo limiti"</h4></div>
      {/* Card Component */}
      <div className="row mt-4 justify-content-center">
                <div className="col-md-4 mb-4" style={{ width: '23%',  marginRight: '9%' }}>
                  <Card className='cardd' style={{ maxWidth: '100%' }}>
                  <a href="https://griseldae903.github.io/acerca" >
                    <Card.Img variant="top" src={Casita} style={{ height: '260px', width:'100%' }}/></a>
                    <Card.Body>
                      <Card.Title>Un poco de mí</Card.Title>
                      <Card.Text>
                        Historia, en Buenos Aires.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                  <div className="col-md-4 mb-4" style={{ width: '30%', marginRight: '8%' }}>
                    <Card className='cardd' style={{ maxWidth: '100%' }}>
                     <a href="https://griseldae903.github.io/servicios"><Card.Img variant="top" src={venice} style={{ height: '220px', width:'100%' }} /></a> 
                      <Card.Body>
                        <Card.Title>BLOG <br />Pueblitos, Arte y Cultura.</Card.Title>
                        <Card.Text>
                          Exploremos y hagamos <span style={{ color: 'rgb(119, 121, 58)' ,fontWeight: 'bold' }}>"passeggiata" </span>juntos. Visita el Blog.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-4" style={{ width: '24%', marginleft: '8%' }}>
                    <Card className='cardd'>
                      {/* <Card.Img variant="top" src={orange} /> */}
                      <a href="https://ambbuenosaires.esteri.it/es/news/dall_ambasciata/2023/11/orangetheworld-iniciativas-red-diplomatico-consular-italiana-en-argentina/" target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={orange} style= {{height: '210px'}}/>
              </a>
                      <Card.Body>
                        <Card.Title>Consciencia</Card.Title>
                        <Card.Text >
                        Campaña de sensibilización <span style={{ color: 'orange' ,fontWeight: 'bold' }}>“Orange The World” </span>
          </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                 
      </div>


{/* Nuevos elementos envueltos en un contenedor */}
<div class="card text-bg-dark mx-auto" id="ban">
{/* <img src={bandera}     class="img-fluid" alt="Foto de Torre de Pisa."/> */}
        <img src={bandera} class="card-img" alt="Foto de Torre de Pisa." />
            <div className="card-img-overlay" >
              <h3 className="card-title black-text">Frases y expresiones</h3>
              <p className="card-text black-text">Amor tutti fa uguali.</p>
              <p className="card-text black-text"><small>Last updated {currentTime.toLocaleTimeString()}</small></p>
            </div>
      </div>
    </div>
  );
}




export default DarkVariantExample;