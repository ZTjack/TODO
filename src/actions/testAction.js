import axios from "axios";

export const TESTACTION = 'TESTACTION';

export function testFun() {
	const request = axios.get('http://alihk10.qbtrade.org/api/order/backteststat');
	return {
		type: TESTACTION,
		payload: request
	};
}