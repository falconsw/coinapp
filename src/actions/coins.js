import { CoinsActionTypes as ActionTypes } from '../types/ActionTypes';

export const fetchCoins = (searchQuery = '') => ({
	type: ActionTypes.fetch_coins,
	searchQuery,
});

export const fetchCoinsResult = (hasError, coins) => ({
	type: ActionTypes.fetch_coins_result,
	hasError,
	coins,
});

export const changeSearchQuery = (searchQuery) => ({
	type: ActionTypes.change_search_query,
	searchQuery,
});
