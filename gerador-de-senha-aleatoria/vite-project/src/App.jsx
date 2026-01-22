import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [senhaAtual, setSenha] = useState('')
  const [senhaLength, setSenhaLength] = useState(8)

  const letras = ['a','b','c','b','d','e','f','g','h','i','j','k']

  function gerarSenha() {
    let novaSenha = ''

    for (let i=0; i<senhaLength; i++) {
      const indexAleatorio = Math.floor(Math.random() * letras.length)
      novaSenha += letras[indexAleatorio]
    }

    const senhaArray = novaSenha.split('')
    const indicesUsados = []

    while (indicesUsados.length < senhaLength/2) {
      const index = Math.floor(Math.random() * senhaArray.length)

      if (!indicesUsados.includes(index)) {
        indicesUsados.push(index)
        senhaArray[index] = senhaArray[index].toUpperCase()
      }
    }

    novaSenha = senhaArray.join('')
    setSenha(novaSenha)
  }

  return (
   <div className='bg-[#0e0e0e] w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-white text-6xl font-bold'>Gerador de <span id='senhaText'>Senhas</span></h1>
      <p className='text-white text-center w-[350px] m-5 font-light'>Crie senhas fortes e seguras instantaneamente. Totalmente offline e privado.</p>

      <div className='container'>
          <h1 id='passwordtext'>Senha: {senhaAtual}</h1>
          <button onClick={gerarSenha}>Gerar Senha Aleatoria</button>
          <div className='box'>
            <input type="text" onChange={(event) => setSenhaLength(event.target.value)}/>
            <p>Tamanho da senha</p>
          </div>
          

      </div>

   </div>
  )
}

export default App
