import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-community/voice";

//find out how to animate the red circle
export default RecordScreen = ({ navigation }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
//   useEffect(() => {
//     // Voice.onSpeechStart = onSpeechStartHandler;
//     // Voice.onSpeechEnd = onSpeechEndHandler;
//     Voice.onSpeechResults = onSpeechResultsHandler;
//     // return () => {
//     //   Voice.destroy().then(Voice.removeAllListeners);
//     // };
//   }, []);


  const startSpeechToText = async () => {
    if (Voice) {
      try {
        await Voice.start("en-US");
        //onSpeechStartHandler();
      } catch (error) {
        console.log(error);
      }
    }
  };

  

  const stopSpeechToText = async () => {
    if (Voice) {
      try {
        await Voice.stop();
        //Voice.onSpeechResults(SpeechResultsEvent);
        console.log("Recording Complete");
      } catch (error) {
        console.log(error);
      }
    }
  };

  
  const onSpeechResultsHandler = (event) => {
    setTranscript(event?.value?.[0] || '');
    console.log("lmao")
    console.log(transcript);
};


  const handlePress = () => {
    if (!isRecording) {
      startSpeechToText();
    } else {
      stopSpeechToText();
    }
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

      {isRecording ? (
        <TouchableOpacity>
          <Text style={styles.pause}>
            Pause
            <Ionicons name="pause-circle-outline" size={25} color="black" />
          </Text>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
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
    marginBottom: "5%",
    //marginTop: '70%'
  },
  pause: {
    fontSize: 25,
    
  },
});
