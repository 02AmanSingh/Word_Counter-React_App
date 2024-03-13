import React, { useState } from 'react'

export default function WordCount(props) {

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const toCopy=()=>{
    let text = document.getElementById('textbox1');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    // props.showAlert("Text is Copied.", "Success");
  }

  const toClear=()=>{
    let newText="";
    setText(newText);
  }

  const extraSpace=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text, setText] = useState('');

  return (
    <>

      <section className="container">
        <div className="container mb-3">
          <div className="heading">
            <h1 className='mb-1'>{props.heading}</h1>
          </div>
          <div className="text-box">
            <textarea name="Text" id="textbox1" value={text} onChange={handleOnChange} cols="100" rows="5" placeholder='Enter text here!'></textarea>
          </div>
        </div>

        <div className="container btns my-2">
          <button disabled={text.length === 0} className='btn btn-primary' onClick={toUpper}>To Upper Case</button>
          <button disabled={text.length === 0} className='btn btn-primary' onClick={toLower}>To Lower Case</button>
          <button disabled={text.length === 0} className='btn btn-primary' onClick={toCopy}>Copy Text</button>
          <button disabled={text.length === 0} className='btn btn-primary' onClick={toClear}>Clear</button>
          <button disabled={text.length === 0} className='btn btn-primary' onClick={extraSpace}>Remove Extra Spaces</button>
        </div>

        <div className="container output">

          <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words & {text.length} characters.</p>

        </div>
      </section>

    </>
  )
}



