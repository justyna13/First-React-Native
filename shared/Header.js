import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({ title, navigation }) {
    const openMenu = () => {
        navigation.openDrawer()

    };
    
    return (
        <ImageBackground source={require('../assets/bg.png')} style={styles.header}>
            <Image style={styles.headerImg} source={require('../assets/app.png')} />
            <Text style={styles.icon} onPress={openMenu} ><Icon name="menu" size={28} /></Text>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImg: {
        width: 26,
        height: 26,
        marginHorizontal: 12
    }
})