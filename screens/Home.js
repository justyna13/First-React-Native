import { View, StyleSheet, Text, Modal, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import Card from "../shared/Card";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from "./ReviewForm";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: "Final fantasy", rating: 2, body: "lorem ipsum", key: '3'},
        { title: "Zelda", rating: 5, body: "lorem ipsum", key: '1'},
        { title: "Pokemon", rating: 5, body: "lorem ipsum", key: '2'}
    ]);
    const [modalOpen, setModalOpen] = useState(true);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((prevReviews) => {
            return [ review, ...prevReviews];
        });

        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            <Icon 
                name="add" 
                size={24} 
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <Icon 
                            name="close" 
                            size={24} 
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <FlatList 
                data={reviews} 
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Review Details', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 10,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
});