import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {toolboxApi} from '../../api/toolboxApi';
import colors from '../../globalStyles/colors';
import {MMKV} from '../../storage/mmkv';
import {setSignIn} from '../../store/slices/authSlice';
import {
  basePath,
  endpointAuth,
  requestBodyToolbox,
} from '../../utils/constants';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const getLoginToken = async () => {
    try {
      const {data} = await toolboxApi.post(
        basePath + endpointAuth,
        requestBodyToolbox,
      );
      await MMKV.setStringAsync('tokenApi', data.token);
    } catch (err) {
      console.warn({err});
    }
  };

  const handleLogin = () => {
    const user = {
      isLoggedIn: true,
      email: 'kgracia@test.com',
      userName: 'KevinGracia',
    };
    getLoginToken();
    dispatch(setSignIn(user));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Login Screen</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.text}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  titleScreen: {marginBottom: 20, fontSize: 15},
});
