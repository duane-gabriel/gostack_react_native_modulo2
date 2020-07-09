import React from 'react';
import {View} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Organizations from '../Organizations';
import Repositories from '../Repositories';
import {colors} from '../../styles/index';

const User = createMaterialBottomTabNavigator(
  {
    Repositórios: {screen: Repositories},
    Organizações: {screen: Organizations},
  },
  {
    initialRouteName: 'Repositórios',
    order: ['Repositórios', 'Organizações'],
    labeled: false,
    tabBarIcon: {},
    barStyle: {
      backgroundColor: colors.secondary,
      // height: 60,
      // justifyContent: 'center',
      // paddingBottom: 35,
      fontSize: 25,
    },
    tabStyle: {
      fontSize: 18,
    },
    inactiveColor: colors.whiteTransparent,
    activeColor: colors.white,
  },
);

export default User;
