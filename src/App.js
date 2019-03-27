import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pages from './pages';
import { connect } from 'react-redux';
import { themePalette } from './utils/themePalette';

class App extends Component {
  render() {
    const { settings } = this.props
    const { theme } = settings
    const muiTheme = createMuiTheme(themePalette[theme])
    return (
        <Pages />
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings
});

const dispatchToProps = dispatch => ({
  
});

const AppMapped = connect(
  mapStateToProps,
  dispatchToProps
)(App);

export default AppMapped;
