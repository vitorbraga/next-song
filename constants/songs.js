const SONG_STYLES_DROPDOWN = [
  { label: 'TH Brazil Latin', value: 'TH Brazil Latin' },
  { label: 'TH Brisa', value: 'TH Brisa' },
  { label: 'TH Ethnic', value: 'TH Ethnic' },
  { label: 'TH Serious', value: 'TH Serious' },
  { label: 'TH Dance Bangers', value: 'TH Dance Bangers' },
  { label: 'Progressive', value: 'Progressive' },
  { label: 'Ethnic', value: 'Ethnic' },
  { label: 'Techno', value: 'Techno' },
  { label: 'Melodic Deep Techno', value: 'Melodic Deep Techno' },
  { label: 'Minimal', value: 'Minimal' },
  { label: 'Minimal House', value: 'Minimal House' },
  { label: 'House', value: 'House' },
  { label: 'Groove', value: 'Groove' },
];

const SONG_STYLES_COLOR_MAP = {
  'TH Brazil Latin': { backgroundColor: '#d6992f', color: '#fff' },
  'TH Brisa': { backgroundColor: '#e6844c', color: '#fff' },
  'TH Ethnic': { backgroundColor: '#cc8862', color: '#fff' },
  'TH Serious': { backgroundColor: '#a84107', color: '#fff' },
  'TH Dance Bangers': { backgroundColor: '#e87533', color: '#fff' },
  'Progressive': { backgroundColor: '#487af0', color: '#fff' },
  'Ethnic': { backgroundColor: '#57279c', color: '#fff' },
  'Techno': { backgroundColor: '#534c5c', color: '#fff' },
  'Melodic Deep Techno': { backgroundColor: '#998fa6', color: '#fff' },
  'Minimal': { backgroundColor: '#755d94', color: '#fff' },
  'Minimal House': { backgroundColor: '#f0adf0', color: '#fff' },
  'House': { backgroundColor: '#ebce13', color: '#fff' },
  'Groove': { backgroundColor: '#dbc327', color: '#fff' },
};

const POSSIBLE_KEYS = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', '5A', '5B', '6A', '6B',
  '7A', '7B', '8A', '8B', '9A', '9B', '10A', '10B', '11A', '11B', '12A', '12B'];

const KEY_COLOR_MAP = {
  '1A': { backgroundColor: '#32EFD5', color: '#000' },
  '1B': { backgroundColor: '#00EBC4', color: '#000' },
  '2A': { backgroundColor: '#66F0A5', color: '#000' },
  '2B': { backgroundColor: '#00EC7E', color: '#000' },
  '3A': { backgroundColor: '#A0F387', color: '#000' },
  '3B': { backgroundColor: '#72F057', color: '#000' },
  '4A': { backgroundColor: '#E6D59C', color: '#000' },
  '4B': { backgroundColor: '#DDC370', color: '#000' },
  '5A': { backgroundColor: '#FFB6A0', color: '#000' },
  '5B': { backgroundColor: '#FF9576', color: '#000' },
  '6A': { backgroundColor: '#FFA5AF', color: '#000' },
  '6B': { backgroundColor: '#FF7C8B', color: '#000' },
  '7A': { backgroundColor: '#FFA0C4', color: '#000' },
  '7B': { backgroundColor: '#FF75AA', color: '#000' },
  '8A': { backgroundColor: '#F4A1DD', color: '#000' },
  '8B': { backgroundColor: '#F176D0', color: '#000' },
  '9A': { backgroundColor: '#DAABF9', color: '#000' },
  '9B': { backgroundColor: '#CA84F9', color: '#000' },
  '10A': { backgroundColor: '#B4C7F9', color: '#000' },
  '10B': { backgroundColor: '#91ADFA', color: '#000' },
  '11A': { backgroundColor: '#79E0F6', color: '#000' },
  '11B': { backgroundColor: '#36D4F5', color: '#000' },
  '12A': { backgroundColor: '#2FEEEC', color: '#000' },
  '12B': { backgroundColor: '#00E9E6', color: '#000' },
};

export { SONG_STYLES_DROPDOWN, SONG_STYLES_COLOR_MAP, POSSIBLE_KEYS, KEY_COLOR_MAP };