import React, {useState} from 'react'

// import { ChromePicker } from 'react-color';

export default function TextForm(props) {
    
const [text,setText] = useState("");
const handleUpClick = ()=>{
    console.log("handleUpClick is clicked..."+ text);
    let newText = text.toUpperCase(); 
    setText(newText);
    props.showAlert("Converted to UpperCase","Success");
}
const handleDownClick = ()=> {
    console.log("handleDownClick is clicked ..."+ text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","Success");
}
const handleClearClick = () =>{
    let newText = '';
    setText(newText);
}
const handleCopyClick = ()=>{
    let text = document.getElementById("my-text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!","Success");
}
const handleSpaceClick = () =>{
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "));
    props.showAlert("Extra Spacess Removed!","Success");
}
// const [color, setcolor] = useState('#fff');
// const handleColorClick = (color) =>{
//    let button= document.getElementById("my-text");
//    color = button.style.color;
//    console.log("handleColorClick is clicked..."+text);

//    if(color === 'black'){
//     button.style.color=props.color;
//    }
//     else{
//     button.style.color = 'black';
// }
function changeColor() {
    document.getElementById("my-text").style.color = document.getElementById("ColorPicker1").value;
    props.showAlert("Color Changed","Success");
   
}
        
const handleOnChange = (event)=>{
console.log("Clicked on handleOnChnage");
setText(event.target.value);
}
  return (
    <div>
        <div className="mb-5"  style={{color : props.mode==='dark'?'black':'white'}}>
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} id="my-text"  onclick="changeColor()"
        style={{backgroundColor : props.mode==='dark'?'white':'black', color:props.mode==='dark'?'black':'white'}}
         onChange={handleOnChange} rows="7">
        
         </textarea>
        </div>
        <button className="btn btn-primary mb-1 mr-sm-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mb-1 mr-sm-2" onClick={handleDownClick}>Convert To LowerCase</button>
         <button className="btn btn-primary mb-0 mr-sm-2" onClick={changeColor}>Pick Color
         <input className="MyColorPicker" type="color" id="ColorPicker1" /></button>
         <button className="btn btn-primary mb-1 mr-sm-2" onClick={handleSpaceClick}>Remove Extra Space</button>
         <button className="btn btn-primary mb-1 mr-sm-2" onClick={handleCopyClick}>Copy Text</button>
         <button className="btn btn-primary mb-1 mr-sm-2" onClick={handleClearClick}>Clear Text </button>

        <div className="container my-2" style={{color : props.mode==='dark'?'black':'white'}}>
            <h3>Your Text Summary</h3>
            <li>
                Number Of Words : {text.split(" ").length}
            </li>
            <li>
            Number Of Characters : {text.length}
            </li>
            <li>
                Number Of Minutes To Read : {0.008 * text.length}
            </li>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter Something Above In Textbox To Preview..'}</p>
        </div>
    </div>
    
  )
}
