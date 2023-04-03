import * as SQLite from 'expo-sqlite';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';

export const DATABASE_NAME = 'nextsong.db';

export const exportDb = async () => {
  await Sharing.shareAsync(FileSystem.documentDirectory + `SQLite/${DATABASE_NAME}`);
}

const importDb = async (db) => {
  let result = await DocumentPicker.getDocumentAsync({
    copyToCacheDirectory: true
  });

  if (result.type === 'success') {
    setIsLoading(true);

    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }

    const base64 = await FileSystem.readAsStringAsync(
      result.uri,
      { encoding: FileSystem.EncodingType.Base64 }
    );

    await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + `SQLite/${DATABASE_NAME}`, base64, { encoding: FileSystem.EncodingType.Base64 });
    await db.closeAsync();
    db = SQLite.openDatabase(DATABASE_NAME);
  }
};

export const songsTableQuery = `CREATE TABLE IF NOT EXISTS songs (
    song_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    key TEXT NOT NULL,
    bpm INTEGER NOT NULL,
    style TEXT NOT NULL,
    observation TEXT
    );`;

export const transitionsTableQuery = `CREATE TABLE IF NOT EXISTS transitions (
  transition_id INTEGER PRIMARY KEY AUTOINCREMENT,
  songFrom INTEGER REFERENCES songs(song_id),
  songTo INTEGER REFERENCES songs(song_id),
  outro TEXT NOT NULL,
  intro TEXT NOT NULL,
  observation TEXT
  );`;

export const dropTransitionsTableQuery = `DROP TABLE IF EXISTS transitions;`;

export const getMySongsQuery = 'SELECT * FROM songs';

export const getMyTransitionsQuery = 'SELECT * FROM transitions';

export const insertNewSongQuery = 'INSERT INTO songs (title, artist, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?, ?)';
export const insertNewTransitionQuery = 'INSERT INTO transitions (songFrom, songTo, outro, intro, observation) VALUES (?, ?, ?, ?, ?)';

export const searchSongsQuery = 'SELECT * FROM songs WHERE title LIKE ? OR artist LIKE ?';

export const getTranstionsWithSongs = `
  SELECT 
    t.transition_id, 
    t.outro, 
    t.intro, 
    t.observation AS transition_observation,
    sf.title AS songFrom_title, 
    sf.artist AS songFrom_artist, 
    sf.bpm AS songFrom_bpm, 
    sf.key AS songFrom_key, 
    sf.style AS songFrom_style, 
    sf.observation AS songFrom_observation,
    st.title AS songTo_title, 
    st.artist AS songTo_artist, 
    st.bpm AS songTo_bpm, 
    st.key AS songTo_key, 
    st.style AS songTo_style, 
    st.observation AS songTo_observation
  FROM 
    transitions t
    JOIN songs sf ON t.songFrom = sf.song_id
    JOIN songs st ON t.songTo = st.song_id;`;
