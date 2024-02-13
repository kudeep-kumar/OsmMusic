import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const MiniCard = (props) => {
  return (
    <View
      source
      style={{
        flexDirection: "row",
        margin: 10,
        marginBottom: 0,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#fff",
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          width: Dimensions.get("screen").width,
          color: "#fff",
          marginLeft: 30,
          paddingRight: 70,
          paddingBottom: 10,
        }}
        ellipsizeMode="tail"
        numberOfLines={3}
      >
        {props.title}
        {props.videoId}
      </Text>
    </View>
  );
};

export default MiniCard;
