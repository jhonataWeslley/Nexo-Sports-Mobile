import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Meu Perfil 👤
      </Text>

      <Image
        source={{
          uri: 'https://i.imgur.com/evSnytF.jpeg',
        }}
        style={styles.profileImage}
      />

      <Text style={styles.info}>
        Nome: Cristiano Ronaldo
      </Text>

      <Text style={styles.info}>
        E-mail: cristianoronaldo07@email.com
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.buttonText}>
          Sair
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 25,
  },

  info: {
    fontSize: 20,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});