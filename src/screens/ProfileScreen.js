import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('Fitness enthusiast');
  const [profilePic, setProfilePic] = useState(null);

  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  const saveProfile = () => {
    alert('Profile saved!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {profilePic ? (
          <Image source={{ uri: profilePic }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Tap to add profile picture</Text>
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.bioInput]}
        placeholder="Write a short bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <Button title="Save Profile" onPress={saveProfile} />
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
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imagePlaceholder: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  bioInput: {
    height: 60,
    textAlignVertical: 'top',
  },
});

export default ProfileScreen;
