import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Upload Screen</Text>
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

export default HomeScreen;
