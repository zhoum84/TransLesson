import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import searchByIndex from "../hooks/searchByIndex";
import { useEffect } from "react";
export default SingleNoteScreen = ({route, navigation}) => {
    //const navigation = useNavigation();
    const index = route.params;
    const [indexAPI, results, errorMessage] = searchByIndex();
    console.log(API_KEY);

    useEffect(() =>{
      indexAPI(index.index)
      console.log(results);
    },[])

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{results.name}</Text>
    <Text style={styles.subtitle}>{results.date}</Text>
    <Ionicons name="copy-outline"  size={32} />
    <Text style={styles.fields}>{results.text}</Text>

    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.signup} >
            Back to Notes
        </Text>
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      fontSize: 20,
      paddingLeft: '5%',
      paddingRight: '5%'

    },
    title:{
        fontSize: 40,
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '3%'
    },
    subtitle:{
        fontSize: 25,
        textAlign: 'center',
        color: 'gray',
        marginBottom: '7%'
    },
    fields:{
        fontSize: 18,
    },
    signup: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "65%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      //marginLeft: '18%',
      padding: "2%",
      fontSize:  33,
      marginBottom: 5,
      bottom: -350,
      borderWidth:1
      //marginTop: '70%'

    },

   
  });