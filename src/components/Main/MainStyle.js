import styled from "styled-components";
import bg from '../../img/fundo-escuro.png'

export const MainStyle = styled.div`
background-image: url(${bg});
background-repeat: no-repeat;
background-size: cover;
height:100vh;
display: flex;
justify-content: center;
align-items: center;

div{
	color: #fff;

}

h4 {
	text-align: center;
	font-size: 30px;
	font-weight: 100;
}

h1 {
	font-size: 50px;
	padding: 10px;
	display: flex;
	
}

h3 {
	text-align: center;
	font-weight: 100;
	font-size: 30px;
	padding: 20px;
}
`;

export const Title = styled.div`
display: flex;
`;

// export const Nome = styled(MainStyle.h1).h1`
// color: #111119;
// `;






