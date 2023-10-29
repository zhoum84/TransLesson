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
  container: { alignItems: "center" },
  title: {
    fontSize: 36,
  },
});
