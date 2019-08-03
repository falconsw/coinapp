import * as React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import PropTypes from 'prop-types';

import { coinObjectStyles as styles } from './styles';

class CoinObject extends React.Component {
	render() {
		const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

		const { onPress } = this.props;
		const { symbol, price } = this.props.coins;

		return (
			<TouchableComponent onPress={onPress} style={styles.container}>
				<View style={styles.flatView}>
					<Text style={styles.coinName}>{`${symbol} ( ${price} )`}</Text>
				</View>
			</TouchableComponent>
		);
	}
}

CoinObject.propTypes = {
	coins: PropTypes.object,
	onPress: PropTypes.func,
};

export default CoinObject;
