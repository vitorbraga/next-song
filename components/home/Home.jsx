import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Home.style";

import { icons, SIZES } from "../../constants";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

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
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Which song are you mixing from?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <Text style={styles.welcomeMessage}>Some content here</Text> */}
      </ScrollView>
    </View>
  );
};

export default Home;
