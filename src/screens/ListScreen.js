import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const foodItems = [
        { name: "Chole Bhature", price: "Rs. 200" },
        { name: "Masala Dosa", price: "Rs. 180" },
        { name: "Dal Makhani", price: "Rs. 250" },
        { name: "Pav Bhaji", price: "Rs. 100" },
        { name: "Rajma Chawal", price: "Rs. 300" },
        { name: "Butter Chicken", price: "Rs. 700" },
        { name: "Shahi Paneer", price: "Rs. 460" },
        { name: "Malai Kofta", price: "Rs. 380" }
    ];

    return (
        <FlatList
            keyExtractor={ (foodItems) => foodItems.name }
            data={ foodItems }
            renderItem={ ({ item }) => {
                return (
                    <Text style={ styles.text }>{ item.name } - { item.price }</Text>
                );
            } }
        />
    );
};

const styles = StyleSheet.create({
    text: {
        marginVertical: 30,
        fontSize: 20
    }
});

export default ListScreen;