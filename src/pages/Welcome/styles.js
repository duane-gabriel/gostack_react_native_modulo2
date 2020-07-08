import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontWeight: 'bold',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    height: 44,
  },
  button: {
    backgroundColor: colors.primary,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: metrics.baseRadius,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default style;
