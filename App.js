import dayjs from "dayjs";
import { SectionList, StyleSheet, Text, View } from "react-native";
import {
  getStatusBarHeight,
  getBottomSpace,
} from "react-native-iphone-x-helper";
import BusInfo from "./src/BusInfo";
import {
  busStop,
  getBusNumColorByType,
  getSections,
  getRemainedTimeText,
  getSeatStatusText,
} from "./src/data";

const sections = getSections(busStop.buses);
const now = dayjs();

const renderItem = ({ item: bus }) => {
  const numColor = getBusNumColorByType(bus.type);
  /**
   * Start
   */
  // undefined ?? null -> null
  // { ... } ?? null -> { ... }
  const firstNextBusInfo = bus.nextBusInfos?.[0] ?? null;
  const secondNextBusInfo = bus.nextBusInfos?.[1] ?? null;
  const newNextBusInfos =
    !firstNextBusInfo && !secondNextBusInfo
      ? [null]
      : [firstNextBusInfo, secondNextBusInfo];

  // if (bus.num === 2000) {
  //   console.log(bus.num, 'newNextBusInfos', newNextBusInfos); // TODO: 확인
  // }

  const processedNextBusInfos = newNextBusInfos.map((info) => {
    if (!info)
      return {
        hasInfo: false,
        remainedTimeText: "도착 정보 없음",
      };

    const { arrivalTime, numOfRemainedStops, numOfPassengers } = info;
    const remainedTimeText = getRemainedTimeText(now, arrivalTime);
    const seatStatusText = getSeatStatusText(bus.type, numOfPassengers);
    return {
      hasInfo: true,
      remainedTimeText,
      numOfRemainedStops,
      seatStatusText,
    };
  });
  /**
   * End
   */
  return (
    <BusInfo
      isBookmarked={bus.isBookmarked}
      onPress={null}
      num={bus.num}
      directionDescription={bus.directionDescription}
      numColor={numColor}
      processedNextBusInfos={processedNextBusInfos}
    />
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        style={{ flex: 1, width: "100%" }}
        sections={sections}
        renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        renderItem={renderItem}
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
    paddingTop: getStatusBarHeight(),
  },
});
