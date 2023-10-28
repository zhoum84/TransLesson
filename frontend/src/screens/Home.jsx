import { View,Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Audio App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Record')}>
            <Text style={styles.signup}>
                Record
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.signup} onPress={() => navigation.navigate('Notes')}>
                View Notes
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.signup} onPress={() => navigation.navigate('Test')}>
                Test
            </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.signup}>
                Sign Up
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
  
  