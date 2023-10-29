import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from "@react-native-community/voice";
import DropDownPicker from 'react-native-dropdown-picker';


export default TestScreen = ({navigation}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [possibleTranscripts, setPossibleTranscripts] = useState([]);
    
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('en-US');
    const [items, setItems] = useState([
       {label: 'English (American)', value: 'en-US'},
       {label: 'Spanish', value: 'es'},
       {label: 'French', value: 'fr'},
       {label: 'German', value: 'de'},
       {label: 'Hindi', value: 'hi'},
       {label: 'Chinese (Simplified)', value:'zh-Hans'},
       {label: 'Korean', value: 'Ko'},
       {label: 'Japanese', value: 'ja'},
       {label: 'Portuguese', value: 'pt'},
       {label: 'Russian', value: 'ru'},
       {label: 'Greek', value: 'el'},
       {label: 'Vietnamese', value: 'vi'},
       
    ]);

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;
        Voice.onSpeechPartialResults = onSpeechPartialResultsHandler;
        return () => {
          Voice.destroy().then(Voice.removeAllListeners);
        };
      }, []);


    const createAlert = () =>
    Alert.alert('Are you sure you would like to save your recording?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => navigation.navigate('Results',{
        transcript: transcript,
        language: language,
        date: getCurrentDate()
      })},
    ]);

    
  
    const getCurrentDate=()=>{
 
        var date = new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate();
        var month = new Date().getMonth() + 1 > 9 ? new Date().getMonth() + 1 : '0' + new Date().getMonth();
        var year = new Date().getFullYear();
        
        console.log(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return year + '-' + month + '-' + date;//format: yyyy-mm-dd;
  }
  
    const onSpeechStartHandler = e => {
      console.log('start handler=»', e);
    };
  
    const onSpeechEndHandler = e => {
      console.log('stop handler', e);
      setIsRecording(false);
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
        setTranscript('');
        await Voice.start(language);
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
        {transcript == '' ? <Text></Text>:<TouchableOpacity style={styles.button} onPress={createAlert}><Text>Save Recording</Text></TouchableOpacity>}

        {isRecording ? <Text></Text>: <DropDownPicker
      open={open}
      value={language}
      items={items}
      setOpen={setOpen}
      setValue={setLanguage}
      setItems={setItems}
    />}

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
  