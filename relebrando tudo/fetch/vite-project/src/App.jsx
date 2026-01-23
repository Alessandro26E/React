import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [cep, setcep] = useState("")

  const logradouroref = useRef()
  const complementoref = useRef()
  const bairroref = useRef()
  const localidaderef = useRef()
  const estadoref = useRef()
  const regiaoref = useRef()
  const dddref = useRef()

  async function consultarCep() {
    const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await resp.json()

    if (resp.status == 200) {
      console.log(data)

      logradouroref.current.innerText = `Logradouro: ${data.logradouro}`
      complementoref.current.innerText = `Complemento: ${data.complemento}`
      bairroref.current.innerText = `Bairro: ${data.bairro}`
      localidaderef.current.innerText = `Localidade: ${data.localidade}`
      estadoref.current.innerText = `Estado: ${data.estado}`
      regiaoref.current.innerText = `Região: ${data.regiao}`
      dddref.current.innerText = `DDD: ${data.ddd}`
    }
  }


  return (
    <div className='bg-[#1a1a1a] w-screen h-screen flex flex-col items-center justify-center gap-3'>
        <div className='bg-white w-[300px] h-[180px] rounded-md shadow-xl flex flex-col items-center gap-3 justify-center'>
          <h1 className='font-bold text-2xl text-center mt-2'>Consultar um CEP</h1>
          <input onChange={(event) => setcep(event.target.value)} type="text" required placeholder='DIGITE O CEP' className='bg-gray-200 rounded-md h-[35px] w-[200px] shadow-xs text-center' />
          <button onClick={consultarCep} className='bg-gray-900 text-white w-[150px] h-[40px] rounded-md cursor-pointer'>BUSCAR</button>
        </div>

        <div className='bg-white w-[300px] h-[250px] rounded-md flex flex-col'>
          <h1 className='text-center font-bold text-[17px] mt-2'>Resultado da Pesquisa</h1>
          <h1 ref={logradouroref} className='ml-5 font-semibold text-[15px]'>Logradouro: </h1>
          <h1 ref={complementoref} className='ml-5 font-semibold text-[15px]'>Complemento: </h1>
          <h1 ref={bairroref} className='ml-5 font-semibold text-[15px]'>Bairro: </h1>
          <h1 ref={localidaderef} className='ml-5 font-semibold text-[15px]'>Localidade: </h1>
          <h1 ref={estadoref} className='ml-5 font-semibold text-[15px]'>Estado: </h1>
          <h1 ref={regiaoref} className='ml-5 font-semibold text-[15px]'>Região: </h1>
          <h1 ref={dddref} className='ml-5 font-semibold text-[15px]'>DDD: </h1>
        </div>
    </div>
  )
}

export default App
