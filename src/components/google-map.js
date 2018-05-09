import React, {Component} from 'react';
import {withGoogleMap, GoogleMap} from 'react-google-maps';

class MapComponent extends Component {

  render() {
    const {lat, lon} = this.props;
    const MapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat, lng:lon } }
        defaultZoom = { 10 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <MapExample
          containerElement={ <div style={{ height: `150px`, width: `150px` }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
  }
}

export default MapComponent;
