import * as React from 'react';
import { View, Text } from 'react-native';
import { homeStyles as styles } from './styles';

class CoinDetails extends React.Component {
	static navigationOptions = {
		title: 'Coin Details',
	};

	render() {
		const { symbol, price } = this.props.navigation.state.params.coins;

		return (
			<View style={styles.container}>
				<Text style={styles.textCenter}>SYMBOL : {`${symbol}`}</Text>
				<Text style={styles.textCenter}>PRICE : {`${price}`}</Text>
			</View>
		);
	}
}

export default CoinDetails;
