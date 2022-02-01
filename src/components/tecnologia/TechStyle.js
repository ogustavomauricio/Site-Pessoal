import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  
`;

export const Title = styled.h2`
 color:#D90368;
 margin-top:50px;
 font-size:40px;
 text-transform: uppercase;
 letter-spacing: 4px;  
`;

export const ContainerList = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
width: 50%;
margin: 0 auto;
/* border: 1px solid red; */


/* div{
    border: 1px solid red;
    margin: 0 auto;
} */
`

export const Traco = styled.div`
content: '';
width: 2px;
height: 250px;
background-color: black;
margin:50px 0; 
`

export const TitleTech = styled(Title)`
color: #04A777;
font-size:40px;
text-transform: uppercase;
letter-spacing: 4px;
`