import { View, Text } from "react-native";
import SubmitButton from "../common/CustomButton/CustomButton";
import * as DB from '../../database/database';
import { SIZES } from "../../constants";

export default function Storage() {
  const handleExportStorage = async () => {
    console.log('Exporting storage');
    DB.exportDb();
  };

  return (
    <View style={{ paddingHorizontal: SIZES.small }}>
      <Text>Storage screen</Text>
      <SubmitButton label="Export storage" handlePress={handleExportStorage} />
    </View>
  );
}