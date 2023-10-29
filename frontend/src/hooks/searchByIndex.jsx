import { useEffect, useState } from "react";
import backend from "../api/backend";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const indexAPI = async (index) => {

    // var query;
    // if(name !== "")
    //     query = `name=${name}` 
    // else if (date !== "")
    //     query = `date=${date}`
    try {
      const response = await backend.get(`/note?index=${index}`);
      setResults(response.data);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };
  
  return [indexAPI, results, errorMessage];
};
