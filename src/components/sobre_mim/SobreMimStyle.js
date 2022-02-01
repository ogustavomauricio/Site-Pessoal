import styled from "styled-components";


export const ContainerExterno = styled.div`
    background-color: #111119;
	display: flex;
	flex-direction: column;
	justify-content: center;
/* border: 1px solid red; */
height: 100vh;

	


`;
export const Container = styled.div`
    /* border: 1px solid white; */
	display: flex;
	flex-direction: column;
    align-items: center;
	justify-content: space-around;
	width: 80%;
	margin: 0 auto;


img{
	}
`;

export const Title = styled.h2`
    color: #D90368;
	font-size: 40px;
	display: flex;
    text-transform: uppercase;
    letter-spacing: 4px;
    /* border: 1px solid red; //title */
	/* margin-top: 300px; */

	
	/* flex-direction: column; */
	justify-content: center;
	/* margin-top:100px ; */
`;

export const Text = styled.p`
    /* border: 1px solid blue; */
    text-align: start;
	line-height: 20px;
	margin-bottom: 10px;
	width: 50%;
	color: white;
	margin: 0 auto;
	
	

`;

export const TextImg = styled.div`
    /* border: 1px solid blue; //title */
	display: flex;
	flex-direction:row-reverse;
	align-items: center;

	

	img{
		filter:grayscale(0.9);
		min-width:420px;

	}

`
export const ContainerText = styled.div`
/* border: 1px solid yellow; */
display: flex;
flex-direction: column;
/* justify-content: flex-start; */
/* align-items: flex-start; */
width: 60%;
`

export const Contact = styled.div`
/* border: 1px solid purple; */
display: flex;
justify-content: space-around;
padding: 20px;
line-height: 30px;
width: 80%;
margin: 0 auto;

div{
	/* border: 1px solid white; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
}

a:visited{
	color: white;
}
`