import { call, put, takeLatest } from 'redux-saga/effects';

import { fetch_coins_api } from '../api/webApi';
import { fetchCoinsResult } from '../actions/coins';

import { CoinsActionTypes as ActionTypes } from '../types/ActionTypes';

function* fetchCoinsSaga(action) {
	try {
		const { searchQuery } = action;

		const response = yield call(fetch_coins_api, searchQuery);
		yield put(fetchCoinsResult(false, response.data));
	} catch (e) {
		yield put(fetchCoinsResult(true));
	}
}

export default [
	takeLatest(ActionTypes.fetch_coins, fetchCoinsSaga),
];
