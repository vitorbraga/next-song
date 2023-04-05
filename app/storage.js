import { Stack, useRouter } from "expo-router";
import { View } from "react-native";

import { COLORS, icons } from "../constants";
import Storage from "../components/storage/Storage";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn/ScreenHeaderBtn";

const StoragePage = () => {
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
              dimension='60%'
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "Storage",
        }}
      />

      <Storage />
    </View>
  );
};

export default StoragePage;