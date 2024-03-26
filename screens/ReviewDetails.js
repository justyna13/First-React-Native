import { View, StyleSheet, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack()
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review details</Text>
            <Button title="Back to home screen" onPress={pressHandler} />
        </View>
    )
}
