import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase", "success");
  };
  const reverse = (s) => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("converted to Reverse", "success");
  };
  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra spaces", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Erased", "success");
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };
  const handleOnChange = (event) => {
    // console.log("handle onchange case clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <label htmlFor="myBox" className="form-label">
            Enter the text
          </label>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#57616a" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 " onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={reverse}>
          Reverse
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary mx-1" onClick={extraSpaces}>
          Remove extra space
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something to preview Here"}</p>
      </div>
    </>
  );
}
