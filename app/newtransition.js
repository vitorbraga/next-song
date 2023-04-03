import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenHeaderBtn } from "../components";
import NewTransition from "../components/newtransition/NewTransition";
import { COLORS, icons } from "../constants";

const NewTransitionPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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
    </SafeAreaView>
  );
};

export default NewTransitionPage;