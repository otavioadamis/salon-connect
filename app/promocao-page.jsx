import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const Promocoes = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.promoBox}>
          <Text style={styles.title}>Promoções Semanais</Text>

          <View style={styles.promoCard}>
            <Image
              style={styles.promoImage}
              source={{ uri: 'https://via.placeholder.com/300x150.png?text=Promo+1' }}
            />
            <Text style={styles.promoText}>Promoção 1</Text>
          </View>

          <View style={styles.promoCard}>
            <Image
              style={styles.promoImage}
              source={{ uri: 'https://via.placeholder.com/300x150.png?text=Promo+2' }}
            />
            <Text style={styles.promoText}>Promoção 2</Text>
          </View>

          <View style={styles.promoCard}>
            <Image
              style={styles.promoImage}
              source={{ uri: 'https://via.placeholder.com/300x150.png?text=Promo+3' }}
            />
            <Text style={styles.promoText}>Promoção 3</Text>
          </View>

          <Link href="/" style={styles.backText}>
            Voltar para o Início
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Promocoes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  promoBox: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  promoCard: {
    backgroundColor: '#c81c1c',
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 10,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backText: {
    color: '#1a73e8',
    marginTop: 20,
    fontSize: 16,
  },
});
