import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLOR } from "./color";
import { useState } from "react";

export default ({ isBookmarked: isBookmarkedProp, onPress, style, size }) => {
  const [isBookmarked, setIsBookmarked] = useState(isBookmarkedProp);

  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        setIsBookmarked(!isBookmarked);
      }}
    >
      <Ionicons
        name="star"
        size={size}
        color={isBookmarked ? COLOR.YELLOW : COLOR.GRAY_1}
      />
    </TouchableOpacity>
  );
};
