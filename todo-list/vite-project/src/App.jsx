import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [tarefa, setTarefa] = useState([])
  const [id, setId] = useState(0)
  const [isCompleted, setCompleted] = useState(false)
  
  function addTarefa() {
    if (title) {

      const novaTarefa = {
        Id: id,
        Titulo: title,
        isCompleted: isCompleted,
      }

      setTarefa((prev) => [...prev, novaTarefa])
      setId(id+1)
    }

  }

  function removerTarefa(idRecebido) {
    const tarefaAtualizada = tarefa.filter((task) => task.Id !== idRecebido)
    setTarefa(tarefaAtualizada)
  }

  function marcarTarefa(idRecebido) {
    const novaTarefa = tarefa.map((task) => {
      if (task.Id === idRecebido) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task
    });


    setTarefa(novaTarefa)
    setCompleted(!isCompleted)

  }


  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
        <div className='bg-white w-[450px] h-[600px] rounded-md flex flex-col'>

            <div className='w-full h-[100px] flex gap-6 justify-center items-center'>
              <input onChange={(event) => setTitle(event.target.value)} className='bg-[#dfdfdf] h-[40px] p-5 rounded-md' type="text" placeholder='Digite o nome da tarefa'/>
              <button onClick={addTarefa} className='bg-blue-600 text-white p-2 rounded-md cursor-pointer '>Adicionar Tarefa</button>
            </div>

            <div className='w-full h-full'>

              {tarefa.map((tarefa) => (

                <div key={tarefa.Id} className='w-full h-[50px] flex justify-between bg- p-1 items-center'>
                    <button onClick={() => marcarTarefa(tarefa.Id)} className={`bg-[#dfdfdf] h-[40px] w-[330px]  rounded-md font-bold text-start pl-2 cursor-pointer ${tarefa.isCompleted ? "line-through" : ""}`}>{tarefa.Titulo}</button>
                    <button onClick={() => removerTarefa(tarefa.Id)} className='bg-red-600 text-white p-2 rounded-md w-[100px] cursor-pointer'>Remover</button>
                </div>

              ))}  

            </div>

        </div>
    </div>
  )
}

export default App
