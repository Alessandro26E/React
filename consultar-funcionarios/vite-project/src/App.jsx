import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [lista, setlista] = useState([])
  const [listaSelect, setListaSelect] = useState([])
  const [totalFuncionarios, setTotalFuncionarios] = useState(0)
  const [cargo, setCargoSelect] = useState("")
  const [id, setId] = useState(21)

  async function getFuncionarios() {

    const resp = await fetch("./usuarios.json")
    const data = await resp.json()

    const items = data.map((pessoas) => {

      const novaLista = {
        id: pessoas.id,
        nome: pessoas.nome,
        email: pessoas.email,
        salario: pessoas.salario.toLocaleString("pt-br", {style: "currency", currency: "brl"}),
        cargo: pessoas.cargo
      }

      return novaLista
    })
    
    setlista([...lista, ...items])
    return lista
  }

  function selectCargo(cargoAtual) {

    setCargoSelect(cargoAtual)

    listaSelect.splice(0, listaSelect.length)

    const novaLista = lista.filter((pessoas) => pessoas.cargo === cargoAtual)
    setListaSelect([...listaSelect, ...novaLista])
  }
  
  async function addFuncionario(nome, email, salario, cargo) {

    const novaListagem = {
        id: id,
        nome: nome,
        email: email,
        salario: Number(salario).toLocaleString("pt-br", {style: "currency", currency: "brl"}),
        cargo: cargo
    }

    setlista((prev) => [...prev, novaListagem])
    setId(id + 1)
    console.log(...lista)
  }

  useEffect(() => {
    getFuncionarios()
  }, [])

  useEffect(() => {
    setTotalFuncionarios(lista.length)
  
  }, [lista])

  return (
    <div className='h-screen w-screen bg-[#2e2e2e] flex items-center p-5 gap-4'>

      <div className='bg-white w-[350px] h-[600px] rounded-[10px] flex justify-center items-center flex-col '>
        <h1 className='font-bold text-[20px]' >TOTAL DE FUNCIONARIOS: {totalFuncionarios}</h1>
        <div className='w-full h-[90%] mt-2 p-2 flex flex-col gap-2 items-center overflow-auto'>

        {lista.map((pessoas) => (
          <div key={pessoas.id} className='bg-[#2b2b2b] w-full h-[150px] rounded-md text-start pl-1'>
            <h1 className='text-white'>ID: {pessoas.id}</h1>
            <h1 className='text-white'>Nome: {pessoas.nome}</h1>
            <h1 className='text-white'>Email: {pessoas.email}</h1>
            <h1 className='text-white'>Salario: {pessoas.salario.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h1>
            <h1 className='text-white'>Cargo: {pessoas.cargo}</h1>
          </div>
        ))}
          
        </div>

        
      </div>
      
      <div className='bg-white w-[350px] h-[600px] rounded-md'>
            <div className='w-full h-[50px] items-center justify-center flex flex-col'>
              <h1 className='font-bold'>SELECIONE UM CARGO</h1>
              
              <select onChange={(event) => selectCargo(event.target.value)} name="cargos" id="cargosid"  className='bg-[#2c2c2c] rounded-md text-white p-1'>
                <option selected >ESCOLHA UM CARGO</option>
                <option value="Estagiario">Estagiario</option>
                <option value="Junior">Junior</option>
                <option value="Ceo">Ceo</option>
                <option value="Pleno">Pleno</option>
                <option value="Senior">Senior</option>
              </select>
            </div>

            <div className='w-full h-[540px] mt-2 overflow-auto flex flex-col gap-1 p-2'>

              <h1 className='font-bold'>TOTAL DE FUNCIONARIOS NO CARGO: {listaSelect.length}</h1>

                {listaSelect.map((pessoas) => (
                  <div key={pessoas.id} className='bg-[#2b2b2b] w-full h-[150px] rounded-md text-start pl-1'>
                    <h1 className='text-white'>ID: {pessoas.id}</h1>
                    <h1 className='text-white'>Nome: {pessoas.nome}</h1>
                    <h1 className='text-white'>Email: {pessoas.email}</h1>
                    <h1 className='text-white'>Salario: {pessoas.salario.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</h1>
                    <h1 className='text-white'>Cargo: {pessoas.cargo}</h1>
                  </div>
                ))}
                
            </div>

      </div>

      <div className='bg-white w-[265px] h-[260px] rounded-md flex flex-col gap-2 p-2'>
        <h1 className='font-bold text-center'>CONTRATAR FUNCIONARIO</h1>
        
        <input id='nomeId' type="text"  className='bg-[#2b2b2b] w-[250px] h-[50px] rounded-md text-white pl-2' placeholder='NOME DO FUNCIONARIO'/>
        <input id='emailId' type="text"  className='bg-[#2b2b2b] w-[250px] h-[50px] rounded-md text-white pl-2' placeholder='EMAIL DO FUNCIONARIO'/>     
        <input id='salarioId' type="text"  className='bg-[#2b2b2b] w-[250px] h-[50px] rounded-md text-white pl-2' placeholder='SALARIO DO FUNCIONARIO'/>  

        <select name="cargo" id="cargoid" className='bg-[#2c2c2c] rounded-md text-white p-1 w-[250px]'>
          <option selected>DEFINE UM CARGO</option>
          <option value="Estagiario">Estagiario</option>
          <option value="Junior">Junior</option>
          <option value="Ceo">Ceo</option>
          <option value="Pleno">Pleno</option>
          <option value="Senior">Senior</option>
        </select>
        
        <button 
        onClick={() => addFuncionario( document.getElementById("nomeId").value, document.getElementById("emailId").value, document.getElementById("salarioId").value, document.getElementById("cargoid").value )} 
        className='bg-blue-600 rounded-md text-white font-semibold p-2 cursor-pointer'>CONTRATAR</button>

      </div>

    </div>
  )
}

export default App
