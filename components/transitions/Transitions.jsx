import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";
import * as SQLite from 'expo-sqlite';
import { COLORS, icons, SIZES } from "../../constants";
import * as DB from "../../database/database";
import { useIsFocused } from "@react-navigation/native";

import styles from "./Transitions.style";
import TransitionCard from "./TransitionCard";

const Transitions = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [allTransitions, setAllTransitions] = useState([]);
  const [filteredTransitions, setFilteredTransitions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);
  const isFocused = useIsFocused();

  const handleSuccessFetch = (_, { rows }) => {
    setAllTransitions(rows._array);
    setFilteredTransitions(rows._array);
    setIsLoading(false);
  };

  const handleFailedFetch = (_, err) => {
    console.log('Failed Fetch', err);
    setIsLoading(false);
  };

  const handleChangeSearchTerm = (text) => {
    setSearchTerm(text);
    if (text && text.length > 3) {
      const filtered = allTransitions.filter((item) => item.songFrom_artist.includes(text) || item.songFrom_title.includes(text));
      setFilteredTransitions(filtered);
    } else {
      setFilteredTransitions(allTransitions);
    }
  };

  useEffect(() => {
    if (!isFocused) {
      setIsLoading(true);
    } else {
      db.transaction(
        (tx) => {
          tx.executeSql(DB.getAllTranstionsWithSongs, [], handleSuccessFetch, handleFailedFetch);
        },
        null,
        () => setTransactionCount(transactionCount + 1),
      );
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Find a transition</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={handleChangeSearchTerm}
            placeholder='Which song are you mixing from?'
          />
        </View>

        {/* <TouchableOpacity style={styles.searchBtn} onPress={handleSearchClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity> */}
      </View>

      {isLoading ? (
        <View style={{ flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading transitions...</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredTransitions.slice(0, 10).map((item)=> <TransitionCard transition={item} key={item.transition_id} />)}
        </ScrollView>
      )}
    </View>
  );
};

export default Transitions;
