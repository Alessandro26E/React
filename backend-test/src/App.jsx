import './App.css'
import api from '../src/services/api'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [tarefa, setTasks] = useState([])

  const emailRef = useRef()
  const tarefaRef = useRef()

  async function  addTask () {
    await api.post('/tasks', {
      email: emailRef.current.value,
      tarefa: tarefaRef.current.value
    })

    getTasks()
  }

  async function deleteTask(taksId) {
    await api.delete(`/tasks/${taksId}`)
    getTasks()
  }

  async function getTasks() {
    const tasks = await api.get('/tasks')

    setTasks(tasks.data)
  }

  useEffect(() => {
    getTasks()
  },[])

  return (
    <div className='bg-[#131313] w-screen h-screen flex flex-col gap-2 items-center justify-center'>
      <div className='bg-white w-[300px] h-[300px] rounded-2xl flex flex-col items-center justify-center gap-1 flex-wrap'>

        {
          tarefa.map((task) => (
            <div key={task.id} className='bg-gray-800 w-[100px] h-[60px] rounded-md  flex flex-col items-center justify-center'>
                <h1 className='text-white text-[11px]'>{task.email}</h1>
                <h1 className='text-white text-[11px]'>{task.tarefa}</h1>
                <button onClick={() => deleteTask(task.id)} className='bg-gray-400 cursor-pointer'>deletar</button>
            </div>
          ))
        }

      </div>

      <div className='bg-red-300 w-[300px] h-[200px] flex items-center justify-center flex-col gap-2 rounded-md'>
        <input type="text" className='bg-white w-[250px] rounded-md h-[50px]' placeholder='email' ref={emailRef} />
        <input type="text" className='bg-white w-[250px] rounded-md h-[50px]' placeholder='tarefa' ref={tarefaRef} />
        <button onClick={addTask} className='bg-blue-800 rounded-2xl text-white w-[150px] h-[30px] cursor-pointer'>cadastrar</button>
      </div>
    </div>
    
  )
}

export default App
