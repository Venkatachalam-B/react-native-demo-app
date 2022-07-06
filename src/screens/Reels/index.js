import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Post from '../../components/Posts';
const Reels = () => {
  return (
    <View style={styles.root}>
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    padding: 20,
  },
});

export default Reels;
