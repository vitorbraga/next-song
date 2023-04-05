import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Drawer } from "../components/common/Drawer";
import { icons } from "../constants";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn/ScreenHeaderBtn";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerLeft: (props) => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension='60%'
            handlePress={() => navigation.toggleDrawer()}
          />
        ),
      })}
    >
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