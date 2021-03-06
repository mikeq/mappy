import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { withGeoPosition } from 'react-fns';
import './App.css';


class Tile extends Component {
  state = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  };

  render() {
    return <TileLayer {...this.state}/>
  }
}

class App extends Component {
  state = {
    location: [55.953251, -3.188267]
  };

  componentWillReceiveProps(nextProps) {
    const { isLoading, coords = [] } = nextProps;
    if (!isLoading && coords.length !== 0) {
      this.setState({ location: [coords.latitude, coords.longitude]});
    }
  };

  render() {
    return (
      <Map center={this.state.location} zoom={13} style={{ height: 350 }}>
        <Tile/>
        <Marker position={this.state.location}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customisable</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default withGeoPosition(App);
