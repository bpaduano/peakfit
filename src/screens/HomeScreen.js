import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // Temporary dummy data for posts
  const posts = [
    { id: '1', user: 'John Doe', content: 'Completed a 5-mile run!' },
    { id: '2', user: 'Jane Smith', content: 'Lifted 200 lbs today!' },
    { id: '3', user: 'Mike Johnson', content: 'Yoga session done for the day.' },
  ];

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>{item.user}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Social Feed</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
      />
      <Button 
        title="Go to Profile" 
        onPress={() => navigation.navigate('Profile')} 
        color="#007BFF" 
      />
      <Button 
        title="Go to Workout Log" 
        onPress={() => navigation.navigate('Workout')} 
        color="#28A745" 
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postContent: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default HomeScreen;
//