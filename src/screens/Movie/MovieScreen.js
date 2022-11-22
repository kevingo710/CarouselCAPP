import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';

export const MovieScreen = ({route}) => {
  const movie = route.params;
  const handleOnBuffer = () => {
    return <ActivityIndicator />;
  };
  if (!movie) {
    return <Text>"Video no disponible</Text>;
  }

  return (
    <Video
      source={{uri: movie.videoUrl}}
      onBuffer={handleOnBuffer}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    />
  );
};
