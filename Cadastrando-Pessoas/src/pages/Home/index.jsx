import "./style.css";
import api from '../../services/api'
import { useEffect, useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputIdade = useRef()
  const inputEmail= useRef()

  async function getUsers () {
    const ApiUsers = await api.get('/usuarios')
    setUsers(ApiUsers.data)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  },[])

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      idade: Number(inputIdade.current.value),
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center gap-2">
      <div className="bg-[#313131] w-[400px] h-[400px] rounded-[20px] flex flex-col text-center gap-5 text-[6px] items-center justify-center">
        <h1 className="font-[Montserrat] font-bold">CADASTRO DE USUARIOS</h1>

        <form className="w-full h-auto flex flex-col gap-2 items-center">
          <input ref={inputName} className="bg-[#181818] p-2 rounded-md w-[300px] h-[40px] text-[16px]" type="text" placeholder="NOME" />
          <input ref={inputIdade} className="bg-[#181818] p-2 rounded-md w-[300px] h-[40px] text-[16px]" type="text" placeholder="IDADE" />
          <input ref={inputEmail} className="bg-[#181818] p-2 rounded-md w-[300px] h-[40px] text-[16px]" type="text" placeholder="EMAIL" />
        </form>

        <button onClick={createUsers} className="text-[15px] w-[200px] p-2">CADASTRAR</button>
      </div>


      <div className="w-[400px] h-[400px] rounded-2xl bg-[#313131] flex flex-col items-center pt-2 gap-3 overflow-auto">
        
        {users.map((user) => (
        <div key={user.id} className="bg-[#222222] rounded-md w-[360px] h-[160px] pt-2 flex flex-col items-center text-center">
          <button onClick={() => deleteUsers(user.id)}  className="w-[150px] ">REMOVER</button>

          <div className="w-full h-[200px]">
              <p className="text-2xl"><span className="font-semibold">Nome:</span>  {user.name}</p>
              <p className="text-2xl"><span className="font-semibold">Idade:</span> {user.idade}</p>
              <p className="text-2xl"><span className="font-semibold">Email:</span>  {user.email}</p>
          </div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default App;
