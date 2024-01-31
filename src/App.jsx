import { Routes, Route } from 'react-router-dom'
import Info from './pages/Info'
import Register from './pages/Register'
import Movies from './pages/Movies'
import Showcase from './pages/Showcase'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register/> }/>
      <Route path='/register' element={<Register/> }/>
      <Route path='/info' element={<Info/> }/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/showcase' element={<Showcase/>}/>
      <Route path='*' element={<h1>404 Page not found</h1>}/>
    </Routes>
  )
}

export default App
