import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { ScreenHeaderBtn, Storage } from "../components";
import { COLORS, icons } from "../constants";

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