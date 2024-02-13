import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import Screen from "./Screen";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MiniCard from "./MiniCard";
import PlayListModal from "./PlayListModel";
import { useNavigation } from "@react-navigation/native";

function SearhBox(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [value, setValue] = useState("");
  const [miniCardData, setMiniCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyBVzetkqAVN7FPE0QPPpnP6_5FIU_5fuQo`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMiniCard(data.items);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingText}>
        <Text style={styles.textContainer}>Search Your Favourite ❤ Song</Text>
      </View>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => fetchData()}
        >
          <FontAwesome name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TextInput
          placeholder="Seach album, song, artist ..."
          placeholderTextColor="#fff"
          selectionColor="cyan"
          value={value}
          onChangeText={(text) => setValue(text)}
          style={styles.input}
          keyboardType="web-search"
        />
      </View>
      <View style={{ height: 420 }}>
        {loading ? <ActivityIndicator size="large" color="cyan" /> : null}
        <FlatList
          style={styles.listContainer}
          data={miniCardData}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setVideoId(item.id.videoId);
                  setModalVisible(true);
                }}
              >
                <MiniCard
                  videoId={item.id.videoId}
                  title={item.snippet.title}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.videoId}
        />
      </View>
      <PlayListModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        videoId={videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    height: "100%",
  },
  headingText: {
    flexDirection: "row",
    height: 36,
    flex: 1,
    borderRadius: 16,
    padding: 20,
    margin: 32,
    alignItems: "center",
  },

  textContainer: {
    color: "#fff",
    fontSize: 35,
    fontStyle: "normal",
  },
  Container: {
    flexDirection: "row",
    backgroundColor: "#323232",
    height: 36,
    flex: 1,
    borderRadius: 16,
    padding: 20,
    margin: 32,
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 225,
    color: "#fff",
  },
  iconContainer: {
    width: 40,
    height: 40,
    paddingTop: 6,
  },
  listContainer: {
    marginTop: 20,
  },
});

export default SearhBox;
