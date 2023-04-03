import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as SQLite from 'expo-sqlite';

import { COLORS, icons, images, SIZES } from "../constants";
import { Home } from "../components";
import { FloatingAction } from "react-native-floating-action";
import * as DB from "../database/database";
import { useIsFocused } from "@react-navigation/native";

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
  const isFocused = useIsFocused();

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [transactionCount, setTransactionCount] = useState(0);
  const [db, setDb] = useState(SQLite.openDatabase('nextsong.db'));

  useEffect(() => {
    console.log('useEffect index', isFocused);
    if (!isFocused) {
      setIsLoading(true);
    } else {
      console.log('Will try to create table');
      db.transaction(tx => {
        tx.executeSql(DB.songsTableQuery);
        tx.executeSql(DB.transitionsTableQuery);
      },
      null,
      () => setTransactionCount(transactionCount + 1));
  
      // db.transaction(tx => {
      //   tx.executeSql(DB.getMyTransitionsQuery, null,
      //     (txObj, resultSet) => console.log(resultSet.rows._array),
      //     (txObj, error) => console.log(error)
      //   );
      // });
      setIsLoading(false);
    }
  }, [db, isFocused]);

  const handleActionButtonClick = (buttonName) => {
    if (buttonName === 'bt-new-transition') {
      router.push(`/newtransition`)
    }
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading transitions...</Text>
      </View>
    );
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
