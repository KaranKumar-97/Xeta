import './App.css'
import Dashboard from './Pages/Dashboard'
import Fitsnap from './Pages/Fitsnap'
import Homepage from './Pages/Homepage'
import { Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fitsnap"  element={<Fitsnap />} />
      </Routes>
    </>
  )
}

export default App
