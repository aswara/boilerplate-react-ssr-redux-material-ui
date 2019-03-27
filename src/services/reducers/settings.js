import * as types from '../actions/actionTypes';
import Cookies from 'js-cookie';
import isServer from '../../utils/isServer';

const initialState = {
	theme: 'purpleBlueTheme'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.CHANGE_THEME:
			Cookies.set('theme', action.theme);
			return {
				...state,
				theme: action.theme
			}
		default:
		 	return {
		 		...state
		 	}
	}
}