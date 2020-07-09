import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Repositories from './pages/Repositories';
import Welcome from './pages/Welcome';
import Organizations from './pages/Organizations';
import User from './pages/User';

// const Tab = createBottomTabNavigator();

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User,
      },
      {initialRouteName: userLogged ? 'User' : 'Welcome'},
    ),
  );

export default Routes;
