import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import stilo1 from './pic/STILO5.jpg';
import sr from './pic/sanremologo.jpg';
import trekk1 from '../components/trekki_1.jpg';
import trekk2 from '../components/trekk_2.jpg';
import trekk3 from '../components/trekki_3.jpg';
import trekk4 from '../components/trekk_4.jpg';
import trekk7 from '../components/trekk_7.jpg';
import trekk8 from '../components/trekk_8.jpg';
import trekk9 from '../components/trekk_9.jpg';
import stilo7 from './pic/STILO-1.jpg';
import stilo3 from './pic/STILO 3.jpg';
import stilo77 from './pic/STILO-7.jpg';
import ange from './pic/AngelinaMango.png'

const ImageLink = ({ url, alt }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={alt} className="img-fluid" style={{ maxHeight: '400px' }} />
  </a>
);

const pueblitosInfo = [
  {
    fecha: '05, Febrero 2024',
    nombre: 'Stilo, Reggio Calabria',
    por: 'Por: G.E.',
    descripcionCorta: 'Conocés esta joya del sur?',
    descripcionDetallada: 'Stilo es un encantador pueblo situado en la provincia de Reggio Calabria, en el sur de Italia. Conocido como un "gioiello" italiano, que significa "joya italiana", Stilo es famoso por su impresionante arquitectura medieval y su rica historia. Entre sus monumentos más destacados se encuentra la Cattolica di Stilo, una iglesia bizantina del siglo IX que es un ejemplo notable de la arquitectura de la época. Además, Stilo ofrece impresionantes vistas de las montañas y el mar, lo que lo convierte en un destino turístico popular para aquellos que buscan sumergirse en la historia y la belleza natural de Italia.',
    imagenes: [stilo7, stilo3, stilo77],
    // Otras propiedades relevantes
    remate: 'Vamos a conocerlo...?',
    fuente: 'Imágen: Colección de autor'
    
  },
  {
    fecha: '06, Febrero 2024',
    nombre: 'San Remo 2024',
    por: 'Por: G.E.',
    descripcionCorta: 'El evento popular número 74!',
    descripcionDetallada: 'ANGELINA MANGO, NUEVA ESTRELLA EN ESCENA. LA CUMBIA DEL ABURRIMIENTO TOTAL.',
    texto: 'En el vibrante escenario del Festival de San Remo, la joven cantante nacida en Potenza ha logrado cautivar a la audiencia con su poderosa voz. Angelina Mango, ha alzado el premio del Festival número 74 con su canción pop “La Noia” estrenada el pasado 6 de Febrero, en la primera “serata” de este evento italiano.',
    imagen:[ange],
    nota: (
      <span>
        Con más de veinte millones y medio de reproducciones (al 22 de Febrero) en Spotify, Angelina Mango ahora se embarca en un emocionante nuevo capítulo en su carrera musical. Como ganadora del prestigioso festival (luego de haber competido con artistas nuevos, como el cantante napolitano Emanuele Palumbo  <i>"Geolier"</i>) ésta cantante italiana está destinada a dejar huella indeleble por su calidad artística, que caracteriza a la música italiana contemporánea.
      </span>),// Otras propiedades relevantes
    remate1:'La canción',
    remate2: 'Cumbia de “La Noia”, muestra cierta sensación de aburrimiento y falta de emoción en la vida cotidiana. La repetición de la palabra “noia” y la descripción de actividades tediosas sugieren algo de desencanto y falta de estímulo para el narrador. Además de celebrar la música y premiar el talento artístico, San Remo nos deja pensando sobre experiencias comunes que resuenan con el público.',
    fuente: 'Imágen: Youtube, La noia (2024)'
    
  },
   {
      fecha: '16, Febrero 2024',
      nombre: 'Trekking en Stilo: Aventura pura',
      por: 'Por: G.E.',
      descripcionCorta: 'Vallata Bizantina dello Stilaro: Un tesoro cultural...y natural! ',
      descripcionDetallada: 'En el corazón de Stilo y Bivongi, una asociación de guías ambientales excursionistas está desbloqueando los tesoros ocultos de este hermoso lugar. Con una impresionante belleza natural propia de la región, esta asociación se ha comprometido a ofrecer experiencias inolvidables y sostenibles a los visitantes.',
      nota: (<span> Ellos cuentan <i>"decidimos crear esta realidad porque el potencial cultural y naturalista es notable: nos encontramos en el Valle Bizantino del Stilaro, llamado así por la presencia de monumentos extraordinarios como la Cattolica di Stilo, el ermita de Santa Maria della Stella en Pazzano, el Monasterio de San Giovanni Theristis en Bivongi".</i> </span>),
      //desarrollo: 'El Valle Bizantino del Stilaro, nombrado por sus monumentos extraordinarios como la Cattolica di Stilo y el ermita de Santa Maria della Stella en Pazzano, es un testimonio vivo de la rica herencia cultural de la zona. Pero el encanto de la región no se limita a su patrimonio arquitectónico; también se extiende a su entorno natural. Rodeado por el Parque Natural Regional delle Serre, este valle es el escenario perfecto para excursiones y tours experienciales que destacan la belleza de la naturaleza y promueven la sostenibilidad.',
      
      remate: 'Desde hace algunos años también ofrecen en verano talleres experienciales sobre el procesamiento del retamo (Ginestra Day), wine trekking y la experiencia de la vendimia en colaboración con las bodegas locales. Sus actividades también incluyen la organización y colaboración en eventos culturales, así como la educación ambiental en la escuela y dirigida a grupos de niños/jóvenes.',
      imagenes: [trekk2,trekk4,trekk3], // Se ha corregido el nombre aquí
      fuente: 'Imágenes: Instagram (@trekking.stilaro.experience)',
      imagenes1: [trekk9,trekk8,trekk7]
    }

  
];

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPueblito, setSelectedPueblito] = useState(null);

  const handleShowModal = (pueblito) => {
    setSelectedPueblito(pueblito);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

   const stiloImages = [stilo1, sr, trekk1];//poner 3er foto (trekk1) para que aparezca 3era card

  return (
    <div className="container mt-4" style={{ marginBottom: '100px' }}>
      <div className="row" >
        {stiloImages.map((image, index) => (
          <div key={index} className="col-md-4 mb-4" >
            <Card style={{ marginTop: '120px' }}>
              <Card.Img variant="top" src={image} onClick={() => handleShowModal(pueblitosInfo[index])}/>
              <Card.Body>
              <Card.Title style={{fontSize:"15px"}}>{pueblitosInfo[index].fecha}</Card.Title>
                <Card.Title>{pueblitosInfo[index].nombre}</Card.Title>
                <Card.Text>
                  {pueblitosInfo[index].descripcionCorta}
                </Card.Text>
                <button type="button" className="btn btn-outline-dark" onClick={() => handleShowModal(pueblitosInfo[index])}>
                  Ver más
                </button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal para la explicación detallada */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedPueblito ? selectedPueblito.nombre : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          {selectedPueblito && (
            <>
            <p style={{fontSize:'13px'}}>{selectedPueblito.por}</p>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <p>{selectedPueblito.descripcionDetallada}</p>
                  {/* <p>{selectedPueblito.texto}</p> */}
                  <p>{selectedPueblito.texto}</p>
                  {selectedPueblito.imagen && ( // Verifica Imagen Annalisa si existe la imagen antes de mostrarla
                    <img
                      src={selectedPueblito.imagen}
                      alt="Imagen del modal"
                      className="img-fluid"
                      style={{ width: '350px'}} // manipular el tamaño imagen Annalisa 
                      />
                      
                  )}
                  <p>{selectedPueblito.nota}</p>
                <p style={{ textDecoration: 'underline', fontWeight: 'bold' }}><br />{selectedPueblito.remate1}</p> 
                <p>{selectedPueblito.remate2}</p> 
                          
                </div>
              </div>
              <div className="row"> {/* Aquí se aplica la alineación horizontal centrada a imagenes del primer Modal (Stilo)*/}
                {selectedPueblito.imagenes && selectedPueblito.imagenes.map((imagen, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    {index === selectedPueblito.imagenes.length - 1 ? ( // Verifica si es la última imagen
                      
                        <img
                          src={imagen}
                          alt={`Imagen ${index + 1}`}
                          className="img-fluid"
                          style={{ maxHeight: '300x' }}
                        />
                      
                    ) : (
                      <img
                        src={imagen}
                        alt={`Imagen ${index + 1}`}
                        className="img-fluid"
                        style={{ maxHeight: '400px' }}
                      />
                    )}
                  </div>

))}
                <p>{selectedPueblito.remate}</p>
                {/* <p>{selectedPueblito.fuente}</p> */}
                
              </div>

              
              
            </>



          )}

{selectedPueblito && (
    <>
      {/* Contenido ultimas 3 imagenes en Modal de Trekking */}
      <div className="row d-flex justify-content-between">
        {/* Mapeo de selectedPueblito.imagenes */}
        {selectedPueblito.imagenes1 && selectedPueblito.imagenes1.map((imagen, index) => (
          <div key={index} className="col-md-4 mb-4">
            <img
              src={imagen}
              alt={`Imagen ${index + 1}`}
              className="img-fluid"
              style={{ maxHeight: '250px' }} // Ajusta el tamaño según sea necesario
            />
          </div>
        ))}
                <h6 style={{fontSize:'10px'}}>{selectedPueblito.fuente}</h6> 
        
      
      </div>

      
{/*       
      Otro contenido del modal */}
    </>
  )}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Blog; 