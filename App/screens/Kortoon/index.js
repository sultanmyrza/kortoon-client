import { createStackNavigator } from 'react-navigation';
import KortoonList from './KortoonList';
import KortoonDetail from './KortoonDetail';

const KortoonStackNavigator = createStackNavigator({
  KortoonList: {
    screen: KortoonList,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Kortoon List'
    })
  },
  KortoonDetail: {
    screen: KortoonDetail,
    navigationOptions: ({ navigation, defaultHeader }) => ({
      ...defaultHeader,
      title: 'Kortoon Detail'
    })
  }
});

export default KortoonStackNavigator;
