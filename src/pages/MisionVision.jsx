import React, { useEffect } from 'react';



const MisionVision = () => {


 
  // useEffect(() => {
  //   // Inicializa AOS
  //   AOS.init();
  // }, []);

    
  return (
    // Contenedor principal con display:flex para centrar verticalmente
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>

      {/* Tarjeta 1 */}
       
      <div data-aos="fade-right" className="col-md-9 mb-3" style={{ marginBottom: '40px' }} >
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" style={{textAlign: 'center'}}>Misión</h5>
            <p className="card-text">Informar las últimas noticias, de arte de origen italiano y ser un puente vibrante entre Italia y Argentina, proporcionando una plataforma que destaque la riqueza cultural de ambas naciones. 
            <br/>Fomentar comprensión y aprecio mutuo, creando un espacio digital donde las dos culturas (aunque no limitante) se encuentren, se inspiren y colaboren. 
            <br/>Buscamos abrir diálogos significativos que trasciendan fronteras, promoviendo la diversidad y resaltando las conexiones que enriquecen vidas.</p>
          </div>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div data-aos="fade-left" className="col-md-9">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"style={{textAlign: 'center'}}>Visión</h5>
            <p className="card-text">Impactar de manera positiva a la comunidad local y extranjera, fortaleciendo la identidad de los pueblos con poca población más antiguos de Italia. 
            <br/>Visualizamos un futuro en el que podamos colaborar con estos lugares llenos de historia y tradición, para su conservación y sostenibilidad natural. 
            <br/>A través de nuestro blog, aspiramos a ser catalizadores de proyectos que impulsen el turismo sostenible, contribuyendo y difundiendo la identidad cultural de comunidades olvidadas. 
            <br/>Nos esforzamos por ser agentes de cambio, inspirando no solo a la audiencia (a través del blog de noticias) sino también a aquellos que deseen descubrir y participar activamente en la preservación y revitalización de estas joyas culturales.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MisionVision;