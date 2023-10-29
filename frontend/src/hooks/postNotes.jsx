import { useEffect, useState } from "react";
import backend from "../api/backend";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const postAPI = async(name, language, text, date) => {
      try{
        const response = await backend.post('/transcripts', {
          params: {
            name: name,
            text: text, 
            date: date,
          }
        });
      } catch(err){
        setErrorMessage('Something went wrong');
      }
    };

  
    return [postAPI, errorMessage];
  
}