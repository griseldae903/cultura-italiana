// Acerca.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import MisionVision from './MisionVision';
import oficina from './GRI PORTADA.jpg';
import luz from './Luz.jpg';

const Acerca = () => {
  return (
    
    <div>
    <MisionVision />
    <div  className="card mb-3" style={{ maxWidth: '75%', margin: 'auto', marginTop: "20px" }}>


 



           <div  className="row g-0"  >
                 <div className="col-md-4" >
                   <img src={oficina} className="img-fluid rounded-start" alt="foto de autor Gri" />
                 </div>

                 <div className="col-md-8">
                       <div className="card-body">
                               <h5 className="card-title" style={{color:'brown',fontSize: '18px' }}>Griselda </h5>
                               <p className="card-text" style={{fontSize: '15px' }}>
                               Soy administradora de transporte marítimo, afín a la tecnología y la diversidad cultural. De raíces calabresas y abruzas, mi vida se teje entre el mar y las tradiciones italianas. Me gusta compartir noticias, de arte ...y de puertos. <i class="fa-regular fa-face-grin-tears"></i>
                               <br /><br />
                             Mi viaje es un constante descubrimiento intercultural y aprendizaje tecnológico. 
                               </p>
                      </div>
                 </div>


           </div>







           <div className="row g-0"  style={{marginTop: '20px'}}>
                 <div className="col-md-4" >
                   <img src={luz} className="img-fluid rounded-start" alt="Buenos Aires" />
                 </div>

                 <div className="col-md-8">
                       <div className="card-body">
                         {/* <h5 className="card-title" style={{color:'brown',fontSize: '18px' }}>Griselda Espósito</h5> */}
                         <p className="card-text" style={{fontSize: '15px' }}>
                         Desde Buenos Aires, mi "clan" tiene sus raíces en la herencia italiana: desde Nápoles a Calabria, entre 1901 y mediados de los '50 a bordo de <i class="fa-solid fa-ship"></i> "El Conte Grande".

 <br /><br />Mis antepasados, en una época sin lujos ni comodidades, encontraron su camino <i class="fa-solid fa-road"></i> en Buenos Aires como comerciantes y microemprendedores. <br />En una "era" sin radios <i class="fa-solid fa-radio"></i>  ni tanta comunicación, la vida transcurría con el eco de sus esfuerzos.

 <br /><br />Tanto mi vida como la tuya están plagadas de anécdotas que sería lindo poder compartir. <i class="fa-regular fa-face-laugh-wink"></i>
 <br /><br />Hoy, cada paso está impregnado con la memoria de ellos, que con su labor incansable y su determinación, trazaron el camino que ahora recorro. <i class="fa-solid fa-people-group"></i><br /><br />Su legado vive en mi compromiso. Las raíces de esa fuerza nacen en la historia que nos precede.<i class="fa-regular fa-heart"></i>
 <br/>
 <br/>

                         </p>
                       </div>
                 </div>
           </div>


        
           </div>

</div>
  );
};

export default Acerca;