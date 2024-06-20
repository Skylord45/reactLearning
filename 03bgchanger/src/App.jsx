import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  // we direct use setColor function so we reduce to make one function 
  // function changeColor(color){
  //   setColor(color);
  // }

  return (
    <div
    className='w-full h-screen duration-200' style={{backgroundColor : color}}>
      <div
      className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div
        className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          
          <button
          onClick={() => {setColor('blue')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'blue'}}
          >BLUE
          </button>

          <button
          onClick={() => {setColor('green')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'green'}}
          >GREEN
          </button>

          <button
          onClick={() => {setColor('orange')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'orange'}}
          >ORANGE
          </button>

          <button
          onClick={() => {setColor('pink')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'pink'}}
          >PINK
          </button>

          <button
          onClick={() => {setColor('black')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white'
          style={{backgroundColor : 'black'}}
          >BLACK
          </button>

          <button
          onClick={() => {setColor('white')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'white'}}
          >WHITE
          </button>

          <button
          onClick={() => {setColor('violet')}}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor : 'violet'}}
          >VIOLATE
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
