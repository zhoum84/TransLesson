import { View, Text, StyleSheet, ScrollView } from "react-native";
import Note from "../components/NoteDetails";
import NotesList from "../components/NotesList";
export default NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      <NotesList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    alignItems: "center",
    paddingTop: '11%',
    backgroundColor: 'steelblue',
    paddingBottom: '80%'
},  
  title: {
    fontSize: 36,
    color:"white"
  },
});
