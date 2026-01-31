import './App.css'
import './styles/globalStyle.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import AppContext from '././context/appContext'
import { useState } from 'react'

function App() {
  const [pageAtual, setPageAtual] = useState('RegistroPonto')

  return (
    <div className='container'>
      <AppContext.Provider value={ { pageAtual , setPageAtual} } >
        <Header/>
        <Home/>
      </AppContext.Provider>
      
    </div>
  )
}

export default App
