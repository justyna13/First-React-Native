import { createNativeStackNavigator } from'@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    const defaultNavigationOptions =  {
        headerStyle: { 
            backgroundColor: '#eee'
        },
        headerTintColor: '#444',
    };

    const homeNavigationOptions = ({ navigation}) => {
        return {
            headerTitle: () => <Header title="GameZonee" navigation={navigation} /> 
        }
    }
    return (
        <Stack.Navigator screenOptions={defaultNavigationOptions}>
            <Stack.Screen name="Home" component={Home} options={homeNavigationOptions} />
            <Stack.Screen name="Review Details" component={ReviewDetails}  />
        </Stack.Navigator>
    )
}