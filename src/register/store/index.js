import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to persists a key-value pair in AsyncStorage
const save = async (key, value) => {
  try {
    const stringified = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, stringified);
  } catch (error) {
    console.error(`Error saving key "${key}" to AsyncStorage`, error);
  }
};
// Function to read a value from AsyncStorage based of a Key
const read = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
    // const result = await AsyncStorage.getItem(key);
    // // try {
    //   // Try to parse JSON, if it fails, just return the string
    //   return JSON.parse(result);
    // } catch {
    //   return result; 
    // }
  } catch (error) {
    console.error(`Error reading key "${key}" from AsyncStorage`, error);
    return null;
  }
};

export const store = { save, read };
