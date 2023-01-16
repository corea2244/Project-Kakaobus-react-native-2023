import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BusInfo from "./src/BusInfo";
import { COLOR } from "./src/color";

export default function App() {
  return (
    <View style={styles.container}>
      <BusInfo
        isBookmarked={true}
        onPress={null}
        num={146}
        directionDescription={"강남역.강남역사거리"}
        numColor={COLOR.BUS_B}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
