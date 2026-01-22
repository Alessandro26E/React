import './App.css'

function App() {
  async function api() {
    const resp = await fetch('eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjJhZTQyYTFkMTVjYzQzODBiMThhZGIxODJhZGU3ODM5IiwiaCI6Im11cm11cjY0In0=')
    const data = await resp.json()
    console.log(data)
  }
  return (
    <div className='bg-gray-700 w-screen h-screen'></div>
  )
}

export default App
