import React from "react";
import {Container} from "./FooterStyle.js";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <p>&copy; </p>
          <p>Desenvolvido por: Gustavo Mauricio</p>
        </div>
      </Container>
    );
  }
}

export default Footer;