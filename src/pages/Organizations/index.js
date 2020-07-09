import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import OrganizationItem from './OrganizationItem';
import api from '../../services/api';

export default class Repositories extends Component {
  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="building" size={20} color={tintColor} />
    ),
  };

  renderListItem = ({item}) => {
    return <OrganizationItem organization={item} />;
  };

  loadOrganizations = async () => {
    this.setState({refreshing: true});
    const username = await AsyncStorage.getItem('@Githuber:username');
    const {data} = await api.get(`/users/${username}/orgs`);
    this.setState({data, loading: false, refreshing: false});
  };

  async componentDidMount() {
    await this.loadOrganizations();
  }
  renderList = () => {
    const {data, refreshing} = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={this.renderListItem}
        style={{marginBottom: 60}}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Organizações"></Header>
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
