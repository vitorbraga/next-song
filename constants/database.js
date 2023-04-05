export const DATABASE_NAME = 'nextsong.db';

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

export const getAllTranstionsWithSongs = `
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

export const deleteSongsQuery = 'DELETE FROM songs';

export const deleteTransitionsQuery = 'DELETE FROM transitions';

export const insertSongWithId = 'INSERT INTO songs (song_id, title, artist, key, bpm, style, observation) VALUES (?, ?, ?, ?, ?, ?, ?)';

export const insertTransitionWithId = 'INSERT INTO transitions (transition_id, songFrom, songTo, outro, intro, observation) VALUES (?, ?, ?, ?, ?, ?)';
