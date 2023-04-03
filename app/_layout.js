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
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Transitions',
          title: 'Transitions',
        }} 
      />
      <Drawer.Screen
        name="mysongs" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'My songs',
          title: 'My songs',
        }} 
      />
      <Drawer.Screen
        name="newtransition" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'New transition',
          title: 'New transition',
          drawerItemStyle: { display: 'none' }
        }}
      />
      <Drawer.Screen
        name="newsong" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'New song',
          title: 'New song',
          drawerItemStyle: { display: 'none' }
        }}
      />
    </Drawer>
  );
};

export default Layout;