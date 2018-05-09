import { combineReducers } from 'redux';
import WeatherDataReducer from './reducer-weather-data';

const rootReducer = combineReducers({
  //default reducer that simply returns previous state
  weatherData: WeatherDataReducer
});

export default rootReducer;
