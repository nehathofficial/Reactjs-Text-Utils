import React, {useState} from 'react'

export default function TextForm(props) {
  
  const [Text, setText] = useState("Enter some text here");

  const handleUpClick = () => {
    const newText = Text.toUpperCase();
    setText(newText);
    props.showAlert('Success', ' Converted to uppercase');
  }

  const handleLowClick = () => {
    const newText = Text.toLowerCase();
    setText(newText);
    props.showAlert('Success', ' Converted to lowercase');
  }

  const handleCopyClick = () => {
    const copyText = Text;
      navigator.clipboard.writeText(copyText);
      props.showAlert('Success', ' Copied to clipboard');
  }

  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert('Success', ' Text cleared');
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <h2>Enter Your Text to Analyze Below:</h2>
    <textarea className={`form-control text-${props.mode == 'light' ? 'dark' : 'light'}`} rows="5" id="myBox" name="myBox"
    value={Text}
    onChange={handleOnChange}
    style={{backgroundColor : props.mode == "dark" ? "rgb(0 33 78)" : "white"}}
    ></textarea> 
    <button type="button" className={`btn btn-primary mt-3 ${Text.trim().length <= 0 ? 'disabled' : ''}`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button type="button" className={`btn btn-success mx-2 mt-3 ${Text.trim().length <= 0 ? 'disabled' : ''}`} onClick={handleLowClick}>Convert to Lowercase</button>
    <button type="button" className={`btn btn-info text-light mx-2 mt-3 ${Text.trim().length <= 0 ? 'disabled' : ''}`} onClick={handleCopyClick}>Copy to clipboard</button>
    <button type="button" className={`btn btn-danger mx-2 mt-3 ${Text.trim().length <= 0 ? 'disabled' : ''}`} onClick={handleClearClick}>Clear Text</button>

    <h2 className="mt-4">Text Summary</h2>
    <p>{Text.trim().split(/\s+/).filter((element) => { return element.length !== 0; }).length} words and {Text.trim().length} characters</p>

    <p>{Text.length > 0 ? Text.trim().length * 0.008 : 0} minutes to read</p>

    <h2 className="mt-4">Preview</h2>
    <p>{Text.length > 0 ? Text : "Enter your text in above textbox to preview it here."}</p>
    </>
  )
}
