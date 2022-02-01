import styled from "styled-components";

export const Container = styled.div`
background-color: purple;
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
flex-direction: column;
height: 40vh;
`;

export const ContainerInterno = styled.div`
  /* border: 1px solid yellow; */
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* flex-direction: column; */

`;
export const Github = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

a {
  display: flex; 
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center; 
  /* width:30%;  */
  /* border: 1px solid yellow; */
}

a>img{
    width:100%;
    height: 100%;
    margin-right: 20px;
    margin-bottom: 20px;
}
/* 
a>h2{
    margin-right: 150px;
} */
`
