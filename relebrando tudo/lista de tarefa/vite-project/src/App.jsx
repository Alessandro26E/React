import { useEffect, useState } from 'react';
import './App.css'
import { BiSolidTrashAlt,BiCalendarEdit,BiCheckbox,BiCheckboxChecked } from "react-icons/bi";


function App() {
  const [task, setTask] = useState(() => {
    const data = localStorage.getItem("Tarefa")
    return data ? JSON.parse(data) : []
  })

  const [input, setInput] = useState('')
  const [id, setId] = useState(0)

  useEffect(() => {
    localStorage.setItem("Tarefa", JSON.stringify(task))
    const maiorId = Math.max(...task.map((item) => item.id))
    
    setId(Number(maiorId) + 1)
    console.log(id)
  },[task])

  function addTask() {
    const date = new Date()
    const hora = date.getHours()
    const minutos = date.getMinutes()
    const seconds = date.getSeconds()

    if (input) {
      const novaTask = {
        nome: input,
        id: id,
        isChecked: false,
        hora: `Criada em ${hora}:${minutos}:${seconds}`,
        hidden: false
      }

      setTask((prev) => [novaTask, ...prev])
      setId((prevId) => prevId + 1)
    }
  }

  function deleteTask(taskId) {
    const novaLista = task.filter((tarefa) => tarefa.id !== taskId)
    return setTask(novaLista)
  }

  function checkTask(taskId) {
    setTask(task.map(task => task.id === taskId ? {...task, isChecked: !task.isChecked} : task))
  }

  function editingTask(taskId) {
    const Tarefa = task.map((item) => {
      if (item.id === taskId) {
        return {...item, hidden : !item.hidden}
      }

      return item
    })
    setTask(Tarefa)
  }

  function atualizarTask(taskId) {
   const Tarefa = task.map((item) => {
    if (item.id === taskId) {
      return {...item, nome: input}
    }
    return item
   })

   setTask(Tarefa)
  }

  return (
    <div className='bg-[#1f1e1f] w-screen h-screen flex gap-2 items-center justify-center'>
      <div className='bg-white w-[430px] h-[500px] rounded-2xl flex flex-col items-center'>
        <h1 className='font-bold mr-60 mt-3 mb-3 text-[20px]'>Lista de Tarefas</h1>

        <div className=' w-auto h-auto flex gap-2'>
            <input onChange={(event) => setInput(event.target.value)} type="text" required placeholder='Adicione uma Tarefa' className='bg-[#dedfde] pl-2 rounded-2xl w-[300px] h-[45px]' />
            <button onClick={addTask} className='bg-blue-600 text-white p-2 rounded-2xl cursor-pointer h-[45px]'>Adicionar</button>
        </div>

        <div className='overflow-y-auto w-auto transition-all h-[380px] flex flex-col gap-2 mt-2'>
           {task.map((task) => (

             <div key={task.id} id={task.id} className={`${task.isChecked ? "bg-[#7cf763]" : "bg-[#dadada]" } transition-all duration-300 w-[400px] h-[50px] flex flex-col items-center justify-between rounded-2xl ${task.hidden ? "h-[140px] items-start pt-2" : "h-[50px]"} `}>
                  <div className={` w-full h-[50px] flex items-center justify-between ${task.hidden ? "mt-[-10px]" : ""}`}>
                      <div className={`w-full  h-[50px]`}>
                        <h1 className={`pl-2 pt-3 font-semibold ${task.hidden ? "items-start" : ""}`}>{task.nome}</h1>
                      </div>
                      

                      <div className={`mr-2 w-[80px] h-full flex gap-2 items-center justify-center transition-all duration-300 `}>
                          <span onClick={() => editingTask(task.id)} className='cursor-pointer text-[20px]'><BiCalendarEdit/></span>
                          <span onClick={() => deleteTask(task.id)} className='cursor-pointer text-[20px]'><BiSolidTrashAlt/></span>
                          <span onClick={() => checkTask(task.id)} className='cursor-pointer text-[20px]'>{task.isChecked ? <BiCheckboxChecked/> : <BiCheckbox/>}</span>
                      </div>
                  </div>

                  <div className=' w-full h-[100px]'>
                    <div className={`w-[210px] h-[95px] flex flex-col justify-center items-center gap-2 ${task.hidden ? "block" : "hidden"}`}>
                      <input onChange={(event) => setInput(event.target.value)} type="text" required placeholder='Atualize o Nome da Tarefa' className='bg-[#bebebe] p-1 w-[200px] h-[35px] text-[14px] rounded-md' />
                      <button onClick={() => atualizarTask(task.id)} className={`bg-[#38be02] text-white rounded-md w-[100px] cursor-pointer`}>Atualizar</button>
                    </div>
                  </div>


                  
                  
            </div>

           ))}

        </div>
        
      </div>
    </div>
  )
}

export default App
