import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import settings from './settings';

export default (history) => combineReducers({
	router: connectRouter(history),
	settings,
});
