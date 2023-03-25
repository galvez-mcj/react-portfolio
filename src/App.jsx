import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default App
