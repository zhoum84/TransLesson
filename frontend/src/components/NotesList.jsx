import { Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import NoteDetails from "./NoteDetails";
import searchNote from "../hooks/searchNote";

export default NotesList = ({ name, transcript }) => {
  const [noteList, setNoteList] = useState({});
  const [searchAPI, results, errorMessage] = searchNote();



  useEffect(()=>{

    setNoteList(results);
    console.log(noteList)
  },[searchAPI])
  return (
    <View style={styles.container}>
      
        
        {noteList.empty ? <Text>Loading</Text> : <FlatList
        vertical
        data={(Object.values((noteList)))}
        keyExtractor={(noteList) => noteList.name }
        renderItem={({item}) => {
            console.log(item)
            return (
                <NoteDetails result={item}/>
                // <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', {id: item.id})} >
                // </TouchableOpacity>
                ) 
        }}

        />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: "90%",
    borderWidth: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: "1%",
    marginLeft: "5%",
  },
  text: {
    marginLeft: "5%",
  },
});
