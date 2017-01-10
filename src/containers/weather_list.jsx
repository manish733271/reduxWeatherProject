import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart  from '../components/chart';
import GoogleMap from '../components/google_map';


export class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    // const { lat ,lon } = cityData.city.coord;
    // const lon = cityData.city.coord.lon;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return(
      <tr key = {name}>
        <td>{name}</td>
        <td>
          <Chart data = {temps} color = "red" units = "K" />
        </td>
        <td>
          <Chart data = {pressures} color = "blue" units ="hPa" />
        </td>
        <td>
          <Chart data = {humidity} color = "green" units = "%" />
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weather.map(this.renderWeather)
          }
        </tbody>
      </table>
    );
  }

}

//Refactoring into ES6 module
function mapStateToProps({ weather }) {
  return {weather}; //this comes from reducer as we mapped WeatherReducer to weather in index.jsx reducer
  //{ weather } === { weather:weather }
}

// function mapStateToProps(state) {
//   return {weather: state.weather}; //this comes from reducer as we mapped WeatherReducer to weather in index.jsx reducer
// }

export default connect(mapStateToProps)(WeatherList);
