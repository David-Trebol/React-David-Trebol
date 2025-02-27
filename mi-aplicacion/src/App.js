import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Mi Sitio</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <h1>Bienvenido a Mi Sitio</h1>
      </header>
    </div>
  );
}

export default App;
