import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { router } from 'expo-router';

const products = [
  {
    id: '1',
    name: 'Camisa Flamengo',
    price: 'R$ 89,90',
    image:
      'https://i.imgur.com/0oE2M89.jpeg',
      description:
    'Camisa oficial do Flamengo com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '2',
    name: 'Camisa Brasil',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/oAz5Vb5.jpeg',
      description:
    'Camisa oficial do Brasil com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '3',
    name: 'Camisa Al Nassar',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/kZLmTr9.jpeg',
      description:
    'Camisa oficial do All Nassar com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '4',
    name: 'Camisa Real Madrid',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/ACwaCgK.jpeg',
      description:
    'Camisa oficial do Real Madrid com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '5',
    name: 'Camisa Santos',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/PDYpo2f.jpeg',
      description:
    'Camisa oficial do Santos com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '6',
    name: 'Camisa Flamengo Branca',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/PE3pPe8.jpeg',
      description:
    'Camisa oficial do Flamengo branca com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
  {
    id: '7',
    name: 'Camisa Portugal',
    price: 'R$ 79,90',
    image:
      'https://i.imgur.com/mqoPwTV.jpeg',
      description:
    'Camisa oficial de Portugal com tecido leve e confortável. Tamanhos: P, M, G e GG',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nexo Sports</Text>

      <Image
  source={{
    uri: 'https://i.imgur.com/Z7yaXzD.png',
  }}
  style={styles.banner}
/>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
  style={styles.card}
  onPress={() =>
    router.push({
      pathname: '/details',
      params: {
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
      },
    })
  }
>
            <Image source={{ uri: item.image }} style={styles.image} />

            <Text style={styles.productName}>{item.name}</Text>

            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 15,
    textAlign: 'center',
  },

  banner: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
});
