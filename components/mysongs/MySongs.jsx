import { useEffect, useState } from "react";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';
import { COLORS, FetchStatus, MAX_SONGS, SIZES } from "../../constants";
import SongCard from "./SongCard";
import CustomButton from "../common/CustomButton/CustomButton";
import * as DB from "../../constants/database";

import styles from "./MySongs.style";

const MINIMUM_SEARCH_LENGTH = 2;

export default function MySongs() {
  const isFocused = useIsFocused();

  const [searchTerm, setSearchTerm] = useState('');
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [fetchStatus, setFetchStatus ] = useState(FetchStatus.INITIAL);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);

  const handleSuccessFetch = (_, { rows }) => {
    setAllSongs(rows._array);
    setFilteredSongs(rows._array.slice(0, MAX_SONGS));
    setFetchStatus(FetchStatus.SUCCESS);
  }

  const handleFailedFetch = () => {
    setFetchStatus(FetchStatus.FAILURE);
  }

  const handleChangeSearchTerm = (text) => {
    setSearchTerm(text);
    if (text && text.length > MINIMUM_SEARCH_LENGTH) {
      const lowerCaseText = text.toLowerCase();
      const filtered = allSongs.filter((item) => 
        item.title.toLowerCase().includes(lowerCaseText) ||
        item.artist.toLowerCase().includes(lowerCaseText) ||
        item.style.toLowerCase().includes(lowerCaseText)
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs(allSongs.slice(0, MAX_SONGS));
    }
  };

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
      <View style={styles.searchContainer}>
        <Image
          source={require('../../assets/icons/search.png')}
          style={styles.imageStyle}
        />
        <TextInput
          style={{ flex: 1, width: '100%' }}
          value={searchTerm}
          onChangeText={handleChangeSearchTerm}
          placeholderTextColor={COLORS.gray}
          placeholder='Artist, song title...'
        />
      </View>

      {fetchStatus === FetchStatus.LOADING && (
        <View style={styles.statusBox}>
          <Text style={styles.messageText}>Loading songs...</Text>
        </View>
      )}
      
      {fetchStatus === FetchStatus.FAILURE && (
        <View style={styles.statusBox}>
          <Text style={styles.errorText}>Failed to fetch songs.</Text>
          <View style={{ width: 100 }}>
            <CustomButton label="Retry" handlePress={fetchSongs} variant="tertiary" />
          </View>
        </View>
      )}

      {fetchStatus === FetchStatus.SUCCESS && (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: SIZES.xSmall }}>
          {filteredSongs.length === 0 && (
            <View style={styles.statusBox}>
              <Text>No songs found</Text>
            </View>
          )}
          {filteredSongs.length > 0 && (
            <View>
              <Text style={styles.numberSongs}>Showing {filteredSongs.length} out of {allSongs.length} registered songs.</Text>
              {filteredSongs.map((item) => <SongCard song={item} key={item.song_id} />)}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
}
