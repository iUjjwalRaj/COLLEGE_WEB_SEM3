import { useState } from "react";
import "./App.css";
import LikeDislike from "./LikeDislike";
import Form from "./Increament.jsx";

export default function MyInput() {
  const [text, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className="container">
      <h1>useState Demo</h1>

      <input
        value={text}
        onChange={handleChange}
      />

      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>
      <p>{text}</p>

      <input
        type="text"
        value={text}
        readOnly
      />

      <input type="text" />
      <input type="text" />
      <input type="text" />

      <LikeDislike />

      <Form />
    </div>
  );
}