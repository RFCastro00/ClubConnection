import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/ClubConnection.css';

const App = () => {
  const [connectMethod, setConnectMethod] = useState('');
  const [number, setNumber] = useState('');
  const [saved, setSaved] = useState(false); // Flag for save confirmation
  const [savedConnectMethod, setSavedConnectMethod] = useState(''); // State for saved connect method
  const [savedNumber, setSavedNumber] = useState(''); // State for saved number

  const handleSave = () => {
    // Implement your logic to save data (e.g., API call, local storage)
    console.log(`Saving connect method: ${connectMethod}, number: ${number}`); // Replace with actual saving logic
    setSavedConnectMethod(connectMethod); // Save entered connect method
    setSavedNumber(number); // Save entered number
    setSaved(true); // Set flag for successful save
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Club Connection</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Connect Method"
        onChangeText={text => setConnectMethod(text)}
        value={connectMethod}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Number"
        keyboardType="numeric" // Set keyboard to accept numbers
        onChangeText={text => setNumber(text)}
        value={number}
      />
      <Button
        title="Save"
        onPress={handleSave}
        disabled={!connectMethod || !number}
      />
      {saved && (
        <View style={styles.successMessage}>
          <Text>Data saved successfully!</Text>
          <Text>Saved Connect Method: {savedConnectMethod}</Text>
          <Text>Saved Number: {savedNumber}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
