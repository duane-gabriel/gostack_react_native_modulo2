import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar} from 'react-native';

import style from './styles';

const Welcome = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Text style={style.title}>Seja bem vindo</Text>
      <Text style={style.text}>
        Para continuar, adicione o seu usuário do github
      </Text>
      <View style={style.form}>
        <TextInput
          style={style.input}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={style.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
