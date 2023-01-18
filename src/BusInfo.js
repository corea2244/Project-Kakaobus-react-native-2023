import { Text, View } from "react-native";
import AlarmButton from "./AlarmButton";
import BookmarkButton from "./BookmarkButton";
import { COLOR } from "./color";
import NextBusInfo from "./NextBusInfo";

export default ({
  isBookmarked,
  onPress,
  num,
  directionDescription,
  numColor,
  processedNextBusInfos,
}) => {
  return (
    <View
      style={{ flexDirection: "row", height: 75, backgroundColor: COLOR.WHITE }}
    >
      <View
        style={{
          flex: 0.85,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* 북마크 */}
        <BookmarkButton
          size={20}
          isBookmarked={isBookmarked}
          onPress={onPress}
          style={{ paddingHorizontal: 10 }}
        />

        {/* 버스번호, 방향 */}
        <View style={{ flex: 1 }}>
          <Text style={{ color: numColor, fontSize: 20 }}>{num}</Text>
          <Text style={{ fontSize: 13, color: COLOR.GRAY_3, marginRight: 5 }}>
            {directionDescription}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        {/* M분 S초 / N번째 전 / 여유 */}
        <View style={{ flex: 1 }}>
          {processedNextBusInfos.map((info, index) => (
            <NextBusInfo
              key={`next-bus-info-${index}`}
              hasInfo={info.hasInfo}
              remainedTimeText={info.remainedTimeText}
              numOfRemainedStops={info.numOfRemainedStops}
              seatStatusText={info.seatStatusText}
            />
          ))}
          {/* <NextBusInfo
            hasInfo={true}
            remainedTimeText={"8분 0초"}
            numOfRemainedStops={5}
            seatStatusText={"여유"}
          />
          <NextBusInfo hasInfo={false} remainedTimeText="도착 정보 없음" /> */}
        </View>

        {/* 알람 아이콘 */}
        <AlarmButton onPress={null} style={{ paddingHorizontal: 15 }} />
      </View>
    </View>
  );
};
