import { View, StyleSheet, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation, route }) {
    const { title, body, rating } = route.params;

    const pressHandler = () => {
        navigation.goBack()
    }
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{ title }</Text>
            <Text>{ rating }/5</Text>
            <Text>{body}</Text>
        </View>
    )
}
