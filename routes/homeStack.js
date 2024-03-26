import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Review Details" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}