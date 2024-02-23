import React from 'react';
import { Link } from 'react-router-dom';
import './Header1.css'; // Importar el CSS de estilos
import logoImage from './Logo_Galibo.png';

// Componente de encabezado
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="https://griseldae903.github.io/cultuta-italiana" id='navegadorbox'>
          <img src={logoImage} alt="Nombre del sitio: Galibo" />
        </Link>
      </div>
      {/* Menú de navegación */}
      <nav className="menu">
        <ul>
          <li><Link to="/cultura-italiana">Inicio</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;