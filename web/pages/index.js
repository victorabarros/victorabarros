import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IndexPage() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.title}>Victor Barros' web site</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: 'auto',
    maxWidth: 500,
    padding: 20
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginTop: '1em',
    textAlign: 'center'
  },
});
