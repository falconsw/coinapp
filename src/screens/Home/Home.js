import * as React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Header, SearchInput, FabButton } from '../../components';
import CoinObject from './CoinObject';

import { fetchCoins, changeSearchQuery } from '../../actions/coins';

import { homeStyles as styles } from './styles';

class Home extends React.Component {
	static navigationOptions = { header: null };

	componentDidMount() {
		this.props.dispatch(fetchCoins());
	}

	onSearchButtonTouched = () => {
		const { searchQuery } = this.props;
		this.props.dispatch(fetchCoins(searchQuery));
	};

	onChangeSearchQuery = (text) => {
		this.props.dispatch(changeSearchQuery(text));
	};

	onFabButtonTouched = () => {
		this.props.dispatch(fetchCoins(''));
	};

	onCoinObjectTouched = (coins) => {
		this.props.navigation.navigate('CoinDetails', { coins });
	};

	render() {
		const renderCoinItem = ({ item }) => < CoinObject coins={item}
															onPress={this.onCoinObjectTouched.bind(this, item)} />;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container}>
					<Header />
					<SearchInput
						placeholder='Coin ismi yazın'
						onPress={this.onSearchButtonTouched}
						onChangeText={this.onChangeSearchQuery}
						style={styles.searchInput}
					/>
					<View style={styles.line} />

					<FlatList
						data={this.props.coins}
						renderItem={renderCoinItem}
						keyExtractor={item => item.symbol}
					/>
				</ScrollView>
				<FabButton
					icon='refresh'
					onPress={this.onFabButtonTouched}
					style={styles.fabButton}
				/>
			</View>
		);
	}
}

Home.propTypes = {
	dispatch: PropTypes.func,
	navigation: PropTypes.any,

	coins: PropTypes.array,
	searchQuery: PropTypes.string,
};

const stateToProps = (state) => {
	const { coins, searchQuery } = state.coins;
	return {
		coins,
		searchQuery,
	};
};

export default connect(stateToProps)(Home);
