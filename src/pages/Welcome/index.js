import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import style from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
    loading: false,
    error: false,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;
    this.setState({loading: true});
    try {
      await this.checkUserExist(username);
      await this.saveUser(username);
      navigation.navigate('User');
    } catch (err) {
      this.setState({loading: false, error: true});
    }
  };

  checkUserExist = async (username) => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  render() {
    const {username} = this.state;
    return (
      <View style={style.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Text style={style.title}>Seja bem vindo</Text>
        <Text style={style.text}>
          Para continuar, adicione o seu usuário do github
        </Text>
        {this.state.error && (
          <Text style={style.error}>Usuário inexistente</Text>
        )}
        <View style={style.form}>
          <TextInput
            style={style.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={(text) => this.setState({username: text})}
          />
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              this.signIn();
            }}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={style.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
