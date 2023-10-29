import { View,Text, StyleSheet, ScrollView } from "react-native";

export default ResultsScreen = ({route, navigation}) => {
    const {transcript, language, date } = route.params;

  return (
    <View style={styles.container}>
        <Text>Language: {language}</Text>
        <Text>Date: {date}</Text>
        <Text>Text: {transcript}</Text>
        <Text></Text>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      
    },
    title:{
        fontSize: 50,
        marginBottom: '40%',
        marginTop:"30%"
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
        marginBottom: 5
        //marginTop: '70%'
      }
  });