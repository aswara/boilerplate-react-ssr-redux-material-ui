import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <main>
          <h1>Dashboard</h1>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.settings
});

const dispatchToProps = dispatch => ({
  
});

const DashboardMapped = connect(
  mapStateToProps,
  dispatchToProps
)(Dashboard);

export default DashboardMapped;
