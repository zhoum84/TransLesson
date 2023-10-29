import { View,Text, StyleSheet, ScrollView } from "react-native";
import Note from "../components/NoteDetails";
import NotesList from "../components/NotesList";
export default NotesScreen = () => {
  return (
    <View><Text>Place to View Notes</Text>
      <NotesList/>
      <Note name="test" transcript="some random notes"/>
    </View>
  )
}