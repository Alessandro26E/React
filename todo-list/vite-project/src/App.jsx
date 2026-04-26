import './App.css'
import { BiBarChartAlt2  } from 'react-icons/bi'
import List from './components/list/List'
import { createContext, useEffect, useState } from 'react'
import AppContext from './context/appContext'
import { MdModeNight } from "react-icons/md";

function App() {
  const [length, setLength] = useState(0)
  const [state, setState] = useState('Todas')
  const [date, setDate] = useState('')
  const [theme, setTheme] = useState('Light')

  function atualizandoData() {
    const Hoje = new Date()
    const nomeDia = Hoje.toLocaleDateString('pt-BR', {weekday: 'long'})
    const dataHoje = String(Hoje.getDate()).padStart(2,'0')
    const mesAtual = Hoje.toLocaleDateString('pt-BR', { month: 'long' });
    setDate(`${nomeDia}, ${dataHoje} de ${mesAtual}`)
  }

  function mudarTema () {
    if (theme === "Light") {
      setTheme("Dark")
    } else {
       setTheme("Light")
    }
    console.log(theme)
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

      <div className={`${theme == "Dark" ? "bg-[#111111]" : "bg-[#FCFCFD]"} transition delay-100 w-screen h-screen flex items-center overflow-hidden flex-col`}>

        <button onClick={mudarTema} className={`${theme === "Dark" ? "bg-[#FCFCFD]" : "bg-[#252525]"} transition delay-100 w-[30px] h-[30px] cursor-pointer mt-2 rounded-md flex items-center justify-center`}> <MdModeNight className={`${theme == "Light" ? "text-white" : ""}`}/> </button>

        <div className="w-[200px] h-[180px] flex items-center justify-center flex-col">

          <div className="w-[50px] h-[50px] text-white bg-[#6E47E5] rounded-md flex items-center justify-center ">
            <BiBarChartAlt2 className="text-4xl" />
          </div>

          <h1 className={`${theme == "Dark" ? "text-[#ffffff]" : "text-[#1F1F2E]"} transition delay-100 font-bold text-[25px] font-[Inter]`}>Minhas Tarefas</h1>
          <p className={`${theme == "Dark" ? "text-[#d1cece]" : "text-[#525252]"} transition delay-100 font-Inter font-medium text-[13px]`}>{date}</p>

        </div>

        <List />
      </div>
    </AppContext.Provider>
  );
}

export default App
