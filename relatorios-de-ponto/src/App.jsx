import './App.css'
import './styles/globalStyle.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import AppContext from '././context/appContext'
import { useState } from 'react'

function App() {
  const [pageAtual, setPageAtual] = useState('RegistroPonto')
  const [status, setStatus] = useState('off')
  const [inicioPonto, setInicioPonto] = useState()
  const [saidaPonto, setSaidaPonto] = useState()
  const [registros, setRegistro] = useState([])
  const [Intervalo, setIntervalo] = useState(0)
  const [total, setTotal] = useState()

  return (
    <div className='container'>
      <AppContext.Provider value={ { 
        pageAtual , 
        setPageAtual, 
        status, 
        setStatus, 
        inicioPonto, 
        setInicioPonto, 
        saidaPonto, 
        setSaidaPonto,
        registros,
        setRegistro,
        Intervalo,
        setIntervalo,
        total,
        setTotal } } >

        <Header/>
        <Home/>
      </AppContext.Provider>
      
    </div>
  )
}

export default App
