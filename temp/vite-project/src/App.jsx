import './App.css'

function App() {

  return (
   <div className='bg-gray-950 w-screen h-screen flex items-center justify-center'>
      <div className='bg-white w-[450px] h-[600px] rounded-2xl flex flex-col justify-center'>
        <div className='w-full h-[60px] flex items-center justify-center gap-2'>
            <input placeholder='NOME DA TAREFA' type="text" className='bg-gray-300 rounded-md w-[300px] h-[35px] mt-2 p-2' />
            <button className='bg-green-500 h-[35px] rounded-md text-white p-2 cursor-pointer'>ADICIONAR</button>
        </div>

        <div className='w-full h-full'></div>
          <div className='bg-gray-300 w-[400px] h-[70px] rounded-md'>
            <h1 className='text-center'>Nome da tarefa</h1>
          </div>
      </div>
   </div>
  )
}

export default App
