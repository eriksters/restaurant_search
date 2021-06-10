import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SearchScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Search bar</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#f0eeee",
		height: 40,
		borderRadius: 3,
		marginHorizontal: 20,
	},
});

export default SearchScreen;
