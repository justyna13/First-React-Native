import { View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: "Final fantasy", rating: 2, body: "lorem ipsum", key: '3'},
        { title: "Zelda", rating: 5, body: "lorem ipsum", key: '1'},
        { title: "Pokemon", rating: 5, body: "lorem ipsum", key: '2'}
    ]);
    


    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews} 
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
});