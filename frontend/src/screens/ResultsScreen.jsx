import { View,Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import postNotes from "../hooks/postNotes";
export default ResultsScreen = ({route, navigation}) => {

    if(route.params)
        var {name, transcript, language, date } = route.params;
    const [postAPI, results, errorMessage] = postNotes();

    
  return (
    <View style={styles.container}>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}} selectable={true}>Title</Text>: {name}</Text>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}}>Language</Text>: {language}</Text>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}}>Date</Text>: {date}</Text>
        <Text style={styles.fields}><Text style={{fontWeight: 'bold'}}>Text</Text>: "{transcript}"</Text>

    <TouchableOpacity>
        <Text style={styles.submit} onPress={() => postAPI(name, date, transcript)}>
            Upload Notes
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
    fields:{
        fontSize: 30,
        marginTop: '5%'
    },
    submit: {
        backgroundColor: 'steelblue',
        color: 'whitesmoke',
        width: "65%",
        borderRadius: 25,
        borderWidth:1,
        textAlign: 'center',
        fontWeight: 'bold',
        //marginLeft: '18%',
        padding: "2%",
        fontSize: 33,
        marginBottom: 5
        //marginTop: '70%'

      }
  });