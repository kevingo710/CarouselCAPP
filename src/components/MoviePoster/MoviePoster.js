import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {heightScreen, widthScreen} from '../../utils/screenUtils';
import {ImagePoster} from './ImagePoster';

export const MoviePoster = ({movieItem, posterType}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Movie', movieItem)}
      style={styles(posterType).posterContainer}>
      <ImagePoster imageUrl={movieItem?.imageUrl?.replace('http', 'https')} />

      <Text style={styles().titlePoster}>{movieItem.title}</Text>
    </TouchableOpacity>
  );
};

const styles = posterType =>
  StyleSheet.create({
    posterContainer: {
      alignSelf: 'center',
      borderRadius: 18,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'gray',
      width: widthScreen * (posterType === 'poster' ? 0.6 : 0.8),
      marginHorizontal: posterType === 'poster' ? 60 : 0,
      height: heightScreen * (posterType === 'poster' ? 0.42 : 0.3),
    },
    imagePoster: {
      width: 200,
      height: 200,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
    },
    titlePoster: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
    },
  });
