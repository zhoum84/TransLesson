import { useEffect, useState } from "react";
import backend from "../api/backend";
import axios from "axios";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const translateAPI = async (name, date, language) => {
    const json = JSON.stringify({
      name: name,
      date: date,
      language: language,
    });

    try {
      if (name != "") {
        const response = await axios.get(
          `https://c36e-129-59-122-77.ngrok-free.app/transcripts?name=${name}&language=${language}`,
          json,
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          }
        );
        setResults(response.data);
      } else {
        const response = await axios.get(
          `https://c36e-129-59-122-77.ngrok-free.app/transcripts?name=${date}&language=${language}`,
          json,
          {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              "Content-Type": "application/json",
            },
          }
        );
        setResults(response.data);
      }
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };

  return [postAPI, results, errorMessage];
};
