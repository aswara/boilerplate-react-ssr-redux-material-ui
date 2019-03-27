import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import reducers from '../reducers';
import promiseMiddleware from 'redux-promise-middleware';
import isServer from '../../utils/isServer';

export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // middleware redux promise
  const promise = promiseMiddleware;

  //muddleware redux
  const middleware = [promise, routerMiddleware(history)];

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  const rootReducer = reducers(history)

  // Create the store
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
  );

  return {
    store,
    history,
  };
};
