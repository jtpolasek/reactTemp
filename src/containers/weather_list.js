import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, Sparklinesline } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {

    const name = cityData.city.name;
    const temps = cityData.list.map(weather => {
      return (9/5 * (weather.main.temp - 273) + 32);
    });
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } =cityData.city.coord;



    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color="red" units="F" />
        </td>
        <td>
          <Chart data={pressure} color="green" units="hPA" />
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%" />
        </td>
      </tr>
    );
  }


    render() {
      return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (F)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
          {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      )
    }
}

function mapStateToProps({ weather}){
  return { weather }
}



export default connect(mapStateToProps)(WeatherList);
