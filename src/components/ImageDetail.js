import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, score }) => {
	// console.log(title + imageSource);
	return (
		<View>
			<Image source={ imageSource } />
			<Text style={ styles.text }>{ title }</Text>
			<Text style={ styles.text }>Image Score : { score }</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	}
});

export default ImageDetail;