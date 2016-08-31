import {
	TESTACTION
} from '../actions/testAction';

const INITIAL_STATE = {
	test: ""
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TESTACTION:
			return {...state,
				test: action.payload.data.backtestId
			};
		default:
			return state;
	}
}
