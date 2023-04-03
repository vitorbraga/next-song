import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Drawer } from "../components/common/header/Drawer";


SplashScreen.preventAutoHideAsync();

// export const unstable_settings = {
//   // Ensure any route can link back to `/`
//   initialRouteName: "home",
// };

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
        await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Transitions',
          title: 'Transitions',
        }} 
      />
      <Drawer.Screen
        name="mysongs"
        options={{
          drawerLabel: 'My songs',
          title: 'My songs',
        }} 
      />
      <Drawer.Screen
        name="newtransition"
        options={{
          drawerLabel: 'New transition',
          title: 'New transition',
          drawerItemStyle: { display: 'none' }
        }}
      />
      <Drawer.Screen
        name="newsong"
        options={{
          drawerLabel: 'New song',
          title: 'New song',
          drawerItemStyle: { display: 'none' }
        }}
      />
      <Drawer.Screen
        name="storage"
        options={{
          drawerLabel: 'Storage',
          title: 'Storage',
        }}
      />
    </Drawer>
  );
};

export default Layout;