import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStask";

const Drawer = createDrawerNavigator();



export default  function RootDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutStack" component={AboutStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}