import React from 'react';
import './style.css';

function LaunchListView({ launch }) {
  return (
    <div className="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-one-mobile">
      <div className="card">
        <div className="card-header">
          <figure className="image has-text-centered">
            <img
              className="card-mission-patch inline-block"
              src={launch.links.mission_patch_small}
              alt="mission patch"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">{launch.mission_name}</p>
            <p className="subtitle is-6">{launch.rocket.rocket_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchListView;
