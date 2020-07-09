import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import styles from './styles';
const OrganizationItem = ({organization}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: organization.avatar_url}} />
      <Text style={styles.title}>{organization.login}</Text>
    </View>
  );
};

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;
