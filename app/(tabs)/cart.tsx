import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import { useState } from 'react';

import {
  useLocalSearchParams,
  router,
} from 'expo-router';

export default function CartScreen() {

  const { name, price } = useLocalSearchParams();

  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: name as string,
      price: price as string,
    },
  ]);

  function handleClearCart() {

    setCartItems([]);

    Alert.alert(
      'Carrinho',
      'Carrinho limpo com sucesso!'
    );
  }

  function handleBuy() {

    Alert.alert(
      'Compra realizada',
      'Seu pedido foi enviado com sucesso!'
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Carrinho 🛒
      </Text>

      {cartItems.length === 0 ? (

        <Text style={styles.empty}>
          Seu carrinho está vazio.
        </Text>

      ) : (

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>

              <Text style={styles.product}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

            </View>
          )}
        />

      )}

      <TouchableOpacity
        style={styles.clearButton}
        onPress={handleClearCart}
      >
        <Text style={styles.buttonText}>
          Limpar Carrinho
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buyButton}
        onPress={handleBuy}
      >
        <Text style={styles.buttonText}>
          Finalizar Compra
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/(tabs)')}
      >
        <Text style={styles.buttonText}>
          Continuar Comprando
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

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },

  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#666',
  },

  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  product: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },

  clearButton: {
    backgroundColor: '#cc0000',
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  buyButton: {
    backgroundColor: 'green',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },

  continueButton: {
    backgroundColor: '#1e90ff',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});