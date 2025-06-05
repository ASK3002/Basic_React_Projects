import { useState ,useCallback,useEffect,useRef} from 'react'

function App() {
  const [password,setPassword]=useState("")
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [specialCharAllowed,setSpecialCharAllowed]=useState(false);


  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (specialCharAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i <=length; i++) {
      let charIndex=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(charIndex)
      
    }

    setPassword(pass)
  },[length, numAllowed, specialCharAllowed,setPassword])

  const copyToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,specialCharAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-blue-400">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type='text'
          value={password}
          className="outline-none w-full py-1 px-3"
          readOnly
          placeholder='Password'
          ref={passwordRef}
          > 
          </input>
          <button
          onClick={copyToClipboard}
          className='outline-none bg-green-500 hover:bg-red-500 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer accent-green-500'
          onChange={(e)=>{setLength(e.target.value)}}
          >
          </input>
          <label>Length:{length}</label>
          <div className="flex items-center gap-x-1">
            <input
            type='checkbox'
            defaultChecked={numAllowed}
            id="numAllowed"
            className=' accent-green-500'
            onClick={()=>{
              setNumAllowed((prev)=>!prev)
            }}
            >
            </input>
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
            type='checkbox'
            defaultChecked={specialCharAllowed}
            id="specialCharAllowed"
            className=' accent-green-500'
            onClick={()=>{
              setSpecialCharAllowed((prev)=>!prev)
            }}
            >
            </input>
            <label htmlFor="spcialCharInput">Special Char</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
