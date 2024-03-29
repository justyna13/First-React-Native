import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },
    titleText: {
        fontFamily: 'workbench-regular',
        fontSize: 46,
        textAlign: 'center',
        color: "#333"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
});

export const images = {
    ratings: {
        '1': require('../assets/rating.png'),
        '2': require('../assets/app.png'),
        '3': require('../assets/rating.png'),
        '4': require('../assets/rating.png'),
        '5': require('../assets/rating.png'),
    }
}