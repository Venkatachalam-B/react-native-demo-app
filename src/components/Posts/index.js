import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import Tom from '../../utils/Tom.mp4';
const Post = () => {
  return (
    <Video
      source={Tom}
      resizeMode="cover"
      style={StyleSheet.absoluteFill}></Video>
  );
};

export default Post;
