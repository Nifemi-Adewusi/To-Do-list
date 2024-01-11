import { useState, useEffect } from "react";
import { beautifulWords, nightWords } from "./Word";

const RandomWords = () => {
  const [randomWord, setRandomWord] = useState(() => {
    // Retrieve the stored random word from localStorage, or generate a new one
    const storedRandomWord = localStorage.getItem("randomWord");
    return storedRandomWord || generateRandomWords(beautifulWords);
  });

  const [lastGeneratedDate, setLastGeneratedDate] = useState(() => {
    // Retrieve the last generated date from localStorage, or initialize to an empty string
    return localStorage.getItem("lastGeneratedDate") || "";
  });

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();

    // Check if the random word needs to be regenerated for a new day
    if (lastGeneratedDate !== currentDate) {
      const newRandomWord = generateRandomWords(beautifulWords);
      setRandomWord(newRandomWord);
      setLastGeneratedDate(currentDate);

      // Store the new random word and last generated date in localStorage
      localStorage.setItem("randomWord", newRandomWord);
      localStorage.setItem("lastGeneratedDate", currentDate);
    }
  }, [lastGeneratedDate]);

  function generateRandomWords(words) {
    const randomWordNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomWordNumber];
    return randomWord;
  }

  const currentDay = function () {
    const dateObject = Date.now();
    const options = {
      day: "numeric",
      year: "numeric",
      month: "short",
      weekday: "long",
    };
    return new Intl.DateTimeFormat(navigator.language, options).format(
      dateObject
    );
  };

  const time = new Date().getHours();

  function quote() {
    if (time >= 19 && time <= 23) {
      return generateRandomWords(nightWords);
    } else {
      const output = `Today ${currentDay()} ${
        randomWord.startsWith("A") ? "Is" : ""
      } ${randomWord}`;
      return output;
    }
  }

  const output = quote();
  return <p style={{ textAlign: "center", marginBottom: "10px" }}>{output}</p>;
};

export default RandomWords;
