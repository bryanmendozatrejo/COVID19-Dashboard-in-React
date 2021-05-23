// import StateView from "./pages/StateView.jsx";
import React from 'react';
// import * as S from "./App-Style.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Header  from "./components/Header/Header.jsx";
import Globe from './pages/Globe/Globe.jsx';

import { fetchData } from './api';
import coronaImage from './images/image.png';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';

class App extends React.Component {
  state = {
      data: {},
      country: '',
  }

  async componentDidMount() {
      const FetchedData = await fetchData();
      this.setState({ data: FetchedData});
  }

  handleCountryChange = async (country) => {
      const FetchedData = await fetchData(country);
      this.setState({ data: FetchedData, country: country });
      // console.log(FetchedData);
      // console.log(country);
      // fetch the data
      // set the state
  }

  render() {
      const { data, country } = this.state; 
      return (
          <Router>
              <Header />
                  <Switch>
                      <Route path="/dashboard">
                          <div className={styles.container}>
                              <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                              <Cards data={data}/>
                              <CountryPicker handleCountryChange={this.handleCountryChange}/>
                              <Chart data={data} country={country}/>
                          </div>
                      </Route>
                      <Route path="/">
                          <Globe />
                      </Route>
                  </Switch>
          </Router>
      )
  }
}

export default App;
