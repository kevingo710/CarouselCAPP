import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {selectUserName} from '../../store/slices/authSlice';
import {useCarousel} from '../../hooks/useCarousel';
import {CustomCarousel} from '../../components/CustomCarousel/CustomCarousel';
import {PlaceholderCarousel} from '../../components/CustomCarousel/PlaceholderCarousel';

export const DashboardScreen = () => {
  const username = useSelector(selectUserName);
  const {carouselList, isLoadingCarousel} = useCarousel();

  return (
    <ScrollView>
      <Text>Welcome to Dashboard, {username}</Text>
      {isLoadingCarousel ? (
        <PlaceholderCarousel />
      ) : (
        carouselList &&
        carouselList.map((itemCarosuel, index) => {
          return <CustomCarousel key={index} carouselItem={itemCarosuel} />;
        })
      )}
    </ScrollView>
  );
};
