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
  songFrom TEXT NOT NULL,
  songTo TEXT NOT NULL,
  exitInfo TEXT NOT NULL,
  entryInfo TEXT NOT NULL,
  observation TEXT
  );`;

export const getMySongsQuery = 'SELECT * FROM songs';

export const getMyTransitionsQuery = 'SELECT * FROM transitions';

export const insertNewSongQuery = 'INSERT INTO songs (title, artist, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?, ?)';

export const searchSongsQuery = 'SELECT * FROM songs WHERE title LIKE ? OR artist LIKE ?';
