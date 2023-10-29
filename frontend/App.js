import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.jsx'
import RecordScreen from './src/screens/RecordScreen.jsx';
import NotesScreen from './src/screens/NotesScreen.jsx';
import TestScreen from './src/screens/TestScreen.jsx'
import ResultsScreen from './src/screens/ResultsScreen.jsx';
import TransitionScreen from './src/screens/TransitionScreen.jsx';
import LoadScreen from './src/screens/LoadScreen.jsx';
import SingleNoteScreen from './src/screens/SingleNoteScreen.jsx';

import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"    screenOptions={{
    headerShown: false
  }}>
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name="Record" component={RecordScreen}/>
        <Stack.Screen name="Test" component={TestScreen}/>
        <Stack.Screen name="Results" component={ResultsScreen}/>
        <Stack.Screen name="Transition" component={TransitionScreen}/>
        <Stack.Screen name="Load" component={LoadScreen} />
        <Stack.Screen name="SingleNote" component={SingleNoteScreen} />

      </Stack.Navigator>
    </NavigationContainer>  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

