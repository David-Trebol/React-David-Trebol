import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>TechStore</h1>
        </div>
        <ul className="nav-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/computadoras">Computadoras</a></li>
          <li><a href="/celulares">Celulares</a></li>
          <li><a href="/accesorios">Accesorios</a></li>
          <li><CartWidget /></li>
        </ul>
      </nav>
      <ItemListContainer greeting="¡Bienvenidos a TechStore! Encuentra los mejores productos de tecnología." />
    </div>
  );
}

export default App;
