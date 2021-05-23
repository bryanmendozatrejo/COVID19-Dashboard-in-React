import * as S from './MetaBox-Style.js';

const MetaBox = ({stateData}) => {
  console.log(stateData);
  return (
    <S.MicroContainer>
      <S.MicroBox bgcolor={"#01B3FF"} txtcolor={'white'}>
        <S.MicroIcon src="world-icon.svg" alt="world icon"/>
        <S.MicroTitle>
          Total Cases
        </S.MicroTitle>
        <S.MicroData>
          {stateData? stateData.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 }) : ''}
        </S.MicroData>
      </S.MicroBox>
      <S.MicroBox bgcolor={"#FF79AE"} txtcolor={'white'}>
        <S.MicroIcon src="user-dead.svg" alt="world icon"/>
        <S.MicroTitle>
          Deaths
        </S.MicroTitle>
        <S.MicroData>
          {stateData? stateData.death.toLocaleString(navigator.language, { minimumFractionDigits: 0 }): ""}
        </S.MicroData>
      </S.MicroBox>
      <S.MicroBox bgcolor={"#FFFFFF"} txtcolor={'black'}>
        <S.MicroIcon src="virus-icon.svg" alt="world icon"/>
        <S.MicroTitle>
          Active Cases
        </S.MicroTitle>
        <S.MicroData>
          {stateData? stateData.positive.toLocaleString(navigator.language, { minimumFractionDigits: 0 }): ""}
        </S.MicroData>
      </S.MicroBox>
      <S.MicroBox bgcolor={"#FFFFFF"} txtcolor={'black'}>
        <S.MicroIcon src="recovered-icon.svg" alt="world icon"/>
        <S.MicroTitle>
          Recovered Cases
        </S.MicroTitle>
        <S.MicroData>
          {stateData? stateData.recovered === null ? "No Data Available" : stateData.recovered.toLocaleString(navigator.language, { minimumFractionDigits: 0 }) : "" }
        </S.MicroData>
      </S.MicroBox>
    </S.MicroContainer>
  )
}

export default MetaBox
