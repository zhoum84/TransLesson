import { Text, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import {useNavigation } from "@react-navigation/native"
import NoteDetails from "./NoteDetails";
import searchNote from "../hooks/searchNote";

export default NotesList = ({  }) => {
  const [noteList, setNoteList] = useState({});
  const [searchAPI, results, errorMessage] = searchNote();

  const navigation = useNavigation();
  const data = Object.keys(noteList).map(key => ({
    key,
    ...noteList[key]
}));

  useEffect(()=>{
    
    setNoteList(results);
  },[searchAPI])
  return (
    <View style={styles.container}>
      
        
        {noteList.empty ? <Text>Loading</Text> : <FlatList
        vertical
        data={data}
        keyExtractor={(data) => data.key }
        renderItem={({item}) => {
            return (
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SingleNote', {index: item.key})} >
                    <NoteDetails result={item} navigation={navigation}/>
                </TouchableOpacity>
                ) 
        }}

        />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "90%",
    height: "90%",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center',
    color:'white'
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
  button:{
    marginTop: "1%",
    
  }
});
