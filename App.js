import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

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
    <View style={{padding: 20}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
        }}>
        Club Connection
      </Text>
      <TextInput
        style={{marginVertical: 10, borderWidth: 1, padding: 5}}
        placeholder="Enter Connect Method"
        onChangeText={text => setConnectMethod(text)}
        value={connectMethod}
      />
      <TextInput
        style={{marginVertical: 10, borderWidth: 1, padding: 5}}
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
        <View style={{marginTop: 10}}>
          <Text style={{color: 'green'}}>Data saved successfully!</Text>
          <Text>Saved Connect Method: {savedConnectMethod}</Text>
          <Text>Saved Number: {savedNumber}</Text>
        </View>
      )}
    </View>
  );
};

export default App;
