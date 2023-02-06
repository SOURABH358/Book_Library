import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Subject from './components/Subjects'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:id' element={<Subject/>}/>
    </Routes>
    
  )
}

export default App
