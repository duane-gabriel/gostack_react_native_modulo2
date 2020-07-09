import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles';

const style = StyleSheet.create({
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default style;
