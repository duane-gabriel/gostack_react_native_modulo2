import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
// import { Container } from './styles';
// AsyncStorage.clear();

const Repositories = () => {
  return (
    <View>
      <Header title="Repositórios"></Header>
    </View>
  );
};

export default Repositories;
