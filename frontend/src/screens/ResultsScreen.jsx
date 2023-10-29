import { View,Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import postNotes from "../hooks/postNotes";
export default ResultsScreen = ({route, navigation}) => {

    if(route.params)
        var {name, transcript, language, date } = route.params;
    const [postAPI, results, errorMessage] = postNotes();

    const handlePress = () =>{
      postAPI(name, date, transcript)
      navigation.navigate('Transition')
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}} selectable={true}>Title</Text>: {name}</Text>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}}>Language</Text>: {language}</Text>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}}>Date</Text>: {date}</Text>
        <Text style={styles.textContainer}><Text style={{fontWeight: 'bold'}}>Text</Text>: "{transcript}"</Text>

    <TouchableOpacity>
        <Text style={styles.submit} onPress={() => handlePress()}>
            Upload Notes
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
      paddingTop: '15%',
      
    },
    fields:{
        fontSize: 30,
        marginTop: '5%',
        color: "white"

    },
    submit: {
        backgroundColor: 'white',
        color: 'green',
        width: "65%",
        borderRadius: 25,
        borderWidth:1,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '18%',
        padding: "2%",
        fontSize: 33,
        marginBottom: '10%'
        //marginTop: '70%'

      },
      textContainer: {
        height: 100,
        alignItems: "stretch",
        justifyContent: 'flex-start',
        color: 'white',
        alignItems:"flex-start",
        fontSize:24,
        flex: 1,
        flexWrap: "wrap",
        marginLeft: "3%",
        paddingLeft: "3%",
        marginRight: "3%",
        borderWidth: 1,
        marginTop: '2%',
        marginBottom: '1%',
        borderColor: 'white'
      },
  });