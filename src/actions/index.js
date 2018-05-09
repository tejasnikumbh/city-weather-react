import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

const API_KEY = `bc6e18d92887f47ac8ac9025e7adcadb`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {

  var url = `${ROOT_URL}&q=${city},in`;
  var request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
