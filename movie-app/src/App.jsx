import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router> 
       <Navbar/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='*' element={ <Login/>}/>
        <Route path='signup' element={ <Signup/>}/>
      </Routes>
      
    </Router>
  )
}

export default App;