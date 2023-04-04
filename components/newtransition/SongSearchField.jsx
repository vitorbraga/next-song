import { useCallback, useEffect, useRef, useState } from "react";
import { TextInput, View, Text } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import * as SQLite from 'expo-sqlite';
import { COLORS, FONT, SIZES } from "../../constants";
import * as DB from "../../database/database";

import styles from "./SongSearchField.style";

export default function SongSearch({ placeholder, onSelectSong }) {
  const isFocused = useIsFocused();

  // const searchRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [remoteDataSet, setRemoteDataSet] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [db, setDb] = useState(SQLite.openDatabase(DB.DATABASE_NAME));
  const [transactionCount, setTransactionCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  // First, fetch all the song from the database
  useEffect(() => {
    if (!isFocused) {
      setIsLoading(true);
    } else {
      console.log('Will fetch songs SongSearch');
      db.transaction(
        (tx) => {
          tx.executeSql(DB.getMySongsQuery,
            [],
            (_, { rows }) => {
              setSongs(rows._array);
              setIsLoading(false);
            },
            () => console.log('Failed Fetch')
          )
        },
        null,
        () => setTransactionCount(transactionCount + 1),
      );
    }
  }, [isFocused]);

  const handleSetSelectItem = (selectedItem) => {
    console.log('handleSetSelectItem', selectedItem);
    if (selectedItem) {
      setSelectedItem(selectedItem);
      onSelectSong(selectedItem.id);
    }
  }

  const getSuggestions = async (q) => {
    const filterToken = q.toLowerCase();

    if (typeof q !== 'string' || q.length < 3) {
      setRemoteDataSet(null);
      return;
    }

    setLoading(true);

    const suggestions = songs
      .filter(item => {
        return item.title.toLowerCase().includes(filterToken) || item.artist.toLowerCase().includes(filterToken)
      })
      .map(item => ({
        id: item.song_id,
        title: item.title,
      }));

    setRemoteDataSet(suggestions);
    setLoading(false);
  };

  // const onOpenSuggestionsList = useCallback((isOpened) => { 
  //   if (isOpened) {
  //     searchRef.current.blur();
  //   }
  // }, [])

  if (isLoading) {
    return (
      // <View style={{ backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading songs...</Text>
      // </View>
    );
  }

  return (
    <View style={styles.viewContainer}>
      <AutocompleteDropdown
        ref={searchRef}
        containerStyle={styles.container}
        inputContainerStyle={styles.inputContainer}
        suggestionsListContainerStyle={styles.suggestionListContainer}
        suggestionsListTextStyle={styles.suggestionListText}
        dataSet={remoteDataSet}
        closeOnBlur={false}
        // onOpenSuggestionsList={onOpenSuggestionsList}
        useFilter={false}
        clearOnFocus={false}
        showChevron={false}
        debounce={300}
        textInputProps={{
          placeholder: placeholder,
          style: { fontFamily: FONT.regular, fontSize: 14, lineHeight: 25 },
          placeholderTextColor: COLORS.gray,
        }}
        keyboardShouldPersistTaps="always"
        onBlur={(e) => {e.stopPropagation(); console.log('onBlur')}}
        // renderItem={(item, text) => <Text style={{ padding: 15 }}>{item.title}</Text>}
        loading={loading}
        onSelectItem={handleSetSelectItem}
        onChangeText={getSuggestions}
        EmptyResultComponent={<Text style={{ padding: 10, fontSize: 15 }}>No results</Text>}
      />
    </View>
  );
}
