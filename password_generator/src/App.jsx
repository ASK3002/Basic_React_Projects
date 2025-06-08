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
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" 
      style={{
            backgroundImage: `url('https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-background-with-space-for-text-and-leaves-around-free-image.jpeg?w=2210&quality=70')`,
        }}>
        <div className="w-[500px] h-[200px] mx-auto shadow-md rounded-3xl px-4 py-3 my-8 bg-lime-400/30 text-green-950 font-semibold">
        <h1 className='text-lime-950 text-center my-3  text-lg'>Password Generator</h1>
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
        <div className="flex items-center gap-x-5">
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer accent-orange-600'
          onChange={(e)=>{setLength(e.target.value)}}
          >
          </input>
          <label>Length:{length}</label>
          <div className="flex items-center gap-x-1">
            <input
            type='checkbox'
            defaultChecked={numAllowed}
            id="numAllowed"
            className=' accent-orange-600'
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
            className=' accent-orange-600 '
            onClick={()=>{
              setSpecialCharAllowed((prev)=>!prev)
            }}
            >
            </input>
            <label htmlFor="spcialCharInput">Special Char</label>
          </div>

        </div>
        <h3 className='text-green-950 text-center mt-5'>© 2025 Ayush Singh Kaushik</h3>
      </div>
      </div>
    </>
  )
}

export default App
