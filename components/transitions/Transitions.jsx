import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';

import TransitionCard from "./TransitionCard";
import CustomButton from "../common/CustomButton/CustomButton";
import { COLORS, FetchStatus, MAX_TRANSITIONS, SIZES } from "../../constants";
import * as DB from "../../constants/database";

import styles from "./Transitions.style";

const Transitions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allTransitions, setAllTransitions] = useState([]);
  const [filteredTransitions, setFilteredTransitions] = useState([]);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);
  const isFocused = useIsFocused();

  const [fetchStatus, setFetchStatus ] = useState(FetchStatus.INITIAL);

  const handleSuccessFetch = (_, { rows }) => {
    setAllTransitions(rows._array);
    setFilteredTransitions(rows._array.slice(0, MAX_TRANSITIONS));
    setFetchStatus(FetchStatus.SUCCESS);
  };

  const handleFailedFetch = (_, err) => {
    setFetchStatus(FetchStatus.FAILURE);
  };

  const handleChangeSearchTerm = (text) => {
    setSearchTerm(text);
    if (text && text.length > 3) {
      const filtered = allTransitions.filter((item) => item.songFrom_artist.includes(text) || item.songFrom_title.includes(text));
      setFilteredTransitions(filtered);
    } else {
      setFilteredTransitions(allTransitions.slice(0, MAX_TRANSITIONS));
    }
  };

  const fetchTransitions = () => {
    db.transaction(
      (tx) => {
        tx.executeSql(DB.getAllTranstionsWithSongs, [], handleSuccessFetch, handleFailedFetch);
      },
      null,
      () => setTransactionCount(transactionCount + 1),
    );
  };

  useEffect(() => {
    if (!isFocused) {
      setFetchStatus(FetchStatus.LOADING);
    } else {
      fetchTransitions();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
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
          placeholder='Which song are you mixing from?'
        />
      </View>

      {fetchStatus === FetchStatus.LOADING && (
        <View style={styles.statusBox}>
          <Text style={styles.messageText}>Loading transitions...</Text>
        </View>
      )}
      
      {fetchStatus === FetchStatus.FAILURE && (
        <View style={styles.statusBox}>
          <Text style={styles.errorText}>Failed to fetch transitions.</Text>
          <View style={{ width: 100 }}>
            <CustomButton label="Retry" handlePress={fetchTransitions} variant="tertiary" />
          </View>
        </View>
      )}

      {fetchStatus === FetchStatus.SUCCESS && (
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: SIZES.xSmall }}>
          {filteredTransitions.length === 0 && (
            <View style={styles.statusBox}>
              <Text>No transitions found</Text>
            </View>
          )}
          {filteredTransitions.length > 0 && (
            <View>
              <Text style={styles.numberTransitions}>Showing {filteredTransitions.length} out of {allTransitions.length} registered transitions.</Text>
              {filteredTransitions.map((item) => <TransitionCard transition={item} key={item.transition_id} />)}
            </View>
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default Transitions;
