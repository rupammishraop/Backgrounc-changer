// import { useState } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
    let name = "rupam";
    let [color,setColor] = useState("white")
  return (

    <>
        <div className='container'
          style={{
            backgroundColor : color
          }}
        >
          <div className="colorContainer">
              <button
              onClick={() =>{
                setColor("red")
              }}
              style={{
                backgroundColor : "red"
              }}>red</button>

              <button
              onClick={() =>{
                setColor("green")
              }}
              style={{
                backgroundColor : "green"
              }}>Green</button>

              <button
              onClick={() =>{
                setColor("yellow")
              }}
              style={{
                backgroundColor : "yellow"
              }}>Yellow</button>

              <button
              onClick={() =>{
                setColor("orange")
              }}
              style={{
                backgroundColor : "orange"
              }}>Orange</button>

              <button
              onClick={() =>{
                setColor("black")
              }}
              style={{
                backgroundColor : "black"
              }}>Black</button>

              
          </div>
        </div>
    </>
  )
}

export default App
