import React,{useState} from 'react'
//import PropTypes from 'prop-types'


export default function Textform(props) {
  //const [text,setText]= useState(text)
  //states:
  const [text, setText] = useState('');
  const [mode, setMode] = useState({  
    color : 'black',
    backgroundColor : 'white',
    placeholder : 'yellow',
  });
  const [BtnName, setBtnName] = useState('DarkMode');
  const [Btncolor, setBtncolor]=useState({
    color : 'white',
    backgroundColor:'black'
  })

  //Functions:
  function upcase() {
    console.log('Hello')
    let newtext = text.toUpperCase()
    setText(newtext)
    console.log(text.length)
  }
  function locase() {
    let newtext= text.toLowerCase()
    setText(newtext)
  }
const clr=() =>{  
  let newtext= ''
    setText(newtext)
  }
 const copy=() =>{
 // let newtext = text;
  navigator.clipboard.writeText(text)
 }
function changemode() {
    if(mode.color === 'black'){
      setMode({
        color : 'white',
    backgroundColor : 'black',})
      setBtncolor({
        color : 'black',
    backgroundColor : 'white',
      })
      setBtnName('LightMode')
      document.body.style.backgroundColor= 'black'

    }
    else{
      setMode({
        color : 'black',
    backgroundColor : 'white',
      })
      setBtncolor({
        color : 'white',
    backgroundColor : 'black'
      })
      setBtnName('DarkMode')
      document.body.style.backgroundColor= 'white'
      //document.title='Text editor white'
    }
  }


  const handleOnChange = (event) =>{
   //consolog("hello")
   setText(event.target.value)
  }

  return (
    <>
  <div className="container my-4" style={mode}>
  <h1>{props.head}</h1>
  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changemode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" value={BtnName} >{BtnName}</label>
</div>
  <label htmlFor="exampleFormControlTextarea1" className="form-label" >TextArea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder='Enter your text here'  onChange={handleOnChange} style={mode}></textarea>
  <button type="submit" className="btn btn-primary my-3" onClick={upcase} style={Btncolor}>To Uppercase</button>
  <button type="submit" className="btn btn-primary mx-3" onClick={locase} style={Btncolor}>To Lowerercase</button>
  <button type="submit" className="btn btn-primary " onClick={clr} style={Btncolor}>Clear All</button>
  <button type="submit" className="btn btn-primary mx-3" onClick={copy} style={Btncolor}>copy</button>
  <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} letters</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:'Enter some text to preview'}</p>
  </div>
</>
  )
}