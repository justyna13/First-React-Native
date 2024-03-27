import { createNativeStackNavigator } from'@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    const defaultNavigationOptions = {
        headerStyle: { 
            backgroundColor: '#eee'
        },
        headerTintColor: '#444'
    };

    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={defaultNavigationOptions}>
                <Stack.Screen name="Home" component={Home} options={ {title: 'GameZoneee' }} />
                <Stack.Screen name="Review Details" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}