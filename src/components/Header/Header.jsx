import * as S from './Header-Style.js';

const Header = () => {
  return (
    <S.Container>
      <S.StyledNavLink to="" exact={true} activeClassName={S.activeClassName}> Globe </S.StyledNavLink>
      <S.StyledNavLink to="/dashboard" activeClassName={S.activeClassName}> Dashboard </S.StyledNavLink>
    </S.Container>
  )
}

export default Header;
