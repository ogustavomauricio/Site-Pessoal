import React from "react";
import { Container, Github, ContainerInterno } from './ContactStyle.js'

import GitHub from '../../img/github.svg';
import Linkedin from '../../img/linkedin.svg';
import Gmail from '../../img/gmail.svg';

class Contact extends React.Component{
  render() {
    return (
      <Container>
					<div>
						<h2>Contato</h2>
					</div>
				<ContainerInterno>
					<Github>
						<a href="https://github.com/ogustavomauricio" target="_blank" rel='noreferrer' >
							<h2>GitHUb</h2>						
							<img src={GitHub} Alt="GitHub" />	
						</a>				
					</Github>
				<Github>
						<a href="https://www.linkedin.com/in/o-gustavo-mauricio/" target="_blank" rel='noreferrer' >
							<h2>Linkedin</h2>						
							<img src={Linkedin} Alt="GitHub" />	
						</a>				
					</Github>
					<Github>
						<a href="mailto:gmauricio207@gmail.com" target="_blank" rel='noreferrer' >
							<h2>gmauricio207@gmail.com</h2>						
							<img src={Gmail} Alt="GitHub" />	
						</a>				
					</Github>
				</ContainerInterno>	
      </Container>
    );
  }
}

export default Contact;