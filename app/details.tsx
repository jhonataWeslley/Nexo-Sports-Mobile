import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  router,
  useLocalSearchParams,
} from 'expo-router';

export default function DetailsScreen() {

  const {
    name,
    price,
    image,
    description,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Image
        source={{
          uri: image as string,
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {name}
      </Text>

      <Text style={styles.price}>
        {price}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
  router.push({
    pathname: '/cart',
    params: {
      name: name as string,
      price: price as string,
    },
  })
}

      >
        <Text style={styles.buttonText}>
          Adicionar ao Carrinho
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
  },

  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },

  price: {
    fontSize: 24,
    color: 'green',
    marginTop: 10,
  },

  description: {
    fontSize: 18,
    marginTop: 20,
    lineHeight: 28,
  },

  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 12,
    marginTop: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});