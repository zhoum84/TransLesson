import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-community/voice";

export default TestScreen = ({navigation}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
  
    useEffect(() => {
      Voice.onSpeechStart = onSpeechStartHandler;
      Voice.onSpeechEnd = onSpeechEndHandler;
      Voice.onSpeechResults = onSpeechResultsHandler;
      Voice.onSpeechPartialResults = onSpeechPartialResultsHandler;
      return () => {
        Voice.destroy().then(Voice.removeAllListeners);
      };
    }, []);
  
    const onSpeechStartHandler = e => {
      console.log('start handler=»', e);
    };
  
    const onSpeechEndHandler = e => {
      console.log('stop handler', e);
    };
    const onSpeechResultsHandler = e => {
      console.log('speech result handler', e);
      setTranscript(e.value[0]);
    };
  
    const onSpeechPartialResultsHandler = e => {
        console.log('partial speech result handler', e);
        setTranscript(e.value[0]);
      };
  
    const startRecording = async () => {
      setIsRecording(true);
      try {

        await Voice.start('en-US');
      } catch (e) {
        console.log('error -> ', e);
      }
    };
  
    const stopRecording = () => {
      setIsRecording(false);
      try {
        Voice.stop();
        console.log(transcript);
      } catch (e) {
        console.log('error -> ', e);
      }
    };
  
    return (
      <View
        style={styles.container}>
            <Text>{transcript}</Text>
        <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
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

        {/* <Button
          title={isRecording ? 'Stop Record' : 'Record'}
          onPress={isRecording ? stopRecording : startRecording}
        /> */}
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
      marginBottom: "5%",
      //marginTop: '70%'
    },
    pause: {
      fontSize: 25,
    },
  });
  