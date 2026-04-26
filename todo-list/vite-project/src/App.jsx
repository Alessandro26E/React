import './App.css'
import { BiBarChartAlt2  } from 'react-icons/bi'
import List from './components/list/List'
import { createContext, useEffect, useState } from 'react'
import AppContext from './context/appContext'

function App() {
  const [length, setLength] = useState(0)
  const [state, setState] = useState('Todas')
  const [date, setDate] = useState('')


  function atualizandoData() {
    const Hoje = new Date()
    const nomeDia = Hoje.toLocaleDateString('pt-BR', {weekday: 'long'})
    const dataHoje = String(Hoje.getDate()).padStart(2,'0')
    const mesAtual = Hoje.toLocaleDateString('pt-BR', { month: 'long' });
    setDate(`${nomeDia}, ${dataHoje} de ${mesAtual}`)
  }

  useEffect(() => {
    atualizandoData()
  },[])
  return (
    <AppContext.Provider 
    value={{
      length, 
      setLength,
      state,
      setState
    } }>

      <div className="w-screen h-screen bg-[#FCFCFD] flex items-center  flex-col">
        <div className="w-[200px] h-[180px] flex items-center justify-center flex-col">

          <div className="w-[50px] h-[50px] text-white bg-[#6E47E5] rounded-md flex items-center justify-center ">
            <BiBarChartAlt2 className="text-4xl" />
          </div>

          <h1 className="text-[#1F1F2E] font-bold text-[25px] font-[Inter]">Minhas Tarefas</h1>
          <p className="text-[#525252] font-Inter font-medium text-[13px]">{date}</p>

        </div>

        <List />
      </div>
    </AppContext.Provider>
  );
}

export default App
