import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


function App() {
  const [input, setInput] = useState('')
  const [users, setUsers] = useState([])
  const [Id, setId] = useState(0)
  const [cargo, setCargo] = useState('')
  const [lista, setLista] = useState([])
 
  function addUser() {

    if (input && cargo) {
      
      const newUser = {
        name: input,
        id: Id,
        Cargo: cargo
      }
      
      setId(Id + 1)
      setUsers((prev) => [...prev, newUser])
    }
    
  }

  function removeUser (userId) {
    const newLista = users.filter((user) => user.id !== userId)
    setUsers(newLista)
  }

  function filtrarMembros(newCargo) {
    const Membros = users.filter((membro) => membro.Cargo === newCargo )
    setLista(Membros)
  }

  return (
    <div className="bg-[#050505] flex flex-col w-screen gap-4 h-[1200px] flex items-center justify-center">
      <input
        onChange={(event) => setInput(event.target.value)}
        type="text"
        placeholder="Nome do Usuario"
        className="bg-white mb-5 rounded-2xl w-[350px] h-[50px] font-medium text-center"
      />

      <select
        onChange={(event) => setCargo(event.target.value)}
        className="bg-white mb-4 rounded-md w-[200px] h-[30px]"
      >
        <option value='' selected>Escolha um cargo</option>
        <option value="Estagiario">Estagiario</option>
        <option value="CEO">CEO</option>
        <option value="Junior">Junior</option>
        <option value="Pleno">Pleno</option>
        <option value="Senior">Senior</option>
      </select>

      <button
        onClick={addUser}
        className="bg-blue-600 text-white font-medium text-1xl w-[150px] h-[40px] rounded-2xl mb-2 cursor-pointer"
      >
        Adicionar
      </button>

      <div className="w-[450px] h-[600px] bg-white overflow-y-auto flex flex-col rounded-md">
        {users.map((user) => (
          <div
            onClick={() => removeUser(user.id)}
            key={user.id}
            className="bg-black w-[430px] h-[60px] rounded-md m-2 flex items-center justify-between pl-5"
          >
            <h1 className="text-white font-medium">{user.name}</h1>
            <h1 className="text-white font-medium mr-5">Cargo: {user.Cargo}</h1>
          </div>
        ))}
      </div>

      <div className="bg-white h-[400px] w-[450px] rounded-md mb-2">
        <div className="w-full h-auto flex items-center justify-center">

          <select onChange={(event) => filtrarMembros(event.target.value)} className="bg-gray-400 mb-4 rounded-md w-[200px] h-[30px]">
            <option selected>Escolha um cargo</option>
            <option value="Estagiario">Estagiario</option>
            <option value="CEO">CEO</option>
            <option value="Junior">Junior</option>
            <option value="Pleno">Pleno</option>
            <option value="Senior">Senior</option>
          </select>

        </div>

        <div className=' w-full h-[300px] gap-2 flex flex-col overflow-y-auto'>

          {
            lista.map((usuario) => (
              <div key={usuario.id} className="bg-gray-900 text-white flex h-[40px] justify-between items-center">
                <h1 className="ml-2">{usuario.name}</h1>
                <h1 className="mr-2">{usuario.Cargo}</h1>
              </div>
            ))
          }

        </div>

        <div className='bg-red-500 h-[500px] w-[450px] flex flex-col mt-15 rounded-md'>
          <Card texto='eae galera' text2=' tudo bem?' />
        </div>
      </div>
    </div>
  );
}

export default App
