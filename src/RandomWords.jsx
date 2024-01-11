import { beautifulWords, nightWords } from "./Word";

const RandomWords = () => {
  const generateRandomWords = function (words) {
    const randomWordNumber = Math.floor(Math.random() * words.length);
    const randomWord = words[randomWordNumber];

    return randomWord;
  };
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
  const randomWord = generateRandomWords(beautifulWords);
  const time = new Date().getHours();
  function quote() {
    if (time >= 19 && time <= 23) {
      return generateRandomWords(nightWords);
    } else {
      return `Today ${currentDay()} ${
        randomWord.startsWith("A") ? "Is" : ""
      } ${randomWord}`;
    }
  }
  const output = quote();
  return <p style={{ textAlign: "center", marginBottom: "10px" }}>{output}</p>;
};
export default RandomWords;
