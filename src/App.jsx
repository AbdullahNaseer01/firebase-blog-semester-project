import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Route, Routes, } from 'react-router-dom'
import About from './pages/About'
import AddEditBlog from './pages/AddEditBlog'
import Details from './pages/Details'
import NoteFound from './pages/NoteFound'
import Contact from './pages/Contact'
// import Routes from './pages/Routes'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/create' element={<AddEditBlog/>}/>
    <Route path='/edit/:id' element={<AddEditBlog/>}/>
    <Route path='/detail/:id' element={<Details/>}/>
    <Route path='*' element={<NoteFound/>}/>
    </Routes>
    // <>
    // <Routes/>
    // </>
  )
}

export default App
