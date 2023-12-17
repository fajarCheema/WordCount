import { useState } from "react";
import "./WordCounter.css";

export default function WordCount() {
  const [text, setText] = useState("");
  let words, sentences, characters;

  const onChangeClick = (event) => {
    console.log("text", text);
    setText(event.target.value);
  };

  const ResetButtonClicked = () => {
    setText("");
  };

  words = text.split(" ").length - 1;
  characters = text.length;
  sentences = text.split(".").length - 1;
  console.log("words", words);

  return (
    <div className="Container">
      <h1>Word Counter</h1>
      <textarea
        name="postContent"
        placeholder="Enter text here..."
        value={text}
        onChange={onChangeClick}
        rows={10}
        cols={80}
      />
      <div className="Justify-content Numbers">
        <div>{words}</div>
        <div>{characters} </div>
        <div>{sentences}</div>
      </div>
      <div className="Justify-content Text">
        <div>{words > 1 ? "WORDS" : "WORD"}</div>
        <div> CHARACTERS</div>
        <div>{sentences > 1 ? "SENTENCES" : "SENTENCE"}</div>
      </div>
      <button className="Reset" onClick={ResetButtonClicked}>
        Reset
      </button>
    </div>
  );
}
