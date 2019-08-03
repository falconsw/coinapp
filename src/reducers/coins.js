import { CoinsActionTypes as ActionTypes } from '../types/ActionTypes';

const initialState = {
	coins: [],
	searchQuery: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ActionTypes.fetch_coins_result:
			if (action.hasError)
				return state;
			return {
				...state,
				coins: action.coins,
			};

		case ActionTypes.change_search_query:
			return {
				...state,
				searchQuery: action.searchQuery,
			};

		default:
			return state;
	}
}
