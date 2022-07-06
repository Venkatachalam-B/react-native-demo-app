import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Reels from '../screens/Reels';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarStyle: {
    height: 50,
    border: 'none',
  },
  tabBarItemStyle: {
    margin: 5,
    borderRadius: 15,
  },
  tabBarShowLabel: false,
  headerSown: false,
};
const Tabs = () => {
  return (
    <Tab.Navigator {...{screenOptions}}>
      <Tab.Screen
        name="upload"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: () => (
        //     <AntDesign name="upload" style={{fontSize: 28}}></AntDesign>
        //   ),
        // }}
      />
      <Tab.Screen
        name="reels"
        component={Reels}
        // options={{
        //   tabBarIcon: () => (
        //     <AntDesign name="instagram" style={{fontSize: 28}}></AntDesign>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        // options={{
        //   tabBarIcon: () => (
        //     <AntDesign name="user" style={{fontSize: 28}}></AntDesign>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
