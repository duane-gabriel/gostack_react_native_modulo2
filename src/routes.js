import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Repositories from './pages/Repositories';
import Welcome from './pages/Welcome';

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Repositories,
      },
      {initialRouteName: userLogged ? 'Repositories' : 'Welcome'},
    ),
  );

export default Routes;
