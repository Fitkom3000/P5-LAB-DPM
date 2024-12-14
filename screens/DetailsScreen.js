import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';

const DetailsScreen = () => {
  const openYouTubeLink = () => {
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Button Biasa" onPress={openYouTubeLink} />
    </View>
  );
};

export default DetailsScreen;
