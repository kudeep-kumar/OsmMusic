import React, { useState, useCallback, useRef } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import color from "../misc/color";
import YoutubePlayer from "react-native-youtube-iframe";
import { FontAwesome5 } from "@expo/vector-icons";
const PlayListModal = ({ visible, onClose, videoId }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <YoutubePlayer
            height={10}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
          />
          <TouchableOpacity
            onPress={togglePlaying}
            style={styles.iconContainer}
          >
            {playing ? (
              <FontAwesome5 name="pause-circle" size={125} color="#fff" />
            ) : (
              <FontAwesome5 name="play-circle" size={125} color="#fff" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[StyleSheet.absoluteFillObject, styles.modalBG]} />
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 10,
  },
  input: {
    width: width - 40,
    borderBottomColor: color.ACTIVE_BG,
    fontSize: 18,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  modalBG: {
    backgroundColor: color.MODAL_BG,
    zIndex: -1,
  },
  iconContainer: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default PlayListModal;
