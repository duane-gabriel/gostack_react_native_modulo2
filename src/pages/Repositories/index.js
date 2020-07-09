import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';
import styles from './styles';
import RepositoryItem from './RepositoryItem';

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };

  renderListItem = ({item}) => {
    return <RepositoryItem repository={item} />;
  };

  loadRepositories = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/repos`);
    this.setState({data, loading: false, refreshing: false});
  };

  async componentDidMount() {
    await this.loadRepositories();
  }
  renderList = () => {
    const {data, refreshing} = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={this.renderListItem}
        style={{marginBottom: 60}}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Repositórios"></Header>
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
