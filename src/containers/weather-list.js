import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';
import MapComponent from './../components/google-map';

class WeatherList extends Component {

  renderCityWeather(data) {
    if(!data) {
      return(
        <div>
          Invalid Cityname
        </div>
      );
    }
    const temps = data.list.map((weather) => {
      return { "amt": weather.main.temp - 273.15 }
    });
    const pressures = data.list.map((weather) => {
      return { "amt": weather.main.pressure }
    });
    const humidity = data.list.map((weather) => {
      return { "amt": weather.main.humidity }
    });
    const {lon, lat} = data.city.coord;
    return (
      <tr key = { data.city.id }>
        <td> <MapComponent lat={lat} lon={lon} /> </td>
        <td> <Chart data={ temps } color="#ff0000" unit="°C" /> </td>
        <td> <Chart data={ pressures } color="#ffdb58" unit="hPa"/> </td>
        <td> <Chart data={ humidity } color="#00ff00" unit="%" /> </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature(K) </th>
            <th> Pressure(hPa) </th>
            <th> Humidity(%) </th>
          </tr>
        </thead>
        <tbody>
          { this.props.weatherData.map(this.renderCityWeather) }
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weatherData }) {
    return { weatherData };
}

export default connect (mapStateToProps)(WeatherList);
