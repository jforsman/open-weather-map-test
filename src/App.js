  import React, { Component } from 'react';
import './App.css';
import { getHeidenHeimInfo } from './api/weatherInfo';
import SimpleDayInfo from './components/simpleDayInfo';
import { getDateFromEpochTs } from './dateUtils'

export default class App extends Component{
  state = {
    data: null,
    loading: true,
    error: null,
  }

  async componentDidMount () {
    try {
      const response = await getHeidenHeimInfo();
      const jsonData = await response.json()
      this.setState({
        data: jsonData,
        loading: false,
        error: null,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
        data: null,
      })
    }
  }

  render () {
    const { loading, data, error } = this.state
    if (loading) {
      return (
        <p>weatherInfo loading</p>
      )
    }

    if (error) {
      return (
      <div>Error fetching data {this.state.error.toString()}</div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
            Weather Info for {data.daily.length} days for Heidenheim
            <p>
            {data.daily.map((o, i) => (
              <SimpleDayInfo 
                date={getDateFromEpochTs(o.dt)}
                tempDay={o.temp.day}
                tempNight={o.temp.night}
                feelsDay={o.feels_like.day}
                feelsNight={o.feels_like.night}
                clouds={o.clouds}
                windSpeed={o.wind_speed}
              />
            ))}
            </p>
        </header>
      </div>
    )
  }
}