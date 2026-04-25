import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='bg-[#0e0e0e] w-screen h-screen flex items-center justify-center'>

      <div className='bg-white w-[500px] h-[200px] rounded-[20px]'>
        <h1 className='text-center font-semibold text-[15px] mt-2'>CADASTRO DE USUARIO</h1>

        <form className='flex flex-col gap-2 items-center' action="">
          <input required onChange={(event) => setEmail(event.target.value)} className='bg-gray-300 rounded-md w-[250px] h-[30px] text-center' type="email"  placeholder='Digite seu e-mail'/>
          <input required onChange={(event) => setPassword(event.target.value)} className='bg-gray-300 rounded-md w-[250px] h-[30px] text-center' type="password"  placeholder='Digite sua senha'/>
          <button type='submit' className='bg-blue-600 text-white w-[200px] h-[40px] rounded-md font-semibold text-[17px]'>Cadastrar</button>
        </form>
      </div>

    </div>
  )
}

export default App
