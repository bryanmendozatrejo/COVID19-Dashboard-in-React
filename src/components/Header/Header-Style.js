import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  width: 100vw;
  min-width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const activeClassName = 'active';

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  &.${activeClassName} {
    color: red;
    opacity: 1;
  }
  opacity: .3;
  color: black;
  font-size: 42px;
  opacity: .8;
  text-align: center;
  margin: 0 15px;
  cursor: pointer;
  text-decoration: none;
`