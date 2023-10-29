import { View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import Note from "../components/NoteDetails";
import NotesList from "../components/NotesList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native"

export default NotesScreen = () => {
  navigation = useNavigation();
  const [list, setList] = useState([]);
  useEffect(() =>{
    call();
    console.log(list);

  },[])


  const call = async () =>{
    const response = await axios.get('https://2e18-129-59-122-77.ngrok-free.app/transcripts/all')
    setList((response.data));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      <FlatList
        vertical
        data={list}
        keyExtractor={(data) => data.key }
        renderItem={({item}) => {
            return (
                    <Text style={{color:"white", fontSize:18}}>{item}</Text>
                ) 
        }}

        />
        <TouchableOpacity onPress={()=> navigation.navigate('Translate')}><Text style={styles.signup}>Translate Text</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Text style={styles.signup}>Return to Home</Text></TouchableOpacity>
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
  signup: {
      backgroundColor: 'white',
      color: 'black',
      width: "65%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      //marginLeft: '18%',
      padding: "2%",
      fontSize:  33,
      marginBottom: '5%',
      //marginTop: '70%'
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOpacity: 0.8,
      elevation: 6,
      shadowRadius: 15 ,
      shadowOffset : { width: 1, height: 13},
  
    }
});
