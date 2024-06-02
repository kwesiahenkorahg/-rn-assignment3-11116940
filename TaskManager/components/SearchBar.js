import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
});

export default SearchBar;
