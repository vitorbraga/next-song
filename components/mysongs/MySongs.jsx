import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';
import { COLORS, FetchStatus, SIZES } from "../../constants";
import SongCard from "./SongCard";
import * as DB from "../../constants/database";

import styles from "./MySongs.style";
import CustomButton from "../common/CustomButton/CustomButton";

export default function MySongs() {
  const isFocused = useIsFocused();

  const [songs, setSongs] = useState([]);
  const [fetchStatus, setFetchStatus ] = useState(FetchStatus.INITIAL);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleSuccessFetch = (_, { rows }) => {
    setSongs(rows._array);
    setFetchStatus(FetchStatus.SUCCESS);
  }

  const handleFailedFetch = () => {
    setFetchStatus(FetchStatus.FAILURE);
  }

  const fetchSongs = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(DB.getMySongsQuery, [], handleSuccessFetch, handleFailedFetch);
      },
      null,
      () => setTransactionCount(transactionCount + 1),
    );
  };

  useEffect(() => {
    if (!isFocused) {
      setFetchStatus(FetchStatus.LOADING);
    } else {
      fetchSongs();
    }
  }, [isFocused]);

  if (fetchStatus === FetchStatus.LOADING) {
    return (
      <View style={styles.statusBox}>
        <Text style={styles.messageText}>Loading songs...</Text>
      </View>
    );
  }

  if (fetchStatus === FetchStatus.FAILURE) {
    return (
      <View style={styles.statusBox}>
        <Text style={styles.errorText}>Failed to fetch songs.</Text>
        <View style={{ width: 100 }}>
          <CustomButton label="Retry" handlePress={fetchSongs} variant="tertiary" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.songsContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {songs.length === 0 && (
          <View style={styles.statusBox}>
            <Text style={styles.messageText}>You have no songs yet.</Text>
          </View>
        )}
        {songs.length > 0 && (
          <View>
            <Text style={styles.numberSongs}>You have {songs.length} registered songs.</Text>
            {songs.map((item) => <SongCard song={item} key={item.song_id} />)}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
