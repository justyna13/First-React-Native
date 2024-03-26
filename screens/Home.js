import { View, StyleSheet, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        
    },
    titleText: {
        fontFamily: 'workbench-regular',
        fontSize: 46,
        textAlign: 'center'
    }
});