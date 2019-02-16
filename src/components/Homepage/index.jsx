import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Axios from 'axios';
import LaunchesListView from '../LaunchesListView';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      companyInfo: {},
      companyTwitter: '',
      companyWebsite: ''
    };
  }

  async componentDidMount() {
    const { data: companyInfo } = await Axios.get(
      'https://api.spacexdata.com/v3/info'
    );
    const companyTwitter = companyInfo.links.twitter;
    const companyWebsite = companyInfo.links.website;
    this.setState({ companyInfo, companyTwitter, companyWebsite });
  }

  render() {
    if (!this.state.companyWebsite) {
      return (
        <div className="react-loader">
          <ReactLoading type="spin" color="#222222" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <section className="hero is-fullheight spacex-bg">
            <div className="hero-body">
              <div className="container has-text-centered hero-content">
                <h1 className="title is-1 has-text-white">SpaceX Fan</h1>
                <p className="subtitle has-text-white">
                  {this.state.companyInfo.summary}
                </p>
                <span className="icon">
                  <a href={this.state.companyTwitter}>
                    <i
                      className="fa fa-twitter fa-lg fa-2x"
                      aria-hidden="true"
                    />
                  </a>
                </span>
                <span className="icon">
                  <a href={this.state.companyWebsite}>
                    <i
                      className="fa fa-space-shuttle fa-lg fa-2x"
                      aria-hidden="true"
                    />
                  </a>
                </span>
              </div>
            </div>
          </section>
          <LaunchesListView />
        </React.Fragment>
      );
    }
  }
}

export default Homepage;
