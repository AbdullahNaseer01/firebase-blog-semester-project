import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import About from './pages/About'
import AddEditBlog from './pages/AddEditBlog'
import Details from './pages/Details'
import NoteFound from './pages/NoteFound'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
function App() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate("/auth");
    });
  };

  return (
    <>
    <ToastContainer position="top-center" />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/create' element={<AddEditBlog/>}/>
    <Route path='/edit/:id' element={<AddEditBlog/>}/>
    <Route path='/detail/:id' element={<Details/>}/>
    <Route
          path="/auth"
          element={<Auth setUser={setUser} />}
        />
    <Route path='*' element={<NoteFound/>}/>
    </Routes>
 
 </>
  )
}

export default App
