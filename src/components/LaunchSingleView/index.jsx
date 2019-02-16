import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import './style.css';

class LaunchSingleView extends Component {
  state = { flightInfo: [] };

  async componentDidMount() {
    const { data: flightInfo } = await Axios.get(
      `https://api.spacexdata.com/v3/launches/${this.props.match.params.id}`
    );
    this.setState({ flightInfo });
  }

  render() {
    if (!this.state.flightInfo.mission_name) {
      return (
        <div className="react-loader">
          <ReactLoading type="spin" color="#222222" />
        </div>
      );
    } else {
      return (
        <div className="mission">
          <div className="container">
            <h1 className="title is-1 mission-name">
              {this.state.flightInfo.mission_name}
            </h1>
            <p className="subtitle mission-details">
              {this.state.flightInfo.details}
            </p>
            {this.state.flightInfo.launch_success ? (
              <p className="mission-launch mission-launch__success">
                Launch Success
              </p>
            ) : (
              <p className="mission-launch">Not Success</p>
            )}
            <p className="mission-site title is-2">Launch site</p>
            <p className="mission-site-name">
              {this.state.flightInfo.launch_site.site_name_long}
            </p>
          </div>
        </div>
      );
    }
  }
}

export default LaunchSingleView;
