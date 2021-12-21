import React from 'react'

const App = () => {
  return (
<div>

{/* Numbers*/}
<div className='flex flex-wrap flex-row justify-center gap-[18px]'>
  {
  [
    ["Esc","w-16", "h-10", "gray-50"],
    ["1","w-16", "h-12", "white"],
    ["2","w-16", "h-12", "white"],
    ["3","w-16", "h-12", "white"],
    ["4","w-16", "h-12", "white"],
    ["5","w-16", "h-12", "white"],
    ["6","w-16", "h-12", "white"],
    ["7","w-16", "h-12", "white"],
    ["8","w-16", "h-12", "white"],
    ["9","w-16", "h-12", "white"],
    ["0","w-16", "h-12", "white"],
  ]
  .map(([nums, width, height, color]) => (
    <div className={`mt-5 rounded-lg ${width} ${height}`}>
    <button type="button" id={nums} className={`focus:ring-gray font-mono items-center ${width} ${height} shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-${color} hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition`}>
      {nums}
    </button>
    </div>
  ))

}
  </div>

{/* Q->P */}
<div className='flex flex-wrap flex-row justify-center gap-[18px]'>
{
  [
    ["Q","w-14", "h-12", "white"],
    ["W","w-14", "h-12", "white"],
    ["E","w-14", "h-12", "white"],
    ["R","w-14", "h-12", "white"],
    ["T","w-14", "h-12", "white"],
    ["Y","w-14", "h-12", "white"],
    ["U","w-14", "h-12", "white"],
    ["I","w-14", "h-12", "white"],
    ["O","w-14", "h-12", "white"],
    ["P","w-14", "h-12", "white"],
    ["Delete","w-24", "h-12", "gray-50"],
  ]
  .map(([letter, width, height, color]) => (
    <div className={`mt-5 rounded-lg ${width} ${height}`}>
    <button type="button" id={letter} className={`focus:ring-gray font-mono items-center ${width} ${height} shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-${color} hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition`}>
      {letter}
    </button>
    </div>
  ))

}

</div>

{/* A->L */}
<div className='flex flex-wrap flex-row justify-center gap-[18px]'>

{
[
  ["A","w-14", "h-12", "white"],
  ["S","w-14", "h-12", "white"],
  ["D","w-14", "h-12", "white"],
  ["F","w-14", "h-12", "white"],
  ["G","w-14", "h-12", "white"],
  ["H","w-14", "h-12", "white"],
  ["J","w-14", "h-12", "white"],
  ["K","w-14", "h-12", "white"],
  ["L","w-14", "h-12", "white"],
  ["Enter","w-24", "h-12", "gray-50"],
]
.map(([letter, width, height, color]) => (
  <div className={`mt-5 rounded-lg ${width} ${height}`}>
    <button type="button" id={letter} className={`focus:ring-gray font-mono items-center ${width} ${height} shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-${color} hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition`}>
      {letter}
    </button>
    </div>
  ))

}

</div>

{/* Z->M */}
<div className='flex flex-wrap flex-row justify-center gap-[18px]'>

 {
  [
    ["Shift ","w-24", "h-12", "gray-50"],
    ["Z","w-14", "h-12", "white"],
    ["X","w-14", "h-12", "white"],
    ["C","w-14", "h-12", "white"],
    ["V","w-14", "h-12", "white"],
    ["B","w-14", "h-12", "white"],
    ["N","w-14", "h-12", "white"],
    ["M","w-14", "h-12", "white"],
    ["Shift","w-24", "h-12", "gray-50"],
  ]
  .map(([letter, width, height, color]) => (
    <div className={`mt-5 rounded-lg ${width} ${height}`}>
    <button type="button" id={letter} className={`focus:ring-gray font-mono items-center ${width} ${height} shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-${color} hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition`}>
      {letter}
    </button>
    </div>
  ))

}

</div>

{/* Bottom Row (Control, Option, Space, Meta) */}

  {

    <div class="flex flex-wrap flex-row justify-center gap-[18px]">

    <button button type="button" id="Control" class="flex mt-5 focus:ring-gray font-mono items-center w-24 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-gray-50 hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
      Control
    </button>

    <button button type="button" id="Option " class="flex mt-5 focus:ring-gray font-mono items-center w-20 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-gray-50 hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
      Option
    </button>

      <button type="button" id="Meta " class="flex mt-5 focus:ring-gray font-mono items-center w-16 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-gray-50 hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
        
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
        </svg>

      </button>

      <button type="button" id="Space" class="flex mt-5 focus:ring-gray font-mono items-center w-96 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-white hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
      </button>

      <button type="button" id="Meta" class="flex mt-5 focus:ring-gray font-mono items-center w-16 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-gray-50 hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
      
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"></path>
        </svg>
      
      </button>

      <button type="button" id="Option" class="flex mt-5 focus:ring-gray font-mono items-center w-20 h-12 shadow-sm justify-center hover:text-gray-500 text-gray-500 active:text-gray-500 text-base font-medium  active:bg-gray-100 bg-gray-50 hover:bg-gray-50 border focus:border-gray-500 focus:ring ring-gray-300 border-gray-300 rounded-md focus:outline-none transition">
      Option
    </button>
    </div>
  }

  {
      window.addEventListener('keyup', (key) => {

        // Auto Key Bindings

        try {
            console.log(`Key: ${key.key}\nCode: ${key.code}\nKeyCode: ${key.keyCode}`)

            document.getElementById(`${key.key.toUpperCase()}`).focus()

            setTimeout(() => {
            document.getElementById(`${key.key.toUpperCase()}`).blur()
            }, 501)
        } catch (error) {
            console.log(error)
        }
    
        // Custom Key Bindings

        if (key.code === "Enter") {
          document.getElementById(`Enter`).focus()
          setTimeout(() => {
          document.getElementById(`Enter`).blur()
          }, 501)
        }
      

        if (key.code === "Space") {
            document.getElementById(`Space`).focus()
            setTimeout(() => {
            document.getElementById(`Space`).blur()
            }, 501)
          }
    
        if (key.code === "Backspace") {
            document.getElementById(`Delete`).focus()
            setTimeout(() => {
            document.getElementById(`Delete`).blur()
            }, 501)
          }
    
        if (key.code === "ShiftRight") {
            document.getElementById(`Shift`).focus()
            setTimeout(() => {
            document.getElementById(`Shift`).blur()
            }, 501)
          }

        if (key.code === "ShiftLeft") {
            document.getElementById(`Shift `).focus()
            setTimeout(() => {
            document.getElementById(`Shift `).blur()
            }, 501)
          }

        if (key.code === "MetaRight") {
            document.getElementById(`Meta`).focus()
            setTimeout(() => {
            document.getElementById(`Meta`).blur()
            }, 501)
          }

        if (key.code === "MetaLeft") {
            document.getElementById(`Meta `).focus()
            setTimeout(() => {
            document.getElementById(`Meta `).blur()
            }, 501)
          }

        if (key.code === "Escape") {
            document.getElementById(`Esc`).focus()
            setTimeout(() => {
            document.getElementById(`Esc`).blur()
            }, 501)
          }

        if (key.code === "AltRight") {
            document.getElementById(`Option`).focus()
            setTimeout(() => {
            document.getElementById(`Option`).blur()
            }, 501)
          }

        if (key.code === "AltLeft") {
            document.getElementById(`Option `).focus()
            setTimeout(() => {
            document.getElementById(`Option `).blur()
            }, 501)
          }

        if (key.code === "ControlLeft") {
            document.getElementById(`Control`).focus()
            setTimeout(() => {
            document.getElementById(`Control`).blur()
            }, 501)
          }
    })
  }

    </div>
  )
}

export default App
