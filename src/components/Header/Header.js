import React from 'react';
import HeaderStyle from './HeaderStyle.js'

import logo from '../../img/logo.png'

class Header extends React.Component{
  render() {
    return (  
			<HeaderStyle>
				<div>
					<div>
				      <img src={logo} alt="logo" />
					</div>			  
				  <ul>
				 	  <li>
				  	  <a href="#sobreMim">Sobre Mim</a>
				   	</li>
				 	  <li>
				 		  <a href="#Projects">Projetos</a>
			    	</li>
			    	<li>
				  	  <a href="#tech">Tecnologias</a>
				 	  </li>
		  	  </ul>			  
			 	</div>
			</HeaderStyle>
	
    )
  }
}

export default Header;