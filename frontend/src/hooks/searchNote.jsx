import { useEffect, useState } from "react";
import backend from "../api/backend";
import axios from "axios";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(()=>{
    searchAPI()
  }, [])
  const searchAPI = async () => {

    // var query;
    // if(name !== "")
    //     query = `name=${name}` 
    // else if (date !== "")
    //     query = `date=${date}`
    try {
      const response = await backend.get(`/notes`);
      setResults(response.data);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };
  
  return [searchAPI, results, errorMessage];
};
