import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors';

export const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	searchInput: {
		alignSelf: 'center',
	},
	line: {
		flex: 1,
		height: 1,

		marginTop: 36,
		backgroundColor: colors.gray,
	},
	fabButton: {
		position: 'absolute',
		bottom: 36,
		end: 36,
	},
});

export const coinObjectStyles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 5,
		backgroundColor: '#f8f8f8',
	},
	flatView: {
		padding: 5,
		borderRadius: 2,
	},
	contentContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	coinName: {
		flex: 1,
		marginStart: 12,

		color: colors.text_color,
	},

});
