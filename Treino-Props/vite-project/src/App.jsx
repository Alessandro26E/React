import { useState } from 'react'
import './App.css'
import Tasks from './components/Task'

function App() {
  const [id, setId] = useState("")

  function submit () {
    const input = document.getElementById("linkInput")

    if (input.value) {
        const url = input.value
        const urlIncurtada = url.split("track/")[1]
        const urlTarget = urlIncurtada.split("?")[0]
        setId(urlTarget)
    }
    
  }

  return (
    <div className='w-screen h-screen bg-[#131313] flex gap-5 flex-col items-center justify-center'>
      <input id='linkInput' className='bg-gray-400 w-[300px] h-[50px] rounded-md text-center' type="text" placeholder='Cole o Link da Musica' />
      <button onClick={submit} className='bg-green-500 w-[200px] h-[50px] text-white rounded-md cursor-pointer'>ENVIAR</button>
      <Tasks url={id}/>
    </div>
  )
}

export default App
