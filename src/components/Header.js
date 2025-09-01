import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={require('../../assets/favicon.png')} style={styles.logo} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Filmando</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  logo: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default Header;