import React, { useRef } from 'react'
import { useState , useEffect , useCallback } from 'react'

const PassGen = () => {


  
  const [length, setlength] = useState(4);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [symbolAllowed, setsymbolAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenrator = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";
    if(numbersAllowed) str += "123456789";
    if (symbolAllowed) str += "@#$%&"

    for(let i=0 ; i<length ; i++){
      let currChar = str.charAt(Math.floor(Math.random() * str.length) + 1 );
      pass += currChar;
    }

    setpassword(pass);
  }

  const copyPassword = useRef(null);

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  } , [password] )

  useEffect(() => {
    passwordGenrator()
  }, [length , numbersAllowed , symbolAllowed]);

  return (
    <div>
      <div className='mainPassGen pt-10 absolute z-10  w-full  duration-200 '>
      
    
        <div className='passGenText flex justify-center text-black'>
          <div className=' text-center mt-28'>Create strong and secure passwords to keep your account safe online.</div>
        </div>
    
        <div className=' container1 flex-wrap mt-8 w-full flex justify-center'>
        <input type="text" placeholder='Password' className=' mainPassInput text-center input rounded-full  w-2/4 h-12 px-8 text-lg outline-none ' ref={copyPassword} value={password}  readOnly />
        </div>

        <div className='w-full flex justify-center mt-4'><button className="button-28 py-2 px-2 rounded-md " onClick={copyToClipboard} role="button"> Copy </button></div>


        <div className='containerOfPass w-full flex flex-wrap justify-center my-6'><label htmlFor="customRange1" className=" lengthLable rangeLable form-label my-5 ">Length : {length}</label>
        <input min={4} max={40}  type="range" className=" rangeInput form-range ms-5" value={length} id="customRange1" onChange={(e) =>{ setlength(e.target.value)  }} />
        
        {<div className=" checkbox1 ml-5 my-5 checkbox-wrapper-13">
        <input id="c1-13" defaultChecked={numbersAllowed} onChange={ () => { setnumbersAllowed(prev => !prev) }} type="checkbox"/>
        <label htmlFor="c1-13">Numbers</label>
        </div>}
      
        <div className="checkbox2 ml-5 my-5 checkbox-wrapper-13">
        <input id="c1-13" type="checkbox" defaultChecked={symbolAllowed} onChange={ () => { setsymbolAllowed(prev => !prev) }} />
        <label htmlFor="c1-13">Symbols</label>
        </div>
        </div>
        <div className='  w-full flex justify-center items-center'>
        <button class="button-30 "  onClick={ () => passwordGenrator() } role="button">Generate New Password</button>
        </div>
        
      
        
      
    </div>
    </div>
  )
}

export default PassGen
