import { createNativeStackNavigator } from'@react-navigation/native-stack';
import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
    const aboutNavigationOptions = ({ navigation}) => {
        return {
            headerTitle: () => <Header title="About" navigation={navigation} /> 
        }
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={aboutNavigationOptions} />
        </Stack.Navigator>
    )
}