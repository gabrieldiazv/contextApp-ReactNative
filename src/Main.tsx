import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './navigators/BottomTab';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};
