import styled from 'styled-components';

export const MicroContainer = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 550px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MicroBox = styled.div`
  height: 200px;
  width: 200px;
  padding: 10px;
  background-color: ${props => props.bgcolor};
  border-radius: 25px;
  color: ${props => props.txtcolor};
  margin: 0 25px 25px 25px;
`;

export const MicroTitle = styled.h5`
  margin-top: 30px;
  opacity: 0.8;
`;

export const MicroData = styled.h2`

`;

export const MicroIcon = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-top: 10%;
`;