import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  baseMargin: 10,
  baseRadius: 3,
  basePadding: 20,
  screenWidth: width < height ? width : height, // É para usar modo retrato ou modo paisagem
  screenHeight: width < height ? height : width, // É para usar modo retrato ou modo paisagem
};
