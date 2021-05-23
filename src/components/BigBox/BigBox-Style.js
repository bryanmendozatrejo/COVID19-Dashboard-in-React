import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  background-color: #5635D1;
  color: white;
  border-radius: 30px;
  padding: 20px;
  /*align-self: stretch;*/
  height: 420px;
  @media (max-width: 1365px) {
    margin: 10px 0px;
  }
`;

export const Title = styled.h5`
  opacity: .8;
`;


export const BigText = styled.h1`
  align-self: center;
  font-size: 72px;
  margin: 0;
  padding: 0;
`;

export const State = styled.img`
  height: 250px;
  width: 350px;
  border-radius: 100%;
`;

export const Icon = styled.img`
  align-self: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.h3`
  align-self: center;
`;