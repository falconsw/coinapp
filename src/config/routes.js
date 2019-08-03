import { navigator } from './navigator';

import Home from '../screens/Home/Home';
import CoinDetails from '../screens/CoinDetails/CoinDetails';

const routes = {
	Home: { screen: Home },
	CoinDetails: { screen: CoinDetails },
};

const options = {
	cardStyle: {
		backgroundColor: 'white',
	},
};

export const AppNavigator = navigator({ routes, options });
