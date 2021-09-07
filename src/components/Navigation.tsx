import React, { Component } from "react";
import { Playsong } from "./Playsong";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
             C + S
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
             <Playsong />
              <li>
                <a href="#about" className="page-scroll">
                  Sobre Nosso Casamento
                </a>
              </li>
              <li>
                <a href="#features" className="page-scroll">
             Lista de Presente
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Localização
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
