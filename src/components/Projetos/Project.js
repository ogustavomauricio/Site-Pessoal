import React from "react";
// import { Container, Card, ContainerInterno} from "./ProjectStyle";
import TRYBEWALLET from "../../img/trybewallet.gif";
import "./ProjectStyle.css";

class Project extends React.Component {
  render() {
    return (
      <div className="project component__space" id="Projects">
        <div className="heading">
          <h2>Projetos</h2>

          {/* <p>
            Aqui estão alguns projetos que realizei ou que tive o prazer de
            participar
          </p>

          <p>
            Aqui estão alguns projetos que realizei ou que tive o prazer de
            participar
          </p> */}
        </div>
        <div className="container-interno">

        <div class="card">
          <div class="card-wrapper">
            <h2>Trybe Wallet</h2>
            <p>carteira de controle de gastos com conversor de moedas</p>
          </div>
        </div>

        {/* <div class="card">
          <div class="card-wrapper">
            <h2>GitHUb</h2>
            <p>Veja meus projetos</p>
          </div>
        </div> */}
{/* 
        <div class="card">
          <div class="card-wrapper">
            <h2>GitHUb</h2>
            <p>Veja meus projetos</p>
          </div>
        </div> */}

        {/* <div class="card">
          <div class="card-wrapper">
            <h2>GitHUb</h2>
            <p>Veja meus projetos</p>
          </div>
        </div> */}

        </div>
      </div>
    );
  }
}

export default Project;
