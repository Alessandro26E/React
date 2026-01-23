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
    <div className='bg-gray-900 w-screen h-screen flex flex-col'>
      <h1 className='text-white font-bold text-center'>GERADOR DE PDF 2025</h1>
      <button onClick={() => generatePDF(getTargetElement, options)}>Generate PDF</button>
      <button onClick={() => generatePDF(getTargetElement, {filename: 'Pagina.pdf'})}>Download PDF</button>

      <div id='targetRef' >
        <h1 id='title'>TITULO DO PDf</h1>
        <p>Lorem ipsum dolor sit, aue dolores?</p>

      </div>
      
    </div>
  )
}

export default App
