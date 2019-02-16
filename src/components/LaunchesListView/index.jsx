import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import LaunchListView from '../LaunchListView';

class LaunchesListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launchesList: []
    };
  }

  async componentDidMount() {
    const { data: launchesList } = await Axios.get(
      'https://api.spacexdata.com/v3/launches/past'
    );
    this.setState({ launchesList });
  }

  render() {
    if (!this.state.launchesList) {
      return (
        <div className="react-loader">
          <ReactLoading type="spin" color="#222222" />
        </div>
      );
    }
    return (
      <section className="section">
        <div className="container has-text-centered">
          <h2 className="title is-1">Latest Launches</h2>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.launchesList.reverse().map(launch => {
                return (
                  <LaunchListView key={launch.flight_number} launch={launch} />
                );
              })}
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default LaunchesListView;
