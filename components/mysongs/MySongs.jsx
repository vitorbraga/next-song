import { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';
import { COLORS, SIZES } from "../../constants";
import SongCard from "./SongCard";
import * as DB from "../../database/database";

const actions = [
  {
    text: "New song",
    icon: require("../../assets/icons/chevron-right.png"),
    name: "bt-new-song",
    position: 1
  },
];

export default function MySongs() {
  const router = useRouter();
  const isFocused = useIsFocused();

  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleSuccessFetch = (_, { rows }) => {
    setSongs(rows._array);
    setIsLoading(false);
  }

  const handleFailedFetch = () => {
    console.log('Failed Fetch');
    setIsLoading(false);
  }

  useEffect(() => {
    if (!isFocused) {
      setIsLoading(true);
    } else {
      db.transaction(
        (tx) => {
          tx.executeSql(DB.getMySongsQuery, [], handleSuccessFetch, handleFailedFetch);
        },
        null,
        () => setTransactionCount(transactionCount + 1),
      );
    }
  }, [isFocused]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading transitions...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, padding: SIZES.small }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {songs.length === 0 && (
          <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
            <Text>You have no songs yet.</Text>
          </View>
        )}
        {songs.map((item)=> <SongCard song={item} key={item.song_id} />)}
      </ScrollView>
    </View>
  );
}

