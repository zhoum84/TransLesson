import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import dogpic from '../../assets/cute_doggy.png'
export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/Lucky_Bengy.png')}/>
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
      },
    image: {
        height: 400,
        width: 400,
        marginBottom: 0,
    }

});
  
  