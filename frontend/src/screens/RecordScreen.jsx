import { View,Text, StyleSheet, ScrollView } from "react-native";

export default RecordScreen = () => {
  return (
    <View style={styles.container}><Text>Screen to Record Audio</Text></View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        
      },
  
})