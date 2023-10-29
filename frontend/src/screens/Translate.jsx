import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";
export default TransitionScreen = ({ route, navigation }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [translation, setTranslation] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [items, setItems] = useState([
    { label: "English (American)", value: "en-US" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
    { label: "Hindi", value: "hi" },
    { label: "Chinese (Simplified)", value: "zh-Hans" },
    { label: "Korean", value: "Ko" },
    { label: "Japanese", value: "ja" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Greek", value: "el" },
    { label: "Vietnamese", value: "vi" },
  ]);

  const translate = async () => {
    const result = await axios.get(
      `https://2e18-129-59-122-77.ngrok-free.app/transcripts?name=${text}&language=${language}`
    );
    setTranslation(result.data)
    console.log(language)
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Translate</Text>
      <Text style={styles.fields}>Enter a date or name...</Text>
      <TextInput
        
        style={styles.input}
        value={text}
        placeHolder={"Enter text"}
        onChangeText={(t) => setText(t)}
      />
      <DropDownPicker
        style={styles.picker}
        open={open}
        value={language}
        items={items}
        setOpen={setOpen}
        setValue={setLanguage}
        setItems={setItems}
      />
      <Text style={styles.fields}></Text>
      <TouchableOpacity onPress={() => translate()}>
        <Text style={styles.signup}>Translate!</Text>
      </TouchableOpacity>

      <Text style={styles.fields}>Translated: <Text style={{color: "white", fontWeight:"bold"}}>{translation}</Text></Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    fontSize: 20,
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "15%",
  },
  image: {
    height: 300,
    width: 300,
    transform: [{ scaleX: -1 }],
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    marginTop: "10%",
    marginBottom: "3%",
    color: "white",
  },
  subtitle: {
    fontSize: 40,
    textAlign: "center",
    color: "gray",
    marginBottom: "7%",
  },
  fields: {
    fontSize: 30,
    color: "lightgrey",
  },
  signup: {
    backgroundColor: "white",
    color: "turquoise",
    width: "65%",
    borderRadius: 25,
    borderWidth: 1,
    textAlign: "center",
    fontWeight: "bold",
    //marginLeft: '18%',
    padding: "2%",
    fontSize: 33,
    marginBottom: "5%",
    //marginTop: '70%'
  },
  input: {
    height: 50,
    margin: 12,
    width: "95%",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
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
