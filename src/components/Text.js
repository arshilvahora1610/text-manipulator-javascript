import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    console.log("clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    console.log("clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    console.log("clicked" + Text);
    let newText = "";
    setText(newText);
  };
  const handlechange = (event) => {
    console.log("handled");
    setText(event.target.value);
  };
  const handleCopy = (event) => {
    var text = document.getElementById("Textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleSpace = (event) => {
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode == "dark" ? "white" : "black" }}>
          {props.heading}{" "}
        </h1>
        <label  style={{
              backgroundColor: props.mode == "dark" ? "grey" : "white",
              color: props.mode == "dark" ? "white" : "black",
            }}>Text </label>
        <div className="form-floating">
          <textarea  
            className="form-control" 
            id="Textarea"
            style={{
              backgroundColor: props.mode == "dark" ? "#13466e" : "white",
              color: props.mode == "dark" ? "white" : "black",
              height:'200px'
            }}
            value={Text}
            onChange={handlechange}
          
          ></textarea>
          {/* <label>{props.textHeading}</label> */}
        </div>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleUpClick}>
          Uppercase
        </button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleloClick}>
          LowerCase
        </button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleCopy}>
          Copy to clipboard
        </button>
        <button className="btn btn-primary mt-4 mx-1" onClick={handleSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="conatiner my-4"
        style={{ color: props.mode == "dark" ? "white" : "black" }}
      >
        <h4>Your Text Summary</h4>
        <p>
          words {Text.split(" ").filter((element)=>{return element.length!==0}).length} and {Text.length} character
        </p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read words</p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
