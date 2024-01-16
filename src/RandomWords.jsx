import { useState, useEffect } from "react";
import { beautifulWords, nightWords } from "./Word";

const RandomWords = () => {
  const [randomWord, setRandomWord] = useState(() => {
    const generatedWord = localStorage.getItem("randomWord");
    return generatedWord || generateRandomWords(beautifulWords);
  });

  const [lastGeneratedDate, setLastGeneratedDate] = useState(() => {
    return localStorage.getItem("lastGeneratedDate") || "";
  });

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    if (lastGeneratedDate !== currentDate) {
      const randomWord = generateRandomWords(beautifulWords);
      setLastGeneratedDate(currentDate);
      setRandomWord(randomWord);
      localStorage.setItem("lastGeneratedDate", currentDate);
      localStorage.setItem("randomWord", randomWord);
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
  const currentDate = new Date().toLocaleDateString();
  console.log(currentDate);

  const output = quote();
  return <p style={{ textAlign: "center", marginBottom: "10px" }}>{output}</p>;
};

export default RandomWords;
