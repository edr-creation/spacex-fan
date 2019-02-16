import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Axios from 'axios';

class LaunchSingleView extends Component {
  state = { flightInfo: [] };

  async componentDidMount() {
    const { data: flightInfo } = await Axios.get(
      `https://api.spacexdata.com/v3/launches/${this.props.match.params.id}`
    );
    this.setState({ flightInfo });
  }

  render() {
    if (!this.state.flightInfo) {
      return <ReactLoading type="spinningBubbles" color="#222222" />;
    } else {
      return (
        <div className="container">
          <h1 className="title">{this.state.flightInfo.mission_name}</h1>
        </div>
      );
    }
  }
}

export default LaunchSingleView;
