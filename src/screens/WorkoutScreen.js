import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const WorkoutScreen = () => {
  const [exercise, setExercise] = useState('');
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = () => {
    if (exercise.trim()) {
      setWorkouts([...workouts, { id: Date.now().toString(), name: exercise }]);
      setExercise('');
    }
  };

  const removeWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const renderWorkout = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutName}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeWorkout(item.id)}>
        <Text style={styles.removeButton}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Record Your Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter exercise"
        value={exercise}
        onChangeText={setExercise}
      />
      <Button title="Add Exercise" onPress={addWorkout} />
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={renderWorkout}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  workoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  workoutName: {
    fontSize: 16,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default WorkoutScreen;
