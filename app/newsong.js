import { Stack, useRouter } from "expo-router";
import { View } from "react-native";
import { ScreenHeaderBtn } from "../components";
import NewSong from "../components/newsong/NewSong";
import { COLORS, icons } from "../constants";

const NewSongPage = () => {
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
          headerTitle: "New song",
        }}
      />

      <NewSong />
    </View>
  );
};

export default NewSongPage;