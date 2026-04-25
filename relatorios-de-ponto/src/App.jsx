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
  const [inicioIntervalo, setInicioIntervalo] = useState()
  const [saidaIntervalo, setSaidaIntervalo] = useState()
  const [total, setTotal] = useState()
  const [totalTrabalho, setTotalTrabalho] = useState()
  const [id, setId] = useState(0)
  const [dataInicio, setDataInicio] = useState('2026-01-31')
  const [dataFinal, setDataFinal] = useState('2025-01-01')
  const [formatoRelatorio, setFormatoRelatorio] = useState('PDF')
  
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
        inicioIntervalo,
        setInicioIntervalo,
        saidaIntervalo,
        setSaidaIntervalo,
        total,
        setTotal,
        id,
        setId,
        totalTrabalho,
        setTotalTrabalho,
        dataInicio,
        setDataInicio,
        dataFinal,
        setDataFinal,
        formatoRelatorio,
        setFormatoRelatorio, } } >

        <Header/>
        <Home/>
      </AppContext.Provider>
      
    </div>
  )
}

export default App
