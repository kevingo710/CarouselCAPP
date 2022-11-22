import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DashboardScreen} from '../screens/Dashboard/DashboardScreen';
import {AccountScreen} from '../screens/Account/AccountScreen';
import {MovieScreen} from '../screens/Movie/MovieScreen';
import {Pressable, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignOut} from '../store/slices/authSlice';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          headerRight: props => (
            <Pressable
              android_ripple={{
                color: '#666666',
                foreground: true,
                borderless: true,
              }}
              onPress={() => dispatch(setSignOut())}>
              <Text>Logout</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="Movie" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
