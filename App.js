import { useEffect, useState } from "react";
import Home from "./screens/Home";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'workbench-regular': require('./assets/fonts/Workbench-Regular.ttf'),
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded]  = useState(false);

  useEffect(() => {
    getFonts().then(async () => {
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    });
  }, [])

  if (!fontsLoaded) return null

  return <Navigator />
}
