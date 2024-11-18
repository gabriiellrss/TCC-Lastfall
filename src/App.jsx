import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './Components/menu'
import "/src/App.scss"
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/Quem somos' element={<Home/>}/>
              <Route path='/Sinopse' element={<Home/>}/>
              <Route path='/Contato' element={<Home/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </>
  )
}

export default App
