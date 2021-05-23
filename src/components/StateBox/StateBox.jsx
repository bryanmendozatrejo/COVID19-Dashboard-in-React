import * as S from './StateBox-Style.js';
import states from '../../_data/states.json'
import { useState } from 'react';

const StateBox = ({data, updateStateData, updateHeader}) => {

  const [searchText, setSearchText] = useState("");
  const [stateJSON, setStateJSON] = useState(states);

  const stateClicked = (id, name) => {
    updateStateData(id);
    updateHeader(name)
  }

  const search = (e) => {
    setSearchText(e.target.value);
    if(e.target.value === "") {
      setStateJSON(states);
    } else {
      let searchString = e.target.value;
      searchString.toLowerCase();
      let newStateData = states.filter(str => str.id.includes(searchString));
      setStateJSON(newStateData);
    }
  }

  return (
    <S.Container>
      <S.Header> State Report </S.Header>
      <S.SearchBox type="text" placeholder="Search..." value={searchText} onChange={search}/>
      <S.StateScroller>
        { data != null &&
          stateJSON.map((val, idx) => {
            let stateInfo = data.find(o => o.state.toLowerCase() === val.short)
            return (
              <S.State key={idx} onClick={() => {
                stateClicked(val.short, val.id);
              }}>
                <S.StateIcon src={val.image} alt="flag" />
                <S.StateName>{val.id}</S.StateName>
                <S.Cases>{stateInfo?.total.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</S.Cases>
              </S.State>
            )
          })
        }
      </S.StateScroller>
    </S.Container>
  )
}

export default StateBox
