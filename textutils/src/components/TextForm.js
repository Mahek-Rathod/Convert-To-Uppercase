import React , {useState} from 'react';


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event)=>{
    // console.log("On Changed")
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter text here");
  //  setText('Enter text here 2') when you want to update sentecnce so use a setText method 

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}   onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
