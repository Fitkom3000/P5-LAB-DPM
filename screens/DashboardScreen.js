import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Button, Icon, Avatar } from 'react-native-elements';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          size="large"
          rounded
          source={{ uri: 'https://static.wikia.nocookie.net/0185a0bd-753d-4253-95ae-40a8bdb874d0' }}
        />
        <Text style={styles.headerText}>Welcome, Wagnyu!</Text>
      </View>
      <Card>
        <Card.Title>Overview</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Lihat Detail</Text>
        <Button
          title=" View Details"
          icon={<Icon name="info" type="feather" color="#ffffff" />}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('Details')}
        />
      </Card>
      <Card>
        <Card.Title>Profile</Card.Title>
        <Card.Divider />
        <Text style={styles.cardText}>Cek Foto Profil.</Text>
        <Button
          title=" Go to Profile"
          icon={<Icon name="user" type="feather" color="#ffffff" />}
          buttonStyle={styles.buttonStyle}
          onPress={() => navigation.navigate('Profile')}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardText: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
});

export default DashboardScreen;
