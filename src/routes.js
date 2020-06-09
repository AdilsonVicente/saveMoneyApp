/* eslint-disable prettier/prettier */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Welcome from './Pages/Welcome';
import Main from './Pages/Main';
import NewEntry from './Pages/NewEntry';
import Report from './Pages/Report';

import Loading from './Pages/Loading';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      Welcome,
      Main,
      NewEntry,
      Report,
    },
    {
      initialRouteName: 'Loading',
      backBehavior: 'history',
    },
  ),
);

export default Routes;
