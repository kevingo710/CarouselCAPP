import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import AppRoute from './src/navigators/AppRoute';

import {store} from './src/store/store';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </>
  );
}
