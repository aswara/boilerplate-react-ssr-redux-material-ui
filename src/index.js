import React from 'react';
import * as serviceWorker from './serviceWorker';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './services/redux/store';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import App from './App';
import { themePalette } from './utils/themePalette';
import { changeThemeAction } from './services/actions'

// Create a store and get back itself and its history object
const { store, history } = createStore();

class MainComponent extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

  }

  render() {
    const { settings } = this.props
    // Create a theme instance.
    const muiTheme = createMuiTheme(themePalette[settings.theme])
    return (
      <MuiThemeProvider theme={muiTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = state => ({
  settings: state.settings
});

const dispatchToProps = dispatch => ({
  changeTheme: bindActionCreators(changeThemeAction, dispatch),
});

const Main = connect(
  mapStateToProps,
  dispatchToProps
)(MainComponent);

// Create a new class name generator.
const generateClassName = createGenerateClassName();

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Frontload noServerRender={true}>
        <JssProvider generateClassName={generateClassName}>
          <Main />
        </JssProvider>
      </Frontload>
    </ConnectedRouter>
  </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
