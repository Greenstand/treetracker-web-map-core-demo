import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type CardProps = {
	setIsDisplay: (n: boolean) => void;
	country_name: string;
	image_url: string;
};

export default function Card({
	setIsDisplay,
	image_url,
	country_name
}: CardProps) {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row-reverse",
					marginTop: 2
				}}
			>
				<Icon
					name="close-circle-outline"
					size={30}
					color="black"
					onPress={() => {
						setIsDisplay(false);
					}}
				/>
			</View>
			<View>
				<View style={styles.content}>
					<Text style={styles.title}> Country name:</Text>
					<Text style={styles.subTitle}>{country_name}</Text>
				</View>
				<Image source={{ uri: image_url }} style={styles.image} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 32,
		height: 100,
		zIndex: 100,
		justifyContent: "center"
	},
	content: {
		flexDirection: "row"
	},
	subTitle: { fontSize: 18 },

	title: {
		fontSize: 18,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "black",
		marginBottom: 10,
		marginRight: 10
	},
	image: {
		width: "auto",
		height: 200
	}
});
