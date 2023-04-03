import { useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, SIZES } from "../../constants";
import { FloatingAction } from "react-native-floating-action";
import SongCard from "./SongCard";
// import * as DB from "../../database/database";

const actions = [
  {
    text: "New song",
    icon: require("../../assets/icons/chevron-right.png"),
    name: "bt-new-song",
    position: 1
  },
];

const mySongs = [
  { id: 1, title: 'Mind Breaker', artist: 'Paul Deep', bpm: 123, key: '4A', style: 'Ethnic' },
  { id: 2, title: 'Illusions', artist: 'Cristoph', bpm: 125, key: '5A', style: 'Progressive' },
  { id: 3, title: 'Mirage', artist: 'Pryda', bpm: 126, key: '8A', style: 'Progressive' },
  { id: 4, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
  { id: 5, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
  { id: 6, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
  { id: 7, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
  { id: 8, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
  { id: 9, title: 'Catuca', artist: 'Classmatic', bpm: 128, key: '10A', style: 'TH Brazil Latin' },
]

export default function MySongs() {
  const router = useRouter();
  // useEffect(() => {
  //   console.log('My songs screen');
  //   const loadMySongs = async () => {
  //     console.log('Will load my songs');
  //     const dbConnection = await DB.getDBConnection();
  //     // const mySongs = await DB.getMySongs(dbConnection);
  //     // console.log('mySongs', mySongs);
  //   };

  //   loadMySongs();
  // }, []);

  const handleActionButtonClick = (buttonName) => {
    if (buttonName === 'bt-new-song') {
      router.push('/newsong');
      console.log('button new song');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={mySongs}
          renderItem={({ item }) => <SongCard song={item} />}
          keyExtractor={item => item.id}
        />
      </ScrollView>

      <FloatingAction
        actions={actions}
        distanceToEdge={SIZES.small}
        onPressItem={handleActionButtonClick}
      />
    </SafeAreaView>
  );
}