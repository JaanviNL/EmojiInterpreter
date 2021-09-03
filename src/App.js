import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😂": "Face with Tears of Joy",
    "😀": "Happy Face",
    "😺": "Grinning Cat Face",
    "😄": "Grinning Face with smiling Eyes",
    "😅": "Grinning Face with Sweat",
    "😇": "Smiling Face with halo",
    "😊": "Smiling Face with Smiling Eyes",
    "🤩": "Star-Struck",
    "😋": "Hungry",
    "😑": "ExpressionlessFace",
    "🤗": "Hugging Face",
    "🤤": "Drooling Face",
    "🤥": "Lying Face",
    "😟": "Worried Face",
    "😲": "Astonished Face",
    "😨": "Fearful Face",
    "😞": "Disappointed Face",
    "😕": "Confused Face",
    "😠": "Angry Face",
    "🤟": "Love-You Gesture"
  };

  var emojiWeknow = Object.keys(emojiDictionary);
  var [emojiMeaning, setemojiMeaning] = useState("");
  var [nuserinput, setnuserinput] = useState("");

  function onChanngehandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    setnuserinput(userinput);
    if (meaning === undefined) {
      meaning = "We Don't have this emoji in our Database";
    }
    setemojiMeaning(meaning);
  }

  function emojiClickhandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setemojiMeaning(meaning);
    setnuserinput(emoji);
  }

  return (
    <div className="App">
      <h1 className="header">EmojiPedia 😃</h1>
      <input
        className="input-txt"
        placeholder="Go For It"
        onChange={onChanngehandler}
      ></input>
      <div className="meaning">
        {" "}
        {nuserinput}:{emojiMeaning}
      </div>

      <h2>Or Select any one from below list</h2>
      <div className="container">
        {emojiWeknow.map(function (item) {
          return (
            <span
              onClick={function () {
                emojiClickhandler(item);
              }}
              key={item}
              role="img"
              className="inline-list"
            >
              {" "}
              {item}
              {}
            </span>
          );
        })}
      </div>

      <footer>
        <div className="header">
          Are you also confused about the Emoji's your friend send's you <br />
          Check their meanings here
        </div>
      </footer>
    </div>
  );
}
