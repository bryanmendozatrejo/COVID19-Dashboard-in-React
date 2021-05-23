import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 700px;
  width: 350px;
  background-color: white;
  border-radius: 30px;
  padding: 25px;
  margin-top: 100px;
`;

export const Header = styled.h4`
  font-size: 22px;
  opacity: .7;
`;

export const StateScroller = styled.div`
  height: max-content;
  padding: 50px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const State = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  padding: 0 10px;
  text-transform: capitalize;
  &:hover {
    background-color: lavender;
  }

`;

export const StateIcon = styled.img`
  object-fit: contain;
  height: 32px;
  width: 32px;
`;

export const StateName = styled.h5`
  opacity: .8;
  font-size: 18px;
  align-self: flex-start;
`;

export const Cases = styled.h5`
  font-size: 18px;
`;

export const SearchBox = styled.input`
  width: 95%;
  padding: 15px 10px;
  margin: 2px;
  box-sizing: border-box;
  align-self: center;
  border-style: none;
  border: 1px solid gray;
  border-radius: 10px;
`;