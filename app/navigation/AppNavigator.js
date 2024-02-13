import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="AudioList"
        component={AudioList}
        initialParams={{ icon: "headphones" }}
      />
      <Tab.Screen
        name="Player"
        component={Player}
        initialParams={{ icon: "compact-disc" }}
      />
      <Tab.Screen
        name="PlayList"
        component={PlayList}
        initialParams={{ icon: "play-circle" }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
