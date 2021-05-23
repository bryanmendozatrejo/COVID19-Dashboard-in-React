import * as S from "./StateView-Style.js";
import MetaBox from "../components/MetaBoxes/MetaBox.jsx";
import BigBox from "../components/BigBox/BigBox.jsx";
import StateBox from "../components/StateBox/StateBox.jsx";
import LineGraph from "../components/LineGraph/LineGraph.jsx";
import { useEffect, useState } from "react";

const StateView = () => {

  const [stateData, setStateData] = useState(null);
  const [stateHistory, setStateHistory] = useState(null);
  const [allStateData, setAllStateData] = useState(null);
  const [currState, setCurrState] = useState("California");

  const getStateData = async (state /*string state*/) => {
    const response = await fetch("https://api.covidtracking.com/v1/states/"+state+"/current.json");
    const res = await response.json();
    const hist = await fetch("https://api.covidtracking.com/v1/states/"+state+"/daily.json");
    var re = await hist.json();
    const data = re.reverse().splice(re.length - 30);
    setStateHistory(data);
    setStateData(res);
  }

  const getAllStateData = async() => {
    const response = await fetch("https://api.covidtracking.com/v1/states/current.json");
    const res = await response.json();
    setAllStateData(res);
  }

  const setHeader = (stateName) => {
    setCurrState(stateName);
  }

  useEffect( () => {
    getStateData("ca");
    getAllStateData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Temp>
      <S.MetaContainer>
        <S.StateName>State: {currState}</S.StateName>
        <S.MetaRows>
          <MetaBox stateData={stateData}/>
          <BigBox data={stateData}/>
        </S.MetaRows>
        {stateHistory != null && 
        <S.Spacer>
          <h1>Last 30 Days Positive Cases</h1>
          {<LineGraph data={stateHistory}/>}
        </S.Spacer>
      }
      </S.MetaContainer>
      <StateBox data={allStateData} updateStateData={getStateData} updateHeader={setHeader}/>
    </S.Temp>
  );
};

export default StateView;
