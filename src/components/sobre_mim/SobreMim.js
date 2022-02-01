import React from "react";
import {
  ContainerExterno,
  Container,
  Title,
  Text,
  TextImg,
  ContainerText,
  Contact
} from "./SobreMimStyle";
import Gustavo from "../../img/aboutGustavo.png";

class SobreMim extends React.Component {
  render() {
    return (
      <ContainerExterno id="sobreMim">
        <Container>
          <Title>Sobre Mim</Title>
          <TextImg>
            <ContainerText>
            <Text>
              Desenvolvedor de Software com foco em tecnologias como: React,
              Typescript, NextJs, Javascript, HTML, CSS/SASS/SCSS e Bootstrap.
            </Text>
            <br></br>
            <Text>
              No backend, possuo conhecimento em banco de dados relacionais e
              não-relacionais, NodeJs e Express. Me aprofundando em testes
              unitários, RTL, Jest e Cypress. Conhecimento em metodologias ágeis
              como Scrum/Kanban.
            </Text>
            <br></br>
            <Text>
              Sou estudante de desenvolvimento web na Trybe, finalizando o
              módulo de BackEnd. A Trybe é uma escola com carga horária de
              aproximadamente 1500h focadas em desenvolvimento Fullstack
              (Hard-skills) e também em Soft-skills.
            </Text>
            <br></br>
            <Text>
              Quero colaborar com o crescimento da área através dos meus
              conhecimentos, proatividade e juntamente com isso, desenvolver as
              minhas competências.
            </Text>
            <Contact>
              <div>
                <p><strong>Data de Nascimento: </strong>21/03/1991</p>
                <p><strong>Email: </strong>gmauricio207@gmail.com</p>
              </div>
              <div>
              <p>
                <strong>GitHub: </strong>
                <a href="https://github.com/ogustavomauricio" target="_blank" rel='noreferrer' >
                github.com/ogustavomauricio
                </a>
              </p>
                <p><strong>Linkedin:  </strong>
                <a href="https://www.linkedin.com/in/o-gustavo-mauricio/" target="_blank" rel='noreferrer'>
                linkedin.com/in/o-gustavo-mauricio/
                </a>
              </p>
              </div>
            </Contact>
            </ContainerText>
            <div>
              <img src={Gustavo} alt="Gustavo" />
            </div>
          </TextImg>
        </Container>
      </ContainerExterno>
    );
  }
}

export default SobreMim;

{
  /* <Container>
<Title>Sobre MIM</Title>
<TextImg>     						
 <Text>
   Desenvolvedor de Software com foco em tecnologias como: React, Typescript, NextJs, Javascript, HTML, CSS/SASS/SCSS e Bootstrap.
 </Text>
 <Text>
   No backend, possuo conhecimento em banco de dados relacionais e não-relacionais, NodeJs e Express. Me aprofundando em testes unitários, RTL, Jest e Cypress. Conhecimento em metodologias ágeis como Scrum/Kanban.
 </Text>  
 <Text>
   Sou estudante de desenvolvimento web na Trybe, finalizando o módulo de BackEnd. A Trybe é uma escola com carga horária de aproximadamente 1500h focadas em desenvolvimento Fullstack (Hard-skills) e também em Soft-skills.
 </Text>  
 <Text>
   Quero colaborar com o crescimento da área através dos meus conhecimentos, proatividade e juntamente com isso, desenvolver as minhas competências.
 </Text>
<div>   
 <img src={Gustavo} alt="Gustavo" />
</div>	
</TextImg> */
}
