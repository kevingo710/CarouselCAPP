import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const ImagePoster = ({imageUrl}) => {
  return (
    <Image
      style={styles.imagePoster}
      source={{
        uri: imageUrl,
      }}
    />
  );
};

const styles = StyleSheet.create({
  imagePoster: {
    width: 200,
    height: 200,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
});
