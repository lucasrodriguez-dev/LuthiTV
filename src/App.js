import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listado, setListado] = useState([]);

  return (
    <div className="layout">

      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Luthi<span className="accented">TV</span></h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Películas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        {/* Listado de Películas */}
        <Listado listado={listado} setListado={setListado}/>
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador listado={listado} setListado={setListado}/>
        <Crear setListado={setListado}/>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Lucas Rodríguez - <a href="https://www.linkedin.com/in/lucas-rodr%C3%ADguez-de-pena/"
          target="_blank">Contacto</a>
      </footer>
    </div>
  );
}

export default App;
