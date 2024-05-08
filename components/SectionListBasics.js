import React from 'react';
import { SectionList, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    fontSize: 16,
    height: 80, // Increased height
    backgroundColor: '#FAD02E', // Yellow background color
    borderRadius: 40, // Circular border radius
    marginVertical: 8, // Added margin for better separation
    marginHorizontal: 16, // Added margin for better separation
  },
});

const SectionListBasics = () => {
  const data = [
    'Silent Mode',
    'Remove Silent Mode',
    'Jillian SS',
    'Jimmy',
    'Joel',
    'John',
    'Julie',
    'Juliee',
    'Jimmyy',
  ];
  const handlePress = async () => {
      // Toggle silent mode
      try {
      
        ToastAndroid.show('Silent Mode Activated', ToastAndroid.SHORT);
      } catch (error) {
        console.error('Failed to set audio mode:', error.message);
        ToastAndroid.show('Failed to activate Silent Mode', ToastAndroid.SHORT);
      }
    }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.item}>
      <Text style={{  fontSize: 20}}>{item}</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={[{ data }]}
        renderItem={renderItem}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default SectionListBasics;
