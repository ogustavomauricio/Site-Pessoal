import React from "react";
import {MainStyle, Title} from "./MainStyle.js";
import Typewriter from "typewriter-effect";

class Main extends React.Component {
  render() {
    return (
      <>
        <MainStyle>
          <div className="text-presentation">
            <h4>Bem Vindo ao meu Mundo!</h4>
            <Title>
            <h1>
              Me chamo
              </h1>
              <h1>
              <Typewriter
                options={{
                  strings: ["Gustavo Mauricio "] ,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            </Title>
            <h3>Desenvolvedor Web</h3>
          </div>
        </MainStyle>
      </>
    );
  }
}

export default Main;
