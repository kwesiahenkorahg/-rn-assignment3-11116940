import React from 'react';
import { ScrollView, View, StyleSheet, FlatList, Text } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryCard from './components/CategoryCard';
import TaskCard from './components/TaskCard';

const categories = [
  { id: '1', title: 'Exercise', tasks: 12, imageUri: require('./assets/exercise.png') },
  { id: '2', title: 'Study', tasks: 12, imageUri: require('./assets/study.png') },
  { id: '3', title: 'Code', tasks: 10, imageUri: require('./assets/code.png') },
  { id: '4', title: 'Cook', tasks: 8, imageUri: require('./assets/cook.png') },
  { id: '5', title: 'Read', tasks: 15, imageUri: require('./assets/read.png') },
  { id: '6', title: 'Travel', tasks: 5, imageUri: require('./assets/travel.png') },
  { id: '7', title: 'Meditate', tasks: 7, imageUri: require('./assets/meditate.png') },
  { id: '8', title: 'Play', tasks: 6, imageUri: require('./assets/play.png') },
];

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Reading a Book' },
  { id: '5', task: 'Learning React Native' },
  { id: '6', task: 'Cooking Dinner' },
  { id: '7', task: 'Going for a Run' },
  { id: '8', task: 'Writing Blog Post' },
  { id: '9', task: 'Travel Planning' },
  { id: '10', task: 'Yoga' },
  { id: '11', task: 'Meditation' },
  { id: '12', task: 'Project Meeting' },
  { id: '13', task: 'Client Call' },
  { id: '14', task: 'Shopping' },
  { id: '15', task: 'Movie Night' },
];

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryCard
              title={item.title}
              tasks={item.tasks}
              imageUri={item.imageUri}
            />
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.ongoingTasksContainer}>
        <Text style={styles.sectionTitle}>Ongoing Task</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskCard task={item.task} />}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
  categoriesContainer: {
    padding: 8,
  },
  ongoingTasksContainer: {
    padding: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default MainScreen;
