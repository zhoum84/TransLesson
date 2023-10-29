import { View,Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import dog from '../../assets/Dog_waving.png'
export default TransitionScreen = ({route, navigation}) => {
    
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Your note has been saved!</Text>
    <Text style={styles.subtitle}>You may close the app now, or...</Text>
    <Image style={styles.image} source={require('../../assets/Dog_waving.png')}/>
    <TouchableOpacity>
        <Text style={styles.submit} onPress={() => navigation.navigate('Notes')} >
            View Notes
        </Text>
    </TouchableOpacity>

    <TouchableOpacity>
        <Text style={styles.submit} onPress={() => navigation.navigate('Home')}>
            Home
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
    image:{
        height: 300,
        width: 300
    },
    title:{
        fontSize: 50,
        textAlign: 'center',
        marginTop: '10%',
        marginBottom: '3%'
    },
    subtitle:{
        fontSize: 40,
        textAlign: 'center',
        color: 'gray',
        marginBottom: '7%'
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
        marginBottom: '5%'
        //marginTop: '70%'

      }
  });