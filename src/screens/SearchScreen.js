import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = ({ navigation }) => {
	return (
		<View style={styles.containerStyle}>
			<SearchBar />
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: "#fff",
		height: "100%",
	},
});

export default SearchScreen;
