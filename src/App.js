import React from "react";
import ProjectIcon from "./image/Project-Icon-V1.png";
import NavBar from "./components/NavBar";
import "bulma/css/bulma.css";
import "./css/Style.css";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  const titulos = ["Home", "Promociones", "Cotización Dólar"];

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <div className="is-flex">
              <span className="icon is-medium">
                <img src={ProjectIcon} alt="Project Icon" />
              </span>
              <p className="navbar-title">New World</p>
            </div>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {titulos.map((titulo, index) => (
              <a key={index} className="navbar-item" href="#">
                <div className="is-flex">
                  <span className="icon is-medium">
                    <img src={ProjectIcon} alt="Project Icon" />
                  </span>
                  <p>{titulo}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary custom-button">
                  <strong>Registrarse</strong>
                </a>
                <a className="button is-light">iniciar Sesión</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div>
          <ItemListContainer />
        </div>
      </main>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Proyecto New World</strong> by{" "}
            <a href="https://jgthms.com">Fabricio Giribone - © 2023 Copyright </a>. The
            source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT </a>. The
            website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
