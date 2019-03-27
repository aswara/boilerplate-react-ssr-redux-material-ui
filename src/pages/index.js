import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import LoadingLoadable from '../components/LoadingLoadable';
import Container from '../components/Container';

const Themes = Loadable({
  loader: () => import('./themes/ThemesContainer'),
  loading: LoadingLoadable,
  timeout: 10000, // 10 seconds
});

const Dashboard = Loadable({
  loader: () => import('./dashboard'),
  loading: LoadingLoadable,
  timeout: 10000, // 10 seconds
});

const Login = Loadable({
  loader: () => import('./login/LoginContainer'),
  loading: LoadingLoadable,
  timeout: 10000, // 10 seconds
});

class Pages extends Component {
  render() {
    const { router } = this.props
    return [
      <Switch key="router">
          <Route exact path="/login" component={Login}/>
          <Container 
          {...this.props}>
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/themes" component={Themes}/>
            </Switch>
          </Container>
      </Switch>,
      <Switch key="modal">
      </Switch>
    ];
  }
}

const mapStateToProps = state => ({
  router: state.router
});

const dispatchToProps = dispatch => ({
  
});

const PagesMapped = connect(
  mapStateToProps,
  dispatchToProps
)(Pages);

export default withRouter(PagesMapped);