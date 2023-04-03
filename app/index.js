import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Home } from "../components";
import { FloatingAction } from "react-native-floating-action";
// import * as DB from "../database/database";

const actions = [
  {
    text: "New transition",
    icon: require("../assets/icons/chevron-right.png"),
    name: "bt-new-transition",
    position: 1
  },
];

const Index = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  // useEffect(() => {
  //   console.log("Index");
  //   const initDatabase = async () => {
  //     console.log('Will init database');
  //     const dbConnection = await DB.getDBConnection();
  //     // await DB.createTables(dbConnection);
  //   };

  //   initDatabase();
  // }, []);

  const handleActionButtonClick = (buttonName) => {
    if (buttonName === 'bt-new-transition') {
      router.push(`/newtransition`)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <Home
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        />
      </View>
      <FloatingAction
        actions={actions}
        distanceToEdge={SIZES.small}
        onPressItem={handleActionButtonClick}
      />
    </SafeAreaView>
  );
};

export default Index;
