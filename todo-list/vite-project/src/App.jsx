import './App.css'
import { BiBarChartAlt2  } from 'react-icons/bi'
import List from './components/list/List'
function App() {

  return (
    <div className='w-screen h-screen bg-[#FCFCFD] flex items-center  flex-col'>

      <div className='w-[200px] h-[180px] flex items-center justify-center flex-col'>
        <div className='w-[50px] h-[50px] text-white bg-[#6E47E5] rounded-md flex items-center justify-center '>
          <BiBarChartAlt2 className='text-4xl'/>
        </div>
        
        <h1 className='text-[#1F1F2E] font-bold text-[25px] font-[Inter]'>Minhas Tarefas</h1>
        <p className='text-[#525252] font-[Inter] font-medium text-[13px]'>segunda, 14 de fevereiro</p>
      </div>

      <List/>

    </div>
  )
  
}

export default App
