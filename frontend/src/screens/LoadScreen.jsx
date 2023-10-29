import { View,Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import searchNote from "../hooks/searchNote";
export default TransitionScreen = ({route, navigation}) => {
    
    const [searchAPI, results, errorMessage] = searchNote();

    useEffect(() =>{
        searchAPI();
    }, [])

    useEffect(() =>{
        navigation.navigate('Notes', {results: results})
    },[results])

  return (
    <View style={styles.container}>
        <Text>Loading...</Text>
        <Image source={require('../../assets/Dog_walking.png')}/>
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
        width: 300,
        transform: [
            { scaleX: -1 }
          ]
        
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


// const styles = StyleSheet.create({
//     loadingSpinnerContainer: {
//         position: fixed,
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         backgroundColor: rgba(0, 0, 0, 0.5),
//         display: flex,
//         justifyContent: center,
//         alignItems: center
//       }
      
//       loadingSpinner: {
//         width: "64px",
//         height: "64px",
//         border: "8px solid",
//         borderColor: "#000 transparent #555 transparent",
//         borderRadius: "50%",
//         animation: spin 1.2s linear infinite;
//       }
      
// })
