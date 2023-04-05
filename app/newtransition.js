import { Stack, useRouter } from "expo-router";
import { View } from "react-native";

import NewTransition from "../components/newtransition/NewTransition";
import ScreenHeaderBtn from "../components/common/ScreenHeaderBtn/ScreenHeaderBtn";
import { COLORS, icons } from "../constants";

const NewTransitionPage = () => {
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
          headerTitle: "New transition",
        }}
      />

      <NewTransition />
    </View>
  );
};

export default NewTransitionPage;