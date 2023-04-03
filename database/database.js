import { openDatabase, enablePromise } from 'react-native-sqlite-storage';

enablePromise(true);

export async function getDBConnection() {
  try {
    console.log('getDBConnection 1');
    const db = openDatabase({ name: 'next-song.db', createFromLocation: 1 });
    console.log('getDBConnection 2');
    return db;
  } catch (e) {
    console.log('Error in getDBConnection', e);
    return null;
  }
}

export const createTables = async (db) => {
  // create table if not exists
  // CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20) UNIQUE, user_contact INT(10), user_address VARCHAR(255))
  try {
    console.log('createTables 1');
    const songsTable = `CREATE TABLE IF NOT EXISTS songs (
      song_id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      key TEXT NOT NULL,
      bpm INTEGER NOT NULL,
      style TEXT NOT NULL,
      observation TEXT
      );`;
    await db.executeSql(songsTable);
    console.log('createTables 2');
  } catch (error) {
    console.error(error);
    throw Error('Failed to create tables !!!');
  }
};

export const getMySongs = async (db) => {
  try {
    const songs = [];
    const results = await db.executeSql(`SELECT * FROM songs`);
    console.log(results);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        songs.push(result.rows.item(index))
      }
    });
    console.log('Songs getMySongs', songs);
    return songs;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get songs !!!');
  }
};

export const saveTodoItems = async (db, song) => {
  return db.executeSql('INSERT INTO my_songs (name, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?)',
    [song.name, song.key, song.bpm, song.style, song.observation])
};

// export async function insertNewSong(song) {
//   const db = await getDb();
//   db.executeSql('INSERT INTO my_songs (name, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?)', [song.name, song.key, song.bpm, song.style, song.observation])

//   await db.transaction((tx) => {
//     tx.executeSql(
//       'INSERT INTO my_songs (name, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?)',
//       [song.name, song.key, song.bpm, song.style, song.observation],
//       (tx, results) => {
//         console.log('Results', results.rowsAffected);
//         if (results.rowsAffected > 0) {
//           console.log('Song added');
//         } else {
//           console.log('Song not added');
//         }
//       },
//     );
//   });
// }