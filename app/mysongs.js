import { Stack, useRouter } from "expo-router";
import { View } from "react-native";

import MySongs from "../components/mysongs/MySongs";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn/ScreenHeaderBtn";
import { COLORS, icons } from "../constants";

const MySongsPage = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension='80%'
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.plusBlack}
              dimension='60%'
              handlePress={() => router.push('/newsong')}
            />
          ),
          headerTitle: "My songs",
        }}
      />

      <MySongs />
    </View>
  );
};

export default MySongsPage;
