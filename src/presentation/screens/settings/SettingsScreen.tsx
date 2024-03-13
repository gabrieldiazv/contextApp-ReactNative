import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/counter-store';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const {count, incrementBy, decrementBy} = useCounterStore(state => ({
    count: state.count,
    incrementBy: state.incrementBy,
    decrementBy: state.decrementBy,
  }));

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Counter: ${count}`,
    });
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>
      <Pressable
        onPress={() => {
          incrementBy(1);
        }}
        style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          decrementBy(1);
        }}
        style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
