import React from 'react';
import {Container, Title, ContainerList, Traco, TitleTech} from './TechStyle.js';

class Tecnologias extends React.Component{
  render() {
    return (
      <Container id="tech">
		  <div>
			<Title>Tecnologias</Title>  
		  </div>
			<ContainerList>
        <div>
          <div>
            <TitleTech>FrontEnd</TitleTech>
          </div>
					<div>
						<ul>
							<li>React.js</li>
							<li>JavaScrip</li>
							<li>Redux</li>
							<li>Context API</li>
							<li>BootStrap</li>
							<li>Style Component</li>
							<li>Next.js</li>
						</ul>
					</div>
        </div>
					<Traco></Traco>
        <div>
					<div>
            <TitleTech>BackEnd</TitleTech>
					</div>
					<div>
						<ul>
							<li>Node.js</li>
							<li>Express.js</li>
							<li>MySql</li>
							<li>MongoDb</li>
							<li>Docker</li>
						</ul>
					</div>
				</div>			
				</ContainerList>
      </Container>
        )
    }
}

export default Tecnologias;
