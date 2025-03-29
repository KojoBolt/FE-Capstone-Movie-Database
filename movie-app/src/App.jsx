import React, { useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import MovieList from './components/pages/MovieList'
import { Pagenotfound } from './components/pages/Pagenotfound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'


function App() {
  return (
    <Router>
    <AuthContextProvider> 
    <Navbar/>
      <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/login.jsx' element={ <Login/>}/>
      <Route path='signup.jsx' element={ <Signup/>}/>
      <Route path='movielist.jsx' element={ <MovieList />}/>
      <Route path='*' element={ <Pagenotfound/>}/>
      </Routes>
   
    </AuthContextProvider>
    </Router>
   
  )
}

export default App