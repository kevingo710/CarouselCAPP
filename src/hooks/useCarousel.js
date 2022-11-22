import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {toolboxApi} from '../api/toolboxApi';
import {setSignOut} from '../store/slices/authSlice';
import {basePath, endpointData} from '../utils/constants';

export const useCarousel = () => {
  const [carouselList, setCarouselList] = useState([]);
  const [isLoadingCarousel, setIsLoadingCarousel] = useState(true);

  const dispatch = useDispatch();

  const getDataMovies = async () => {
    setIsLoadingCarousel(true);
    try {
      const {data} = await toolboxApi.get(basePath + endpointData);

      setCarouselList(data);
      setIsLoadingCarousel(false);
    } catch (err) {
      if (!err?.response?.status) {
        console.log('no controlado');
      }
      console.log('---->', err.response);
      if (err?.response?.status === 401) {
        Alert.alert('Sesion expired', 'Please retry to login', [
          {
            text: 'Cancel',
            onPress: () => {},
            style: 'cancel',
          },
          {text: 'OK', onPress: () => dispatch(setSignOut())},
        ]);
      }
      setIsLoadingCarousel(false);
    }
  };

  useEffect(() => {
    getDataMovies();
  }, []);

  return {
    isLoadingCarousel,
    carouselList,
  };
};
