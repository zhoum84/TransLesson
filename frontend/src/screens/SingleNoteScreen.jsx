import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import searchByIndex from "../hooks/searchByIndex";
import { useState, useEffect } from "react";
import ShareExample from "../components/ShareButton";
import axios from "axios";

export default SingleNoteScreen = ({route}) => {
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const [indexAPI, results, errorMessage] = searchByIndex();
    const [language, setLanguage] = useEffect('en');

    useEffect(() =>{
      indexAPI(index.index)
    },[index])

    useEffect(()=>{
      setIndex(route.params);
    },[])
    

    const translate = async() =>{
      // const json = {
      //    "text": "lol"
      // }
      // console.log("lol")
      // try {
      //   const response = await backend.post(`/translate?language=${language}`, json, {
      //     headers: {
      //       // Overwrite Axios's automatically set Content-Type
      //       'Content-Type': 'application/json'

      //     }
      //   });
      //   console.log(response.data);
  
      // } catch (err) {
      //   console.log(err);
      // }
  
      // console.log(result.text)
    }

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{results.name}</Text>
    <Text style={styles.subtitle}>{results.date}</Text>
    <TouchableOpacity>
      <Ionicons name="copy-outline"  size={32} style={{color:'white'}}/>
    </TouchableOpacity>
    <ShareExample date={results.date} text={results.text}/>
    <Text style={styles.fields}>{results.text}</Text>
    {/* <TouchableOpacity onPress={() => translate()}>
      <Text>Translate</Text>
    </TouchableOpacity> */}

    <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
        <Text style={styles.signup} navigation={navigation} >
            Back to Notes
        </Text>
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue',
      alignItems: 'center',
      fontSize: 20,
      paddingLeft: '5%',
      paddingRight: '5%',
      paddingTop: '4%'

    },
    title:{
        fontSize: 40,
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '3%',
        color:'white',
    },
    subtitle:{
        fontSize: 25,
        textAlign: 'center',
        color: 'lightgray',
        marginBottom: '7%'
    },
    fields:{
        fontSize: 18,
        color:'white'
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
      marginBottom: 5,
      bottom: -420,
      borderWidth:1
      //marginTop: '70%'

    },

   
  });