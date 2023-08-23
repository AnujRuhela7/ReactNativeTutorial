import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSource={ require('../../assets/images/forest.jpg') }
                score={ 9 }
            />
            <ImageDetail
                title="Rivers"
                imageSource={ require('../../assets/images/beach.jpg') }
                score={ 7 }
            />
            <ImageDetail
                title="Mountains"
                imageSource={ require('../../assets/images/mountain.jpg') }
                score={ 8 }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ImageScreen;