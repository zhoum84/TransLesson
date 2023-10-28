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
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          flex: 1,
        }}>
        <Button
          title={isRecording ? 'Stop Speaking' : 'Start Speaking'}
          onPress={isRecording ? stopRecording : startRecording}
        />
      </View>
    );
  };