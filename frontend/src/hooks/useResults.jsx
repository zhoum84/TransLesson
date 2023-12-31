import { useEffect, useState } from "react";
import backend from "../api/backend";

export default () => {
    const [results, setResults] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
  

    const searchAPI = async(searchTerm) => {
      try{
        const response = await backend.get('/transcripts', {
          params: {
            limit: 50,
            term: searchTerm, 
            location: 'san jose',
          }
        });
        setResults(response);
        console.log(response)
      } catch(err){
        console.log(err)
        setErrorMessage('Something went wrong');
      }
    };

  
    return [searchAPI, results, errorMessage];
  
}