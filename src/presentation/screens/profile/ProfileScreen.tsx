import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
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
      <Pressable
        onPress={() => {
          changeProfile('John Doe', 'john.doe@gmail.com');
        }}
        style={styles.primaryButton}>
        <Text>regresar a joe</Text>
      </Pressable>
    </View>
  );
};
