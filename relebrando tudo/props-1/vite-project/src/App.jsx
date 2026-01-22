import './App.css'
import MainButton from './components/MainButton'

function App() {
  function Send() {
    console.log("Oi")
  }

  return (
    <div className='bg-gray-950 w-screen h-screen flex '>
        <MainButton ActionText="Enviar" onFunc={Send}/>
    </div>
  )
}

export default App
