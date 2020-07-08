import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles/index';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const style = StyleSheet.create({
  container: {
    height: 54,
    paddingTop: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
  },
});

export default style;
