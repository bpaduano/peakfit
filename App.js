import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen'; // Import ProfileScreen
import WorkoutScreen from './src/screens/WorkoutScreen'; // Add this import



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'My Profile' }} 
        />
        <Stack.Screen 
          name="Workout" 
          component={WorkoutScreen} 
          options={{ title: 'Workout Log' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
