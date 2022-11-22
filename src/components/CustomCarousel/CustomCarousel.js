import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import colors from '../../globalStyles/colors';
import {heightScreen, widthScreen} from '../../utils/screenUtils';
import {MoviePoster} from '../MoviePoster/MoviePoster';

export const CustomCarousel = ({carouselItem}) => {
  return (
    <View style={styles.carouselContainer}>
      <Text style={styles.titleCarousel}>{carouselItem.title}</Text>
      <Carousel
        loop
        width={widthScreen}
        height={heightScreen * 0.45}
        autoPlay
        data={carouselItem.items}
        scrollAnimationDuration={1000}
        renderItem={({item, index}) => {
          return (
            <MoviePoster
              key={index}
              movieItem={item}
              posterType={carouselItem.type}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: colors.darkBlue,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
  },
  titleCarousel: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.orange,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
