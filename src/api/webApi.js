import axios from 'axios';

export const fetch_coins_api = (searchQuery) => {
	const fetch_all_coins_url = 'https://api.binance.com/api/v3/ticker/price';
	const fetch_coins_by_symbol_url = `https://api.binance.com/api/v3/ticker/price?symbol=${searchQuery}`;

	const url = searchQuery ? fetch_coins_by_symbol_url : fetch_all_coins_url;
	return axios.get(url);
};
