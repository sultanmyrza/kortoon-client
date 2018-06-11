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
      // headerStyle: {
      //   position: 'absolute',
      //   backgroundColor: 'transparent',
      //   zIndex: 100,
      //   top: 0,
      //   left: 0,
      //   right: 0,
      //   borderBottomWidth: 0
      // }
    })
  }
});

export default KortoonStackNavigator;
