import './App.css'
import generatePDF, { Margin }  from 'react-to-pdf';


function App() {
  const getTargetElement = () => document.getElementById('targetRef');

  const options = {
    method: 'open',
     page: {
      margin: Margin.MEDIUM,
      format: 'A4',
      orientation: 'portrait',
   },
  }

  return (
    <div className='bg-[#141414] w-screen h-screen flex flex-col'>

      <div className='bg-[#1f1f1f] w-[300px] h-[150px] flex justify-start flex-col items-center rounded-[7px]'>

        <h1 className='text-white font-bold text-center'>GERADOR DE PDF 2025</h1>
        <button className='bg-black text-white rounded-md font-medium w-[130px] h-[50px] cursor-pointer' onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
        <button className='bg-black text-white rounded-md font-medium w-[130px] h-[50px] mt-2 cursor-pointer' onClick={() => generatePDF(getTargetElement, {filename: 'Pagina.pdf'})}>Download PDF</button>

      </div>

      <div className='container' id='targetRef' >
        <h1 className='text-white' id='title'>TITULO DO PDf</h1>
        <p>Lorem ipsum dolor sit, aue dolores?</p>

      </div>
      
    </div>
  )
}

export default App
