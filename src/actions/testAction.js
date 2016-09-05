import axios from "axios";

export const TESTACTION = 'TESTACTION';

export function testFun() {
	//const request = axios.get('http://ajaxURR');
	const request = 'test';
	return {
		type: TESTACTION,
		payload: request
	};
}
