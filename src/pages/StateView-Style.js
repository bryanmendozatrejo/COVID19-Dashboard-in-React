import styled from 'styled-components';

export const MetaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px 30px;
  @media (max-width: 1365px) {
    margin: 50px 50px;
  }
`;

export const MetaRows = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1365px) {
    flex-direction: column-reverse; 
  }
`;

export const StateName = styled.h1`
  opacity: .6;
  margin: 5px;
  text-transform: capitalize;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction:row;
`;

export const Spacer = styled.div`
  width: 100%;
  height: 300px;
`;