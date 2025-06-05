import { useState } from 'react'

function App() {
  const [color,setColor]=useState("#3A3B3C")

  function changeColor(e) {
    setColor(e.target.innerHTML.toLowerCase()); // convert to lowercase if needed
  }

  return (
    <>
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-400
          px-3 py-2 rounded-3xl'>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"red"}}
            >Red</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"green"}}
            >Green</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"blue"}}
            >Blue</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"olive"}}
            >Olive</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"grey"}}
            >Grey</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"yellow"}}
            >Yellow</button>

             <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"pink"}}
            >Pink</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"lavender"}}
            >Lavender</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
              style={{backgroundColor:"white"}}
            >White</button>

            <button onClick={changeColor}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor:"black"}}
            >Black</button>


          </div>
      </div>  

    </div>
      
    </>
  )
}

export default App
