import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {heightScreen, widthScreen} from '../../utils/screenUtils';

export const PlaceholderCarousel = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.container}>
        <View style={styles.carouselLarge} />
        <View style={styles.carouselTitleLarge} />
      </View>
      <View style={styles.container}>
        <View style={styles.carouselFit} />
        <View style={styles.carouselTitleFit} />
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselFit: {width: widthScreen * 0.7, height: heightScreen * 0.3},
  carouselTitleFit: {width: widthScreen * 0.7, height: heightScreen * 0.3},
  carouselLarge: {width: widthScreen * 0.92, height: heightScreen * 0.3},
  carouselTitleLarge: {
    width: widthScreen * 0.92,
    height: heightScreen * 0.05,
    marginVertical: 10,
  },
});
