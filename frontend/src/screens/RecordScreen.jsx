import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

//find out how to animate the red circle
export default RecordScreen = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handlePress = () => {
    setIsRecording((isRecording) => !isRecording);
  };

  return (
    <View style={styles.container}>
      <Text>Screen to Record Audio</Text>

      <TouchableOpacity onPress={handlePress}>
        {isRecording ? (
          <Text style={styles.button}>
            Stop Record
            <Ionicons name="ellipse" size={32} color="red" />
          </Text>
        ) : (
          <Text style={styles.button}>
            Record Audio
            <Ionicons name="mic-outline" size={32} color="black" />
          </Text>
        )}
      </TouchableOpacity>

      {isRecording ?  
      <TouchableOpacity>
        <Text style={styles.pause}>
            Pause             
            <Ionicons name="pause-circle-outline" size={25} color="black" />
        </Text></TouchableOpacity> : <Text></Text> }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "white",
    color: "#3A59FF",
    width: "65%",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '18%',
    padding: "2%",
    fontSize: 33,
    marginBottom: '5%',
    //marginTop: '70%'
  },
  pause: {
    
    fontSize: 25
  }
});
