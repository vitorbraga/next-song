import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import * as SQLite from 'expo-sqlite';

import { COLORS, icons, images, SIZES } from "../constants";
import * as DB from "../database/database";
import { useIsFocused } from "@react-navigation/native";
import { ScreenHeaderBtn, Transitions } from "../components";

const Index = () => {
  const router = useRouter();
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);
  const [transactionCount, setTransactionCount] = useState(0);
  const [db, setDb] = useState(SQLite.openDatabase('nextsong.db'));

  useEffect(() => {
    if (!isFocused) {
      setIsLoading(true);
    } else {
      console.log('Will try to create table');
      db.transaction(tx => {
        tx.executeSql(DB.songsTableQuery);
        // tx.executeSql(DB.dropTransitionsTableQuery);
        tx.executeSql(DB.transitionsTableQuery);
      },
      null,
      () => setTransactionCount(transactionCount + 1));
  
      setIsLoading(false);
    }
  }, [db, isFocused]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading transitions...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.plusBlack}
              dimension='60%'
              handlePress={() => router.push(`/newtransition`)}
            />
          ),
        }}
      />
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.medium,
        }}
      >
        <Transitions />
      </View>
    </View>
  );
};

export default Index;
