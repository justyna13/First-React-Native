import { View, StyleSheet, Text } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>about</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
});