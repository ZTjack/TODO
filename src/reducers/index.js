import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import TestReducer from './testReducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	test: TestReducer
});

export default rootReducer;