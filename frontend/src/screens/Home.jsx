import { View,Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default Home = () => {
  return (
    <View style={styles.container}>
        <Text>Vandy Hacks Home Screen</Text>
        <TouchableOpacity>
            <Text style={styles.signup}>
                Record
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
      backgroundColor: 'whitesmoke',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    title:{
        
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
  
  