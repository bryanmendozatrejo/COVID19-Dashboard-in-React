import * as S from './BigBox-Style.js';
const BigBox = ({data}) => {
  return (
    <S.Container>
      <S.Icon src="trending-up.svg" alt="arrow trending upwards"/>
        <S.BigText>
          {data?.positiveIncrease.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}
        </S.BigText>
        <S.Description>
          Increase of Positive Cases
        </S.Description>
    </S.Container>
  )
}

export default BigBox
