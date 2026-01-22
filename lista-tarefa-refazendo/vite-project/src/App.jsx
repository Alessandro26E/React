import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState([])
  const [titulo, setTitle] = useState("")
  const [id, setId] = useState(0)

  function addTarefa() {
    if (titulo) {
      const novaTarefa = {
        Titulo: titulo,
        isCompleted: false,
        id: id,
      }

      setLista((prev) => [...prev, novaTarefa])
      setId(id+1)
    }
  }

  function removeTarefa(id) {
    const novaLista = lista.filter((item) => item.id !== id)
    return setLista(novaLista)
  }

  function marcarTarefa(id) {
    const novaLista = lista.map((task) => {
      if (task.id === id) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    return setLista(novaLista)
  }

  return (
   <div className='h-screen w-screen bg-[#252525] flex gap-5 flex-col items-center justify-center'>
      <div className='w-[500px] h-[70px] bg-white rounded-md flex items-center justify-center gap-5'>
        <input onChange={(event) => setTitle(event.target.value)} type="text"  placeholder='Digite o Nome da Tarefa' className='bg-gray-300 p-2 rounded-md w-[300px] text-center'/>
        <button onClick={addTarefa} className='bg-blue-600  text-white rounded-md h-[40px] w-[100px] cursor-pointer'>Adicionar</button>
      </div>

      <div className='w-[500px] h-[500px] bg-white rounded-[10px] flex flex-col items-center gap-2 p-2'>
        
        {lista.map((item) => (
          <button key={item.id} onClick={() => marcarTarefa(item.id)} className={`bg-gray-300 w-[450px] h-[60px] rounded-md cursor-pointer flex justify-between items-center p-2 ${item.isCompleted ? "line-through" : ""}`}>
            <h1>{item.Titulo}</h1>
            <button onClick={() => removeTarefa(item.id)} className='bg-red-600 text-white p-2 rounded-md cursor-pointer'>REMOVER</button>
         </button>
        ))}

      </div>
   </div>
  )
}

export default App
