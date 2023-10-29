import { View,Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import dogpic from '../../assets/cute_doggy.png'
export default Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/Lucky_Bengy.png')}/>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Record')}>
            <Text style={styles.signup}>
                Record
            </Text>
        </TouchableOpacity> */}

        <TouchableOpacity>
            <Text style={styles.signup} onPress={() => navigation.navigate('Test')}>
                Record
            </Text>
        </TouchableOpacity>


        <TouchableOpacity>
            <Text style={styles.signup} onPress={() => navigation.navigate('Notes')}>
                View Notes
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
      paddingTop: '15%'
      
    },
    title:{
        fontSize: 50,
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
    
      },
      buttonHover: {
        marginTop: 10,
        borderRadius:25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        shadowColor: 'rgba(46, 229, 157, 0.4)',
        shadowOpacity: 1.5,
        elevation: 8,
        shadowRadius: 20 ,
        shadowOffset : { width: 1, height: 13},
        backgroundColor: '#2EE59D',
        color: '#FFFFFF'
      },    
    image: {
        height: 400,
        width: 400,
        marginBottom: 0,
    }

});
  
  