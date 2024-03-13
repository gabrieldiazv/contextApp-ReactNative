import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        onPress={() => {
          useProfileStore.setState({name: 'Gabomon'});
        }}
        style={styles.primaryButton}>
        <Text>Cambiar nombre</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          useProfileStore.setState({email: 'Gabomon@Profile'});
        }}
        style={styles.primaryButton}>
        <Text>Cambiar email</Text>
      </Pressable>
    </View>
  );
};
