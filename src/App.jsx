import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambié 'Switch' por 'Routes'
import Header from '../src/components/Header';
import CardComponent from '../src/components/CardComponent';
import Acerca from '../src/pages/Acerca';
import Servicios from '../src/pages/Servicios';
import Contacto from '../src/pages/Contacto';
import Footer from '../src/components/Footer';

function App() {
  useEffect(() => {
    // Ajustar el límite de escuchadores de eventos después de que la aplicación se haya cargado
    if (window && window.events) {
      window.events.EventEmitter.defaultMaxListeners = 15; // Puedes ajustar el número según sea necesario
    }
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/cultura-italiana" element={<CardComponent />} />
          <Route path="/acerca" element={<Acerca />} /> 
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Otras rutas y componente de inicio */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
