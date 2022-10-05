import "./styles.css";
import React, { useState } from "react";

var emojiList = {
  "😐": "Neutral Face",
  "😣": "Persevering Face",
  "😧": "Anguished Face",
  "🤒": "Face with Thermometer",
  "😞": "Disappointed Face",
  "😒": "Unamused Face",
  "😉": "Winking Face",
  "😑": "Expressionless Face",
  "😴": "Sleeping Face",
  "😏": "Smirking Face"
};
var emojisWeKnow = Object.keys(emojiList);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiList[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this";
    }
    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiList[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Emoji Teller</h1>
      <input className="inputBox" onChange={onChangeHandler}></input>
      <div></div>
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
